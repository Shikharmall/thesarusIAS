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
import TestSeriesComponent from "./TestSeriesComponent";
import { TestSeries } from "@/types/testseries";
const { width } = Dimensions.get("window");

const TabSwitcherTestSeries = () => {
  const tabs = ["Test Series", "My Test Series"];
  const [activeTab, setActiveTab] = useState("Test Series");

  const tabWidth = width / tabs.length - 20; // adjust for margin
  const translateX = useRef(new Animated.Value(0)).current;

  const testseries: TestSeries[] = [
    {
      id: "1",
      title: "UPSC Prelims Test Series 2026 (General Studies)",
      price: "₹60",
      oldPrice: "₹1000",
      discount: "94% OFF",
      tags: ["FULL LENGTH", "MCQs", "PDF SOLUTIONS"],
      image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png",
    },
    {
      id: "2",
      title: "UPPCS CSAT Practice Test Series (Aptitude & Reasoning)",
      price: "₹50",
      oldPrice: "₹1000",
      discount: "95% OFF",
      tags: ["FULL LENGTH", "MCQs", "PDF SOLUTIONS"],
      // tags: ["SECTIONAL TESTS", "SOLUTION PDFs"],
      image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png",
    },
    {
      id: "3",
      title: "UPPSC Prelims Test Series 2026 (Aptitude & Reasoning)",
      price: "₹50",
      oldPrice: "₹1000",
      discount: "95% OFF",
      tags: ["FULL LENGTH", "MCQs", "PDF SOLUTIONS"],
      // tags: ["SECTIONAL TESTS", "SOLUTION PDFs"],
      image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png",
    },
    {
      id: "4",
      title: "UPPSC CSAT Test Series 2026 (General Studies)",
      price: "₹50",
      oldPrice: "₹1000",
      discount: "95% OFF",
      tags: ["FULL LENGTH", "MCQs", "PDF SOLUTIONS"],
      // tags: ["SECTIONAL TESTS", "SOLUTION PDFs"],
      image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png",
    },
    {
      id: "5",
      title: "SSC CGL Test Series",
      price: "₹50",
      oldPrice: "₹5,00",
      discount: "90% OFF",
      tags: ["FULL LENGTH", "MCQs", "PDF SOLUTIONS"],
      image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/ssccgl_rknj1o.png",
    },
    {
      id: "6",
      title: "SSC CHSL Test Series",
      price: "₹50",
      tags: ["FULL LENGTH", "MCQs", "PDF SOLUTIONS"],
      image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscchsl_fwfdka.png",
    },
    {
      id: "7",
      title: "SSC MTS Test Series",
      price: "₹50",
      tags: ["FULL LENGTH", "MCQs", "PDF SOLUTIONS"],
      image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscmts_j31n5a.png",
    },
    {
      id: "8",
      title: "Railway NTPC Test Series",
      price: "₹50",
      tags: ["FULL LENGTH", "MCQs", "PDF SOLUTIONS"],
      image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756031617/railwayblue_tjaeud.jpg",
    }
  ];

  const mytestseries: TestSeries[] = [
    {
      id: "1",
      title: "UPSC Prelims Test Series 2026 (General Studies)",
      price: "₹60",
      oldPrice: "₹1000",
      discount: "94% OFF",
      tags: ["FULL LENGTH", "MCQs", "PDF SOLUTIONS"],
      image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png",
    },
    {
      id: "2",
      title: "SSC CGL Test Series",
      price: "₹50",
      oldPrice: "₹5,00",
      discount: "90% OFF",
      tags: ["FULL LENGTH", "MCQs", "PDF SOLUTIONS"],
      image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/ssccgl_rknj1o.png",
    },
    {
      id: "3",
      title: "Railway NTPC Test Series",
      price: "₹50",
      tags: ["FULL LENGTH", "MCQs", "PDF SOLUTIONS"],
      image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756031617/railwayblue_tjaeud.jpg",
    }
  ];

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
      {activeTab === "Test Series" ? <TestSeriesComponent testseries={testseries} /> : <TestSeriesComponent testseries={mytestseries} />}
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
