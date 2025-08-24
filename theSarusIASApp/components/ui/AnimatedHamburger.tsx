import { useRef, useEffect } from "react"
import { View, TouchableOpacity, Animated, StyleSheet, Easing } from "react-native"
import { Colors } from "../../constants/Colors"

interface AnimatedHamburgerProps {
    isOpen: boolean
    onPress: () => void
    size?: number
    color?: string
}

export default function AnimatedHamburger({
    isOpen,
    onPress,
    size = 24,
    color = Colors.text,
}: AnimatedHamburgerProps) {
    const line1Rotation = useRef(new Animated.Value(0)).current
    const line2Opacity = useRef(new Animated.Value(1)).current
    const line3Rotation = useRef(new Animated.Value(0)).current
    const line1TranslateY = useRef(new Animated.Value(0)).current
    const line3TranslateY = useRef(new Animated.Value(0)).current

    useEffect(() => {
        const duration = 300
        const easing = Easing.bezier(0.4, 0.0, 0.2, 1)

        if (isOpen) {
            Animated.parallel([
                Animated.timing(line1Rotation, { toValue: 1, duration, easing, useNativeDriver: true }),
                Animated.timing(line2Opacity, { toValue: 0, duration: duration / 2, useNativeDriver: true }),
                Animated.timing(line3Rotation, { toValue: 1, duration, easing, useNativeDriver: true }),
                Animated.timing(line1TranslateY, { toValue: 1, duration, easing, useNativeDriver: true }),
                Animated.timing(line3TranslateY, { toValue: 1, duration, easing, useNativeDriver: true }),
            ]).start()
        } else {
            Animated.parallel([
                Animated.timing(line1Rotation, { toValue: 0, duration, easing, useNativeDriver: true }),
                Animated.timing(line2Opacity, {
                    toValue: 1,
                    duration: duration / 2,
                    delay: duration / 2,
                    useNativeDriver: true,
                }),
                Animated.timing(line3Rotation, { toValue: 0, duration, easing, useNativeDriver: true }),
                Animated.timing(line1TranslateY, { toValue: 0, duration, easing, useNativeDriver: true }),
                Animated.timing(line3TranslateY, { toValue: 0, duration, easing, useNativeDriver: true }),
            ]).start()
        }
    }, [isOpen])

    const lineHeight = Math.max(2, size * 0.08)
    const lineWidth = size * 0.8
    const lineSpacing = size * 0.2

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { width: size, height: size }]}>
            <View style={styles.linesContainer}>
                <Animated.View
                    style={[
                        styles.line,
                        {
                            width: lineWidth,
                            height: lineHeight,
                            backgroundColor: color,
                            transform: [
                                {
                                    translateY: line1TranslateY.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, lineSpacing],
                                    }),
                                },
                                {
                                    rotate: line1Rotation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg", "45deg"],
                                    }),
                                },
                            ],
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.line,
                        {
                            width: lineWidth,
                            height: lineHeight,
                            backgroundColor: color,
                            marginTop: lineSpacing,
                            opacity: line2Opacity,
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.line,
                        {
                            width: lineWidth,
                            height: lineHeight,
                            backgroundColor: color,
                            marginTop: lineSpacing,
                            transform: [
                                {
                                    translateY: line3TranslateY.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, -lineSpacing],
                                    }),
                                },
                                {
                                    rotate: line3Rotation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg", "-45deg"],
                                    }),
                                },
                            ],
                        },
                    ]}
                />
            </View>
        </TouchableOpacity>
    )
}

// grid-outline

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    linesContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    line: {
        borderRadius: 2,
    },
})
