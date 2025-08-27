import React, { useState } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AppIntroSlider from "react-native-app-intro-slider";
import { useFonts } from "expo-font";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import { Colors, themeColor } from "@/constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SIZES } from "@/constants/Size";
import AnimatedCircleProgress from "@/components/ui/AnimatedCircle";
import { Slide } from "@/types/AppIntroSlider";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [showSlider, setShowSlider] = useState(false); //
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const renderNextButton = () => (
    <AnimatedCircleProgress
      progress={(currentIndex + 1) * 25} // 4 slides → 25% each
      size={60}
      strokeWidth={4}
      color={themeColor.secondary}
      label="Next"
      showPercentage={false}
    />
  );

  const renderDoneButton = () => (
    <AnimatedCircleProgress
      progress={100}
      size={60}
      strokeWidth={4}
      color={themeColor.secondary}
      label="Start"
      showPercentage={false}
    />
  );

  const slides: Slide[] = [
    {
      id: 1,
      title: "Get things done.",
      description: "Just a click away from planning your tasks.",
      image: require("../assets/images/demo.png"),
    },
    {
      id: 2,
      title: "Shows alert.",
      description: "Reminds you when date is near.",
      image: require("../assets/images/demo.png"),
    },
    {
      id: 3,
      title: "Start with the app.",
      description: "Lets Start",
      image: require("../assets/images/demo.png"),
    },
    {
      id: 4,
      title: "Start with the app fast.",
      description: "Lets Startsss",
      image: require("../assets/images/demo.png"),
    },
  ];

  if (!fontsLoaded) return null;

  if (showSlider) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", marginBottom: 50 }}>
        <StatusBar style="auto" />
        <AppIntroSlider
          data={slides}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width,
                  height: 600,
                  marginTop: 30,
                }}
                resizeMode="contain"
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
          activeDotStyle={{ opacity: 0 }}
          dotStyle={{ opacity: 0 }}
          renderNextButton={renderNextButton}
          renderDoneButton={renderDoneButton}
          bottomButton={false}
          onSlideChange={(index) => setCurrentIndex(index)}
          onDone={() => setShowSlider(false)}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Stack
          initialRouteName="LoginWithOTP"
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right", // 👈 smooth iOS-like push
            // animation: "fade",          // cross-fade
            // animation: "slide_from_bottom", // modal-like
            gestureEnabled: true,          // swipe back gesture
          }}>
          <Stack.Screen name="LoginWithOTP" options={{ headerShown: false }} />
          {/* <Stack.Screen name="Loading" options={{ headerShown: false }} /> */}
          <Stack.Screen name="OtpVerify" options={{ headerShown: false }} />
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
          <Stack.Screen name="Notification" options={{ headerShown: false }} />
          <Stack.Screen name="(exam)" options={{ headerShown: false }} />
          <Stack.Screen name="(course)" options={{ headerShown: false }} />
          <Stack.Screen name="(launchsoon)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontWeight: "bold",
    color: Colors.text,
    fontSize: 20,
    marginTop: 20,
  },
  description: {
    textAlign: "center",
    paddingTop: 5,
    color: Colors.text,
  },
});
