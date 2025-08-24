import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { themeColor } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function LaunchingSoonScreen() {

    const router = useRouter();

    return (
        <LinearGradient colors={[themeColor?.primary, themeColor?.secondary]} style={styles.container}>
            {/* Icon */}
            <View style={styles.iconWrapper}>
                <Ionicons name="rocket-outline" size={100} color="#fff" />
            </View>

            {/* Title */}
            <Text style={styles.title}>🚀 Launching Soon</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
                Stay tuned! Exciting features and test series are on the way.
            </Text>

            {/* Notify Button */}
            <TouchableOpacity style={styles.button} onPress={() => {
                router.push({
                    pathname: "/(home)",
                });
            }}>
                <Text style={styles.buttonText}>Notify Me</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    iconWrapper: {
        backgroundColor: "rgba(255,255,255,0.2)",
        padding: 30,
        borderRadius: 100,
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 12,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "rgba(255,255,255,0.9)",
        textAlign: "center",
        marginBottom: 40,
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        elevation: 5,
    },
    buttonText: {
        color: "#2196F3",
        fontWeight: "bold",
        fontSize: 16,
    },
});
