import { useCallback, useEffect, useRef, useState } from "react"
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
    Keyboard,
} from "react-native"
import { Colors, themeColor } from "../constants/Colors"
import AlertCustomise from "../components/ui/AlertCustomise"
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router"
import { AlertProps } from "@/types/Alert"

export default function OtpVerify() {
    const { phone } = useLocalSearchParams<{ phone: string }>();
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef<TextInput[]>([]);
    const [loading, setLoading] = useState(false);
    const [alertContent, setAlertContent] = useState<AlertProps>({
        visible: false,
        title: "",
        message: "",
        confirmLabel: "",
        cancelLabel: ""
    });
    const [kbBehavior, setKbBehavior] = useState<"padding" | "height" | undefined>(
        Platform.OS === 'ios' ? 'padding' : 'height'
    );
    const router = useRouter();

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

    const handleChange = (text: string, index: number) => {
        if (/^\d$/.test(text)) {
            const newOtp = [...otp]
            newOtp[index] = text
            setOtp(newOtp)

            // Move to next box automatically
            if (index < 3) {
                inputs.current[index + 1]?.focus()
            }
        }
    }

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1]?.focus()
        }
    }

    const handleVerifyOtp = () => {
        const finalOtp = otp.join("")
        if (finalOtp.length < 4) {
            showAlert({
                title: "Error",
                message: "Please enter the 4-digit OTP",
            })
            return
        }

        setLoading(true)

        // Simulate OTP verification
        setTimeout(() => {
            setLoading(false)
            router.push("/(exam)")
        }, 1000)
    }

    const backAction = () => true

    // const backAction = () => {
    //     showAlert({
    //         title: "Exit",
    //         message: "Are you sure you want to exit app?",
    //         confirmLabel: "Yes",
    //         cancelLabel: "Cancel",
    //         onConfirm: () => BackHandler.exitApp(),
    //     })
    //     return true;
    // };

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
        <KeyboardAvoidingView
            style={styles.container}
            behavior={kbBehavior}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Verify OTP</Text>
                    <Text style={styles.subtitle}>
                        Enter the OTP sent to +91 {phone}
                    </Text>
                </View>

                <View style={styles.otpCard}>
                    <View style={styles.otpRow}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => {
                                    if (ref) inputs.current[index] = ref
                                }}
                                style={styles.otpBox}
                                keyboardType="numeric"
                                maxLength={1}
                                value={digit}
                                onChangeText={(text) => handleChange(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                            />
                        ))}
                    </View>

                    <TouchableOpacity
                        style={[styles.verifyButton, loading && styles.verifyButtonDisabled]}
                        onPress={handleVerifyOtp}
                        disabled={loading}
                    >
                        <Text style={styles.verifyButtonText}>
                            {loading ? "Verifying..." : "Verify OTP"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.resendText}>Resend OTP</Text>
                    </TouchableOpacity>
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
    },
    header: {
        alignItems: "center",
        marginVertical: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: themeColor.secondary,
        textAlign: "center",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: Colors.textSecondary,
        textAlign: "center",
    },
    otpCard: {
        backgroundColor: Colors.surface,
        borderRadius: 12,
        padding: 24,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    otpRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    otpBox: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 8,
        width: 60,
        height: 60,
        textAlign: "center",
        fontSize: 22,
        color: Colors.text,
        backgroundColor: Colors.background,
    },
    verifyButton: {
        backgroundColor: themeColor.secondary,
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
        marginBottom: 20,
    },
    verifyButtonDisabled: {
        backgroundColor: Colors.textSecondary,
    },
    verifyButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    resendText: {
        fontSize: 14,
        color: themeColor.secondary,
        textAlign: "center",
        marginTop: 10,
    },
})
