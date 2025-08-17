"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import { Colors } from "../constants/Colors"

interface ResponsiveLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
  showSidebar: boolean
}

export default function ResponsiveLayout({ children, sidebar, showSidebar }: ResponsiveLayoutProps) {
  const [screenData, setScreenData] = useState(Dimensions.get("window"))

  useEffect(() => {
    const onChange = (result: { window: any }) => {
      setScreenData(result.window)
    }

    const subscription = Dimensions.addEventListener("change", onChange)
    return () => subscription?.remove()
  }, [])

  const isTablet = screenData.width >= 768
  const isLandscape = screenData.width > screenData.height

  return (
    <View style={styles.container}>
      {showSidebar && (
        <View
          style={[
            styles.sidebar,
            isTablet ? styles.sidebarTablet : styles.sidebarMobile,
            !isTablet && !isLandscape && styles.sidebarFullWidth,
          ]}
        >
          {sidebar}
        </View>
      )}

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
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
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
