import { HeaderProps } from "@/types/exam";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, themeColor } from "../../constants/Colors";
import AnimatedHamburger from "../ui/AnimatedHamburger";

export default function HomeHeader({ onToggleNavigator, showNavigator }: HeaderProps) {
    const router = useRouter();
    // Example badge count (you can pass this as prop or from state)
    const notificationCount = 3;

    return (
        <View style={styles.header}>
            <View>
                <AnimatedHamburger
                    isOpen={showNavigator}
                    onPress={onToggleNavigator}
                    size={28}
                    color={themeColor?.secondary}
                />
            </View>

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
