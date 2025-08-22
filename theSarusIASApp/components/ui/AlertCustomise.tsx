import { themeColor } from "@/constants/Colors";
import { AlertProps } from "@/types/Alert";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

export default function AlertCustomise({
    visible,
    title = "Alert",
    message = "Something happened!",
    confirmLabel = "OK",
    cancelLabel,
    onConfirm,
    onCancel,
}: AlertProps) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onCancel}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {/* Floating Icon */}
                    <View style={styles.iconWrapper}>
                        <MaterialIcons name="warning" size={40} color="#fff" />
                    </View>

                    {title ? <Text style={styles.title}>{title}</Text> : null}
                    {message ? <Text style={styles.message}>{message}</Text> : null}

                    <View style={styles.actions}>
                        {cancelLabel ? (
                            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                                <Text style={styles.cancelText}>{cancelLabel}</Text>
                            </TouchableOpacity>
                        ) : null}

                        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
                            <Text style={styles.confirmText}>{confirmLabel}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        paddingTop: 40, // extra space so text doesn't overlap icon
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
    iconWrapper: {
        position: "absolute",
        top: -30, // move half outside
        backgroundColor: "red",
        borderRadius: 50,
        padding: 10,
        //elevation: 5, // shadow for Android
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#222",
    },
    message: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
        marginBottom: 20,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    cancelButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginRight: 10,
        borderRadius: 8,
        backgroundColor: "#e0e0e0",
    },
    cancelText: {
        fontSize: 16,
        color: "#333",
    },
    confirmButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: themeColor?.secondary,
    },
    confirmText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
});

