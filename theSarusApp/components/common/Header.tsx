import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, themeColor } from "../../utils/constant/Colors";

export default function Header() {
    const router = useRouter();
    const navigation = useNavigation();

    // Example badge count (you can pass this as prop or from state)
    const notificationCount = 3;

    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => {
                    navigation.dispatch(DrawerActions.toggleDrawer());
                }}
            >
                <Ionicons name="menu" size={28} color={themeColor?.secondary} />
            </TouchableOpacity>

            <View>
                <Text style={styles.title}>The SARUS</Text>
            </View>

            {/* Notification Icon with Badge */}
            <Pressable style={styles.iconWrapper} onPress={() => {
                router.push({
                    pathname: "/Notification"
                });
            }}>
                <MaterialIcons name="notifications" size={28} color={themeColor?.secondary} />
                {notificationCount > 0 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{notificationCount}</Text>
                    </View>
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        paddingTop: 50,
        backgroundColor: Colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: themeColor?.secondary,
    },
    iconWrapper: {
        position: "relative",
    },
    badge: {
        position: "absolute",
        right: -4,
        top: -4,
        backgroundColor: themeColor?.primary,
        borderRadius: 10,
        paddingHorizontal: 5,
        minWidth: 18,
        height: 18,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold",
    },
});
