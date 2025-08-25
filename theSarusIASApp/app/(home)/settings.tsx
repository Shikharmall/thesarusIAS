import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function SettingsScreen() {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <View style={styles.option}>
                <Text style={styles.optionText}>Enable Notifications</Text>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={setNotificationsEnabled}
                />
            </View>

            <View style={styles.option}>
                <Text style={styles.optionText}>Dark Mode</Text>
                <Switch value={false} onValueChange={() => { }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    option: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    optionText: {
        fontSize: 18,
    },
});
