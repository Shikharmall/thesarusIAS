import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors, themeColor } from "../constants/Colors"; // adjust paths if needed
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

// Mock notifications
const notifications = [
    {
        id: "1",
        title: "New Message",
        description: "You have a new message from Aarushi",
        time: "2m ago",
        image: "https://i.pravatar.cc/100?img=1",
    },
    {
        id: "2",
        title: "Update Available",
        description: "Version 2.0 is now live. Update the app!",
        time: "10m ago",
        image: "https://i.pravatar.cc/100?img=2",
    },
    {
        id: "3",
        title: "Friend Request",
        description: "Rohan sent you a friend request",
        time: "1h ago",
        image: "https://i.pravatar.cc/100?img=3",
    },
];

export default function NotificationScreen() {
    const router = useRouter();
    const renderItem = ({ item }: { item: typeof notifications[0] }) => (
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color={themeColor?.secondary || "black"} />
                </TouchableOpacity>
                <Text style={styles.header}>Notifications</Text>
            </View>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 16,
        paddingTop: 50,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    backButton: {
        marginRight: 12,
        padding: 6,
    },
    header: {
        fontSize: 22,
        fontWeight: "700",
        color: themeColor?.secondary,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.surface,
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: themeColor?.secondary,
    },
    description: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginTop: 2,
    },
    time: {
        fontSize: 12,
        color: Colors.textSecondary,
        marginTop: 4,
    },
});
