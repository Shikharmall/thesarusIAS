import { themeColor } from "@/utils/constant/Colors";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            {/* Spinner */}
            <ActivityIndicator size="large" color={themeColor?.secondary} />

            {/* Loading Text */}
            <Text style={styles.text}>Loading, please wait...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff", // clean background (can make purple if you want)
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        marginTop: 20,
        fontSize: 16,
        color: themeColor?.secondary,
        fontWeight: "500",
    },
});
