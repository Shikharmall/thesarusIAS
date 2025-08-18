import { Stack } from 'expo-router';

export default function TabLayout() {

  return (
    <Stack>
      <Stack.Screen name="(exam)/index" options={{ headerShown: false }} />
      <Stack.Screen name="(end)/index" options={{ headerShown: false }} />
    </Stack>
  );
}