import { themeColor } from "@/utils/constant/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

const getIcon = (name: React.ComponentProps<typeof FontAwesome>["name"]) =>
    ({ color }: { color: string }) =>
        <FontAwesome size={28} name={name} color={color} />;

export default function TabLayout() {
    return (
        <Tabs
            initialRouteName="index"
            screenOptions={{
                tabBarActiveTintColor: themeColor.secondary,
                headerShown: false,
                animation: "shift",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: getIcon("home"),
                }}
            />
            <Tabs.Screen
                name="courses"
                options={{
                    title: "Courses",
                    tabBarIcon: getIcon("graduation-cap"),
                }}
            />
            <Tabs.Screen
                name="testseries"
                options={{
                    title: "Test Series",
                    tabBarIcon: getIcon("tasks"),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: getIcon("user"),
                }}
            />
        </Tabs>
    );
}
