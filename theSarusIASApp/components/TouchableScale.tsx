import type React from "react"

import { useRef } from "react"
import { Animated, TouchableOpacity, type TouchableOpacityProps } from "react-native"

interface TouchableScaleProps extends TouchableOpacityProps {
  children: React.ReactNode
  scaleValue?: number
}

export default function TouchableScale({
  children,
  scaleValue = 0.95,
  onPressIn,
  onPressOut,
  ...props
}: TouchableScaleProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current

  const handlePressIn = (event: any) => {
    Animated.spring(scaleAnim, {
      toValue: scaleValue,
      useNativeDriver: true,
    }).start()
    onPressIn?.(event)
  }

  const handlePressOut = (event: any) => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
    onPressOut?.(event)
  }

  return (
    <TouchableOpacity {...props} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>{children}</Animated.View>
    </TouchableOpacity>
  )
}
