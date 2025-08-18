import { useState } from "react"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native"
import { Colors } from "../constants/Colors"
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const [name, setName] = useState<string>("");
    const [rollNumber, setRollNumber] = useState<string>("");
    // const [password, setPassword] = useState("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleLogin = async () => {
        // if (!rollNumber.trim() || !password.trim()) {
        //     Alert.alert("Error", "Please enter both Roll Number and Password")
        //     return
        // }

        if (!rollNumber.trim() || !name.trim()) {
            Alert.alert("Error", "Please enter both Name and Roll Number")
            return
        }

        if (rollNumber.length < 8) {
            Alert.alert("Error", "Please enter a valid Roll Number")
            return
        }

        setLoading(true);

        router.replace({
            pathname: "/(tabs)/(exam)",
            params: { name, rollNumber },
        });
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>SSC CGL Examination</Text>
                    <Text style={styles.subtitle}>Staff Selection Commission</Text>
                    <Text style={styles.examTitle}>Combined Graduate Level Examination</Text>
                </View>

                <View style={styles.loginCard}>
                    <Text style={styles.loginTitle}>Candidate Login</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Enter your Name"
                            placeholderTextColor={Colors.textSecondary}
                            maxLength={40}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Roll Number</Text>
                        <TextInput
                            style={styles.input}
                            value={rollNumber}
                            onChangeText={setRollNumber}
                            placeholder="Enter your Roll Number"
                            placeholderTextColor={Colors.textSecondary}
                            autoCapitalize="characters"
                            maxLength={12}
                        />
                    </View>

                    {/* <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Enter your Password"
                            placeholderTextColor={Colors.textSecondary}
                            secureTextEntry
                            maxLength={20}
                        />
                    </View> */}

                    <TouchableOpacity
                        style={[styles.loginButton, loading && styles.loginButtonDisabled]}
                        onPress={handleLogin}
                        disabled={loading}
                    >
                        <Text style={styles.loginButtonText}>{loading ? "Logging in..." : "Login"}</Text>
                    </TouchableOpacity>

                    <View style={styles.instructions}>
                        <Text style={styles.instructionTitle}>Important Instructions:</Text>
                        <Text style={styles.instructionText}>• Use your registered Roll Number</Text>
                        {/* <Text style={styles.instructionText}>• Use your registered Roll Number and Password</Text> */}
                        <Text style={styles.instructionText}>• Ensure stable internet connection</Text>
                        <Text style={styles.instructionText}>• Do not refresh or close the browser</Text>
                        <Text style={styles.instructionText}>• Contact helpdesk for technical issues</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>© 2025 Staff Selection Commission</Text>
                    <Text style={styles.footerText}>Government of India</Text>
                </View>
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
        marginBottom: 40,
        paddingTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: Colors.primary,
        textAlign: "center",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
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
        fontSize: 24,
        fontWeight: "bold",
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
        backgroundColor: Colors.primary,
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
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
        paddingTop: 20,
    },
    footerText: {
        fontSize: 12,
        color: Colors.textSecondary,
        textAlign: "center",
    },
})
