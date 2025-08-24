import { themeColor } from "@/constants/Colors";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TestSeries from "./TestSeries";

const { width } = Dimensions.get("window");

const TabSwitcherTestSeries = () => {
  const tabs = ["Test Series", "My Test Series"];
  const [activeTab, setActiveTab] = useState("Test Series");

  const tabWidth = width / tabs.length - 20; // adjust for margin
  const translateX = useRef(new Animated.Value(0)).current;

  // animate indicator on tab change
  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    Animated.spring(translateX, {
      toValue: index * tabWidth,
      useNativeDriver: true,
    }).start();
  }, [activeTab]);

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

        {tabs.map((tab) => (
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

      {/* Content */}
      {activeTab === "Test Series" ? <TestSeries /> : <TestSeries />}
    </View>
  );
};

export default TabSwitcherTestSeries;

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
