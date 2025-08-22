import { AnimatedCircleProgressProps } from "@/types/exam";
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

            {showPercentage && (
                <View
                    style={{
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: "bold",
                                color: "#fff",
                                backgroundColor: color,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderRadius: 100,
                            }}
                        >
                            {label}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
