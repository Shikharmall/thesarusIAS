import { themeColor } from "@/utils/constant/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function NotificationsScreen() {
    const router = useRouter();
    const todayData = [
        {
            id: "1",
            type: "accepted",
            user: "jiya_g_1",
            text: "accepted your follow request.",
            time: "7h",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: "2",
            type: "invite",
            user: "ashnoorkaur",
            text: "rajanyaofficial and 4 others invited you to join their channels.",
            time: "8h",
            avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        },
    ];

    const yesterdayData = [
        {
            id: "3",
            type: "post",
            user: "priya.maggo.1",
            verified: true,
            text: "posted a thread that you might like: 💗💗💗",
            time: "1d",
            avatar: "https://randomuser.me/api/portraits/women/46.jpg",
        },
    ];

    const lastMonthData = [
        {
            id: "4",
            type: "reels",
            text: "160K people created reels using audio that you saved, Tera Ghata by Gajendra Verma.",
            time: "1w",
            thumbnail: "https://picsum.photos/200/300",
        },
        {
            id: "5",
            type: "threads",
            user: "satwick_vr",
            text: "and 9 others are on Threads, an Instagram app. See what they're saying.",
            time: "1w",
            avatar: "https://randomuser.me/api/portraits/men/40.jpg",
        },
        {
            id: "6",
            type: "repost",
            user: "rohit_singh9407",
            text: "reposted a reel for the first time.",
            time: "2w",
            avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        },
    ];

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.item}>
            {/* Avatar */}
            {item.avatar ? (
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
            ) : (
                <Ionicons name="notifications" size={40} color="#aaa" />
            )}

            {/* Text Section */}
            <View style={styles.textContainer}>
                {item.user ? (
                    <Text style={styles.username}>
                        {item.user}{" "}
                        {item.verified && (
                            <Ionicons name="checkmark-circle" size={14} color="#0ab7f3" />
                        )}
                        <Text style={styles.message}> {item.text}</Text>
                    </Text>
                ) : (
                    <Text style={styles.message}>{item.text}</Text>
                )}
                <Text style={styles.time}>{item.time}</Text>
            </View>

            {/* Right Button/Thumbnail */}
            {item.type === "accepted" && (
                <TouchableOpacity style={styles.followBtn}>
                    <Text style={styles.followBtnText}>Following</Text>
                </TouchableOpacity>
            )}
            {item.thumbnail && (
                <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            )}
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={themeColor.secondary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Sections */}
            <Text style={styles.sectionTitle}>Today</Text>
            <FlatList
                data={todayData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                scrollEnabled={false}
            />

            <Text style={styles.sectionTitle}>Yesterday</Text>
            <FlatList
                data={yesterdayData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                scrollEnabled={false}
            />

            <Text style={styles.sectionTitle}>Last 30 days</Text>
            <FlatList
                data={lastMonthData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                scrollEnabled={false}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingTop: 50
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        justifyContent: "space-between",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: themeColor.secondary,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "600",
        marginVertical: 8,
        color: "#333",
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    username: {
        fontWeight: "600",
        fontSize: 14,
        color: "#000",
    },
    message: {
        fontWeight: "400",
        fontSize: 14,
        color: "#333",
    },
    time: {
        fontSize: 12,
        color: "#777",
        marginTop: 2,
    },
    followBtn: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: "#eee",
        borderRadius: 8,
    },
    followBtnText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#000",
    },
    thumbnail: {
        width: 44,
        height: 44,
        borderRadius: 6,
        marginLeft: 8,
    },
});
