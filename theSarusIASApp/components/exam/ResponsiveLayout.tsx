
import { Colors } from "@/utils/constant/Colors"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Animated, Dimensions, Easing, StyleSheet, View } from "react-native"

interface ResponsiveLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
  showSidebar: boolean
}

export default function ResponsiveLayout({ children, sidebar, showSidebar }: ResponsiveLayoutProps) {
  const [screenData, setScreenData] = useState(Dimensions.get("window"))
  const slideAnim = useRef(new Animated.Value(0)).current // 0 = hidden, 1 = visible

  useEffect(() => {
    const onChange = (result: { window: any }) => {
      setScreenData(result.window)
    }
    const subscription = Dimensions.addEventListener("change", onChange)
    return () => subscription?.remove()
  }, [])

  const isTablet = screenData.width >= 768
  const isLandscape = screenData.width > screenData.height

  // Animate whenever showSidebar changes
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: showSidebar ? 1 : 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start()
  }, [showSidebar])

  // For mobile/portrait -> slide from left
  const translateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenData.width, 0], // offscreen to left → visible
  })

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      {(isTablet || showSidebar) && (
        <Animated.View
          style={[
            styles.sidebar,
            isTablet ? styles.sidebarTablet : styles.sidebarMobile,
            !isTablet && !isLandscape && styles.sidebarFullWidth,
            !isTablet && {
              transform: [{ translateX }], // slide in/out only on mobile
            },
          ]}
        >
          {sidebar}
        </Animated.View>
      )}

      {/* Main Content */}
      <View
        style={[
          styles.mainContent,
          showSidebar && isTablet && styles.mainContentWithSidebar,
          showSidebar && !isTablet && !isLandscape && styles.mainContentHidden,
        ]}
      >
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.background,
  },
  sidebar: {
    backgroundColor: Colors.surface,
    borderRightWidth: 1,
    borderRightColor: Colors.border,
  },
  sidebarTablet: {
    width: 300,
  },
  sidebarMobile: {
    width: "75%",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 1000,
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  sidebarFullWidth: {
    width: "100%",
  },
  mainContent: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  mainContentWithSidebar: {
    flex: 1,
  },
  mainContentHidden: {
    display: "none",
  },
})

