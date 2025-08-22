import { themeColor } from "@/constants/Colors";
import { AnimatedCircleProgressProps } from "@/types/exam";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { View, Animated, Text, TouchableOpacity } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function AnimatedCircleProgress({
    progress,
    size = 120,
    strokeWidth = 8,
    duration = 300,
    color = "#4f46e5",
    backgroundColor = "#e5e7eb",
    showPercentage = true,
    label,
}: AnimatedCircleProgressProps) {
    const animatedProgress = useRef(new Animated.Value(0)).current;

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        Animated.timing(animatedProgress, {
            toValue: progress,
            duration,
            useNativeDriver: false, // cannot use true for strokeDashoffset
        }).start();
    }, [progress]);

    const strokeDashoffset = animatedProgress.interpolate({
        inputRange: [0, 100],
        outputRange: [circumference, 0],
    });

    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Svg width={size} height={size}>
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={backgroundColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />

                <AnimatedCircle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={`${circumference}, ${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </Svg>

            <View
                style={{
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity>
                    {/* <MaterialIcons name="arrow-circle-right" size={60} color={themeColor?.secondary} /> */}
                    <Text>{label}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
