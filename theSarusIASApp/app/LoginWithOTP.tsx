import { useCallback, useEffect, useState } from "react"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    BackHandler,
    Image,
    Alert,
    Keyboard
} from "react-native"
import { Colors, themeColor } from "../constants/Colors"
import AlertCustomise from "../components/ui/AlertCustomise"
import { useFocusEffect, useRouter } from "expo-router";
import { AlertProps } from "@/types/Alert";

export default function LoginWithOTP() {
    const [phone, setPhone] = useState<string>("");
    const [alertContent, setAlertContent] = useState<AlertProps>({
        visible: false,
        title: "",
        message: "",
        confirmLabel: "",
        cancelLabel: ""
    });
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const [kbBehavior, setKbBehavior] = useState<"padding" | "height" | undefined>(
        Platform.OS === 'ios' ? 'padding' : 'height'
    );

    const showAlert = (props: Partial<AlertProps>) => {
        setAlertContent({
            visible: true,
            title: props.title ?? "",
            message: props.message ?? "",
            confirmLabel: props.confirmLabel ?? "Ok",
            cancelLabel: props.cancelLabel ?? "",
            onConfirm: props.onConfirm,
            onCancel: props.onCancel,
        })
    }

    const handleLogin = async () => {
        const phoneNumber = Number(phone);

        // Check if phone is empty or too short
        if (!phone.trim() || phone.length < 8) {
            showAlert({
                title: "Error",
                message: "Please enter a valid Phone Number",
            })
            // Alert.alert("Error", "Please enter a valid Phone Number");
            return;
        }

        // You could also validate strictly numeric input here
        if (isNaN(phoneNumber)) {
            showAlert({
                title: "Error",
                message: "Please enter a valid Phone Number",
            })
            //Alert.alert("Error", "Phone number must be numeric");
            return;
        }

        // setLoading(true);

        router.push({
            pathname: "/OtpVerify",
            params: { phone }, // send as string
        });
    };

    const backAction = () => {
        showAlert({
            title: "Exit",
            message: "Are you sure you want to exit app?",
            confirmLabel: "Yes",
            cancelLabel: "Cancel",
            onConfirm: () => BackHandler.exitApp(),
        })
        return true;
    };

    useFocusEffect(
        useCallback(() => {
            const backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                backAction
            );

            return () => backHandler.remove();
        }, [])
    );

    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', () => {
            setKbBehavior(Platform.OS === 'ios' ? 'padding' : 'height');
        });
        const hideSub = Keyboard.addListener('keyboardDidHide', () => {
            setKbBehavior(undefined); // reset so no padding remains
        });

        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    return (
        <KeyboardAvoidingView style={styles.container} behavior={kbBehavior}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Image
                        source={require("../assets/images/thesaruslogo.jpg")}
                        style={styles.image}
                        resizeMode="contain" // contain | cover | stretch | center
                    />
                    <Text style={styles.title}>The Sarus Learning App</Text>
                    <Text style={styles.subtitle}>Learning within you</Text>
                    {/* <Text style={styles.examTitle}>Combined Graduate Level Examination</Text> */}
                </View>

                <View style={styles.loginCard}>
                    <Text style={styles.loginTitle}>Login with OTP</Text>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        {/* Country code input (fixed) */}
                        <TextInput
                            style={[styles.input, { width: 60, textAlign: "center", marginRight: 8 }]}
                            value="+91"
                            editable={false}
                            placeholderTextColor={Colors.textSecondary}
                        />

                        {/* Phone number input */}
                        <TextInput
                            style={[styles.input, { flex: 1 }]}
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="numeric"
                            maxLength={10} // typical for Indian numbers
                            placeholder="Enter your Phone Number"
                            placeholderTextColor={Colors.textSecondary}
                        />
                    </View>

                    <TouchableOpacity
                        style={[styles.loginButton, loading && styles.loginButtonDisabled]}
                        onPress={handleLogin}
                        disabled={loading}
                    >
                        <Text style={styles.loginButtonText}>{loading ? "Logging in..." : "Get OTP"}</Text>
                    </TouchableOpacity>

                    <View style={styles.instructions}>
                        <Text style={styles.instructionTitle}>Important Instructions:</Text>
                        <Text style={styles.instructionText}>• Use your registered Phone Number</Text>
                        {/* <Text style={styles.instructionText}>• Use your registered Roll Number and Password</Text> */}
                        <Text style={styles.instructionText}>• Ensure stable internet connection</Text>
                        <Text style={styles.instructionText}>• Do not refresh or close the App</Text>
                        <Text style={styles.instructionText}>• Contact helpdesk for technical issues</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>© 2025 thesarus.in</Text>
                    {/* <Text style={styles.footerText}>Government of India</Text> */}
                </View>

                <AlertCustomise
                    visible={alertContent?.visible}
                    title={alertContent?.title}
                    message={alertContent?.message}
                    confirmLabel={alertContent?.confirmLabel}
                    cancelLabel={alertContent?.cancelLabel}
                    onConfirm={() => {
                        if (alertContent.onConfirm) alertContent.onConfirm()
                        setAlertContent((prev) => ({ ...prev, visible: false }))
                    }}
                    onCancel={() => {
                        if (alertContent.onCancel) alertContent.onCancel()
                        setAlertContent((prev) => ({ ...prev, visible: false }))
                    }}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        marginBottom: 30
    },
    header: {
        alignItems: "center",
        // marginBottom: 40,
        // paddingTop: 20,
        marginVertical: 40
    },
    title: {
        fontSize: 24,
        fontWeight: "semibold",
        color: themeColor?.secondary,
        textAlign: "center",
        marginBottom: 8,
    },
    image: {
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 0.2,
        width: 100,
        height: 100,
        marginVertical: 30
    },
    subtitle: {
        fontSize: 17,
        color: Colors.textSecondary,
        textAlign: "center",
        marginBottom: 4,
    },
    examTitle: {
        fontSize: 16,
        color: Colors.textSecondary,
        textAlign: "center",
        fontStyle: "italic",
    },
    loginCard: {
        backgroundColor: Colors.surface,
        borderRadius: 12,
        padding: 24,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    loginTitle: {
        fontSize: 18,
        fontWeight: "semibold",
        color: Colors.text,
        textAlign: "center",
        marginBottom: 24,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.text,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: Colors.text,
        backgroundColor: Colors.background,
    },
    loginButton: {
        backgroundColor: themeColor?.secondary,
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
        marginTop: 30,
        marginBottom: 40,
    },
    loginButtonDisabled: {
        backgroundColor: Colors.textSecondary,
    },
    loginButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    instructions: {
        backgroundColor: Colors.warning + "20",
        borderRadius: 8,
        padding: 16,
        borderLeftWidth: 4,
        borderLeftColor: Colors.warning,
    },
    instructionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.text,
        marginBottom: 8,
    },
    instructionText: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginBottom: 4,
        lineHeight: 20,
    },
    footer: {
        alignItems: "center",
        marginTop: "auto",
        paddingTop: 10,
    },
    footerText: {
        fontSize: 12,
        color: Colors.textSecondary,
        textAlign: "center",
    },
})
