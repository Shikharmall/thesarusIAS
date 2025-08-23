import { themeColor } from "@/constants/Colors";
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

export default function Banner() {
    return (
        <View style={styles.banner}>
            {/* Left Content */}
            <View style={styles.leftContent}>
                <Text style={styles.title}>Good Morning,</Text>
                <Text style={styles.subtitle}>
                    You are almost there !
                </Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Buy your courses & test series now</Text>
                </Pressable>
            </View>

            {/* Right Image */}
            <Image
                source={require("../assets/images/thesaruslogo.jpg")}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: themeColor?.secondary,
        padding: 16,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        margin: 10
    },
    leftContent: {
        flex: 1,
        paddingRight: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 15,
        color: "rgba(255,255,255,0.9)",
        marginBottom: 8,
    },
    button: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: themeColor?.primary,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 15,
    },
    buttonText: {
        color: themeColor?.primary,
        fontWeight: "600",
        fontSize: 12
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#fff'
    },
});
