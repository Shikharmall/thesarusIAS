import { themeColor } from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { StatusBar } from 'react-native';

export default function TabLayout() {
    return (
        <>
            {/* <StatusBar backgroundColor="#fff" /> */}
            <Tabs screenOptions={{ tabBarActiveTintColor: themeColor?.secondary, headerShown: false }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="mycourse"
                    options={{
                        title: 'My Course',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="graduation-cap" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="test"
                    options={{
                        title: 'Test Series',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="tasks" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="mycart"
                    options={{
                        title: 'My Cart',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                    }}
                />
            </Tabs>
        </>
    );
}

