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
import Courses from "./Courses";
import { Course } from "@/types/courses";

const { width } = Dimensions.get("window");

const TabSwitcherCourses = () => {
  const tabs = ["Courses", "My Courses"];
  const [activeTab, setActiveTab] = useState("Courses");

  const courses: Course[] = [
    {
      id: "1",
      title: "NCERT Geography (6th to 12th)",
      price: "₹1,400",
      oldPrice: "₹3,000",
      discount: "53% OFF",
      tags: ["FREE CONTENT", "TESTS", "VIDEOS"],
      image:
        "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    },
    {
      id: "2",
      title: "COMBINED NCERT (HISTORY + POLITY + GEOGRAPHY + ECONOMICS)",
      price: "₹10,000",
      tags: ["FREE CONTENT", "TESTS", "VIDEOS"],
      image:
        "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    },
    {
      id: "3",
      title: "MENTORSHIP PROGRAMME - UPSC CSE PRELIMS 2021",
      price: "₹550",
      oldPrice: "₹1,200",
      discount: "54% OFF",
      tags: ["FREE CONTENT", "VIDEOS", "FILES"],
      image:
        "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    },
    {
      id: "4",
      title: "COURSE FOR INTERNATIONAL RELATIONS",
      price: "₹2,500",
      tags: ["FREE CONTENT", "VIDEOS", "FILES"],
      image:
        "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    },
  ];

  const mycourses: Course[] = [
    {
      id: "1",
      title: "NCERT Geography (6th to 12th)",
      price: "₹1,400",
      oldPrice: "₹3,000",
      discount: "53% OFF",
      tags: ["FREE CONTENT", "TESTS", "VIDEOS"],
      image:
        "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    },
    {
      id: "2",
      title: "COMBINED NCERT (HISTORY + POLITY + GEOGRAPHY + ECONOMICS)",
      price: "₹10,000",
      tags: ["FREE CONTENT", "TESTS", "VIDEOS"],
      image:
        "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    },
    // {
    //   id: "3",
    //   title: "MENTORSHIP PROGRAMME - UPSC CSE PRELIMS 2021",
    //   price: "₹550",
    //   oldPrice: "₹1,200",
    //   discount: "54% OFF",
    //   tags: ["FREE CONTENT", "VIDEOS", "FILES"],
    //   image:
    //     "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    // },
    // {
    //   id: "4",
    //   title: "COURSE FOR INTERNATIONAL RELATIONS",
    //   price: "₹2,500",
    //   tags: ["FREE CONTENT", "VIDEOS", "FILES"],
    //   image:
    //     "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    // },
  ];

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
      {activeTab === "Courses" ? <Courses courses={courses} /> : <Courses courses={mycourses} />}
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
