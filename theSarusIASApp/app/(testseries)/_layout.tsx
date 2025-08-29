import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right", // 👈 smooth iOS-like push
                // animation: "fade",          // cross-fade
                // animation: "slide_from_bottom", // modal-like
                gestureEnabled: true,          // swipe back gesture
            }}
        />
    );
}
