import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => props.navigation.closeDrawer()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <View style={styles.profileSection}>
                    <Image
                        source={{ uri: "https://avatar.iran.liara.run/public/47" }}
                        style={styles.avatar}
                    />
                    <Text style={styles.phone}>9555883356</Text>
                </View>
            </View>

            {/* Drawer Items */}
            <View style={styles.menu}>
                <DrawerItem
                    label={() => (
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={styles.listTitle}>Home</Text>
                                <Text style={styles.listDesc}>Customer Support, Your Queries</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#777" />
                        </View>
                    )}
                    onPress={() => props.navigation.navigate("(tabs)")}
                    icon={({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    )}
                />
                <DrawerItem
                    label={() => (
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={styles.listTitle}>Free Content</Text>
                                <Text style={styles.listDesc}>Free access, Free downloads</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#777" />
                        </View>
                    )}
                    onPress={() => props.navigation.navigate("freecontent")}
                    icon={({ color, size }) => (
                        <Ionicons name="folder-open" color={color} size={size} />
                    )}
                />
                <DrawerItem
                    label={() => (
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={styles.listTitle}>Settings</Text>
                                <Text style={styles.listDesc}>Customer Support, Your Queries</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#777" />
                        </View>
                    )}
                    onPress={() => props.navigation.navigate("settings")}
                    icon={({ color, size }) => (
                        <Ionicons name="settings-outline" color={color} size={size} />
                    )}
                />
                <DrawerItem
                    label={() => (
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={styles.listTitle}>Help & Support</Text>
                                <Text style={styles.listDesc}>Customer Support, Your Queries</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#777" />
                        </View>
                    )}
                    onPress={() => props.navigation.navigate("faq")}
                    icon={({ color, size }) => (
                        <Ionicons name="headset-outline" color={color} size={size} />
                    )}
                />
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.logoutBtn}
                    onPress={() => console.log("Logout pressed")}
                >
                    <Ionicons name="log-out-outline" size={20} color="#fff" />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />
                <Drawer.Screen name="settings" options={{ title: "Settings" }} />
            </Drawer>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        paddingHorizontal: 15,
        paddingBottom: 30,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    backBtn: {},
    profileSection: {
        alignItems: "center",
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    phone: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "600",
    },
    menu: {
        flex: 1,
        paddingTop: 10,
    },
    label: {
        fontSize: 15,
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    },
    logoutBtn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e63946",
        padding: 10,
        borderRadius: 8,
    },
    logoutText: {
        marginLeft: 8,
        color: "#fff",
        fontWeight: "600",
    },
    list: {
        marginTop: 15,
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    listLeft: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    listTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#222",
    },
    listDesc: {
        fontSize: 13,
        color: "#777",
        marginTop: 2,
    },
});
