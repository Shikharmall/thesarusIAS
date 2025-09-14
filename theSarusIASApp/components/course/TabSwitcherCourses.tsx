import { courses, mycourses } from "@/data/coursesData";
import { themeColor } from "@/utils/constant/Colors";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CoursesComponent from "./CoursesComponent";
import MyCoursesComponent from "./MyCoursesComponent";

const { width } = Dimensions.get("window");

const TabSwitcherCourses = () => {
  const tabs: string[] = ["Courses", "My Courses"];
  const [activeTab, setActiveTab] = useState<string>("Courses");
  const [prevTab, setPrevTab] = useState(activeTab);

  const tabWidth = width / tabs.length - 20;
  const translateX = useRef(new Animated.Value(0)).current;

  const prevAnim = useRef(new Animated.Value(0)).current;
  const newAnim = useRef(new Animated.Value(width)).current;

  // animate indicator on tab change
  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    Animated.spring(translateX, {
      toValue: index * tabWidth,
      useNativeDriver: true,
    }).start();
  }, [activeTab]);

  // Animate content slide in/out
  useEffect(() => {
    const direction = tabs.indexOf(activeTab) > tabs.indexOf(prevTab) ? 1 : -1;

    // Prepare positions
    prevAnim.setValue(0);
    newAnim.setValue(direction * width);

    Animated.parallel([
      Animated.timing(prevAnim, {
        toValue: -direction * width,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(newAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setPrevTab(activeTab); // update previous tab after animation
    });
  }, [activeTab]);


  const renderTabContent = (tab: string) => {
    return tab === "Courses" ? (
      <CoursesComponent courses={courses} />
    ) : (
      <MyCoursesComponent courses={mycourses} />
    );
  };

  return (
    <View style={styles.container}>
      {/* Tab Container */}
      <View style={styles.tabContainer}>
        {/* Animated Indicator */}
        <Animated.View
          style={[
            styles.indicator,
            {
              width: tabWidth,
              transform: [{ translateX }],
            },
          ]}
        />

        {tabs?.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Animated Content */}
      <View style={{ flex: 1, overflow: "hidden" }}>
        <Animated.View
          style={{
            flex: 1,                          // take full height
            transform: [{ translateX: prevAnim }],
          }}
          pointerEvents="none"                // disable touches on old tab
        >
          <View style={{ flex: 1 }}>
            {renderTabContent(prevTab)}
          </View>
        </Animated.View>

        <Animated.View
          style={{
            flex: 1,                          // take full height
            transform: [{ translateX: newAnim }],
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          pointerEvents="auto"                // allow touches on active tab
        >
          <View style={{ flex: 1 }}>
            {renderTabContent(activeTab)}
          </View>
        </Animated.View>
      </View>

    </View>
  );
};

export default TabSwitcherCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    margin: 10,
    padding: 4,
    overflow: "hidden",
    position: "relative",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    zIndex: 1, // keep text above indicator
  },
  indicator: {
    position: "absolute",
    height: "100%",
    backgroundColor: themeColor?.secondary,
    borderRadius: 6,
    left: 4,
    top: 4,
  },
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  activeTabText: {
    color: "white",
    fontWeight: "600",
  },
});
