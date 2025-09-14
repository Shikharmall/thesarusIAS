import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

export default function MyCourse() {
    const courseData = [
        {
            id: 1,
            title: "CUET (UG) 2024",
            subtitle: "Common University Entrance Test",
            batch: "General Test | Language |",
            status: "Live",
            language: "English",
            color: "#4A90E2",
        },
        {
            id: 2,
            title: "CTET 2024",
            subtitle: "Paper - 1&2",
            batch: "",
            status: "Live",
            language: "हिंदी",
            color: "#27AE60",
        },
        {
            id: 3,
            title: "CUET (UG) 2024",
            subtitle: "Geography Sec-B",
            batch: "General Test | Language |",
            status: "Live",
            language: "हिंदी",
            color: "#E67E22",
        },
    ]

    const newCourses = [
        {
            id: 1,
            title: "GS Foundation",
            subtitle: "(Prelims+Mains)",
            batch: "Weekend Batch",
            status: "हिंदी",
            type: "हिंदी",
        },
        {
            id: 2,
            title: "GS Foundation",
            subtitle: "(Prelims+Mains)",
            batch: "Weekend Batch",
            status: "हिंदी",
            type: "हिंदी",
        },
        { id: 3, title: "IAS GS Foundation", subtitle: "Batch - 33", batch: "", status: "Live", type: "English" },
        { id: 4, title: "GS Foundation", subtitle: "Batch - 34", batch: "", status: "Live", type: "English" },
    ]

    return (
        <View style={{ marginTop: 10, flex: 1 }}>
            {/* <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" /> */}

            {/* Header */}
            {/* <View style={styles.homeHeader}>
                <TouchableOpacity>
                    <Ionicons name="menu" size={24} color="#666" />
                </TouchableOpacity>
                <View style={styles.headerCenter}>
                    <Text style={styles.headerCenterText}>IAS</Text>
                    <Ionicons name="chevron-down" size={16} color="#666" />
                </View>
                <View style={styles.notificationBadge}>
                    <Ionicons name="notifications" size={24} color="#666" />
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>2</Text>
                    </View>
                </View>
            </View> */}

            {/* Greeting */}
            {/* <View style={styles.greetingContainer}>
                <View style={styles.profileIcon}>
                    <Ionicons name="person" size={24} color="#4A90E2" />
                </View>
                <View>
                    <Text style={styles.greetingText}>Good Morning</Text>
                    <Text style={styles.studentText}>Student</Text>
                </View>
            </View> */}

            {/* Search Bar */}
            {/* <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#999" />
                <Text style={styles.searchPlaceholder}>Search Items here...</Text>
            </View> */}

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Featured Courses */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
                    {courseData?.map((course) => (
                        <View key={course.id} style={[styles.featuredCard, { backgroundColor: course.color }]}>
                            <Text style={styles.featuredTitle}>{course.title}</Text>
                            <Text style={styles.featuredSubtitle}>{course.subtitle}</Text>
                            <Text style={styles.featuredBatch}>{course.batch}</Text>
                            <View style={styles.featuredTags}>
                                <View style={styles.liveTag}>
                                    <Text style={styles.liveTagText}>🔴 {course.status}</Text>
                                </View>
                                <View style={styles.languageTag}>
                                    <Text style={styles.languageTagText}>{course.language}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                {/* New Courses Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>New Courses in IAS</Text>
                    <Text style={styles.viewAll}>View All</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {newCourses?.map((course) => (
                        <View key={course.id} style={styles.courseCard}>
                            <Text style={styles.courseCardTitle}>{course.title}</Text>
                            <Text style={styles.courseCardSubtitle}>{course.subtitle}</Text>
                            <Text style={styles.courseCardBatch}>{course.batch}</Text>
                            <View style={styles.courseCardTags}>
                                <View style={[styles.courseTag, course.status === "Live" ? styles.liveTag : styles.hindiTag]}>
                                    <Text style={styles.courseTagText}>{course.status}</Text>
                                </View>
                                <View style={styles.courseTag}>
                                    <Text style={styles.courseTagText}>{course.type}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                {/* Popular Courses Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Popular Courses in IAS</Text>
                    <Text style={styles.viewAll}>View All</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {newCourses?.map((course) => (
                        <View key={`popular-${course.id}`} style={styles.courseCard}>
                            <Text style={styles.courseCardTitle}>{course.title}</Text>
                            <Text style={styles.courseCardSubtitle}>{course.subtitle}</Text>
                            <Text style={styles.courseCardBatch}>{course.batch}</Text>
                            <View style={styles.courseCardTags}>
                                <View style={[styles.courseTag, course.status === "Live" ? styles.liveTag : styles.hindiTag]}>
                                    <Text style={styles.courseTagText}>{course.status}</Text>
                                </View>
                                <View style={styles.courseTag}>
                                    <Text style={styles.courseTagText}>{course.type}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                {/* Trending Courses Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Trending Courses in IAS</Text>
                    <Text style={styles.viewAll}>View All</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 100 }}>
                    {newCourses?.map((course) => (
                        <View key={`trending-${course.id}`} style={styles.courseCard}>
                            <Text style={styles.courseCardTitle}>{course.title}</Text>
                            <Text style={styles.courseCardSubtitle}>{course.subtitle}</Text>
                            <Text style={styles.courseCardBatch}>{course.batch}</Text>
                            <View style={styles.courseCardTags}>
                                <View style={[styles.courseTag, course.status === "Live" ? styles.liveTag : styles.hindiTag]}>
                                    <Text style={styles.courseTagText}>{course.status}</Text>
                                </View>
                                <View style={styles.courseTag}>
                                    <Text style={styles.courseTagText}>{course.type}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </ScrollView>

            {/* Bottom Navigation */}
            {/* <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="home" size={24} color="#4A90E2" />
                    <Text style={[styles.navText, { color: "#4A90E2" }]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="person-outline" size={24} color="#999" />
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItemCenter}>
                    <View style={styles.exploreButton}>
                        <Ionicons name="compass" size={24} color="white" />
                    </View>
                    <Text style={styles.navText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="book-outline" size={24} color="#999" />
                    <Text style={styles.navText}>My Courses</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="cart-outline" size={24} color="#999" />
                    <Text style={styles.navText}>My Cart</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#F8F9FA",
    },
    backButton: {
        marginRight: 12,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#8B5CF6",
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    //   courseCard: {
    //     backgroundColor: "#87CEEB",
    //     borderRadius: 12,
    //     padding: 16,
    //     marginBottom: 24,
    //   },
    courseHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 12,
    },
    courseInfo: {
        flex: 1,
    },
    courseTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2C3E50",
        marginBottom: 4,
    },
    courseBatch: {
        fontSize: 14,
        color: "#34495E",
    },
    liveIndicator: {
        backgroundColor: "white",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    liveText: {
        fontSize: 12,
        color: "#E74C3C",
        fontWeight: "600",
    },
    courseTags: {
        flexDirection: "row",
        marginBottom: 16,
    },
    liveTag: {
        backgroundColor: "#E74C3C",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginRight: 8,
    },
    liveTagText: {
        color: "white",
        fontSize: 12,
        fontWeight: "600",
    },
    englishTag: {
        backgroundColor: "#27AE60",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    englishTagText: {
        color: "white",
        fontSize: 12,
        fontWeight: "600",
    },
    courseDetails: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 8,
        padding: 12,
    },
    detailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    detailLabel: {
        fontSize: 14,
        color: "#2C3E50",
    },
    detailValue: {
        fontSize: 14,
        color: "#2C3E50",
        fontWeight: "600",
    },
    featuresGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 24,
    },
    bottomGrid: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 24,
    },
    featureCard: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        width: "30%",
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    featureText: {
        fontSize: 12,
        textAlign: "center",
        color: "#2C3E50",
        fontWeight: "500",
    },
    tabContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 20,
        padding: 4,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: "center",
    },
    activeTab: {
        backgroundColor: "#4A90E2",
        borderRadius: 6,
    },
    tabText: {
        fontSize: 14,
        color: "#666",
    },
    activeTabText: {
        color: "white",
        fontWeight: "600",
    },
    testDetailsContainer: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
    },
    testDetailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    testDetailItem: {
        flex: 1,
        alignItems: "center",
    },
    testDetailLabel: {
        fontSize: 12,
        color: "#666",
        marginTop: 4,
    },
    testDetailValue: {
        fontSize: 12,
        color: "#333",
        fontWeight: "600",
        marginTop: 2,
    },
    testStatsRow: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    testStat: {
        alignItems: "center",
    },
    testStatNumber: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginTop: 4,
    },
    testStatLabel: {
        fontSize: 12,
        color: "#666",
        marginTop: 2,
    },
    languageContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    languageButtonActive: {
        backgroundColor: "#4A90E2",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        marginRight: 12,
    },
    languageButton: {
        backgroundColor: "#E5E5E5",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    languageTextActive: {
        color: "white",
        fontWeight: "600",
    },
    languageText: {
        color: "#666",
    },
    instructionsContainer: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
    },
    instructionsTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 12,
    },
    instructionsText: {
        fontSize: 14,
        color: "#666",
        lineHeight: 20,
    },
    startButton: {
        backgroundColor: "#4A90E2",
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: "center",
        marginBottom: 20,
    },
    startButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    homeHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerCenter: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerCenterText: {
        fontSize: 18,
        fontWeight: "600",
        marginRight: 4,
    },
    notificationBadge: {
        position: "relative",
    },
    badge: {
        position: "absolute",
        top: -4,
        right: -4,
        backgroundColor: "#E74C3C",
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold",
    },
    greetingContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#F0F4FF",
        marginHorizontal: 16,
        borderRadius: 12,
        marginBottom: 16,
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    greetingText: {
        fontSize: 14,
        color: "#666",
    },
    studentText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        marginBottom: 20,
    },
    searchPlaceholder: {
        marginLeft: 8,
        color: "#999",
        fontSize: 14,
    },
    featuredScroll: {
        marginBottom: 24,
    },
    featuredCard: {
        width: 280,
        padding: 16,
        borderRadius: 12,
        marginRight: 16,
        marginLeft: 16,
    },
    featuredTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginBottom: 4,
    },
    featuredSubtitle: {
        fontSize: 14,
        color: "white",
        opacity: 0.9,
        marginBottom: 8,
    },
    featuredBatch: {
        fontSize: 12,
        color: "white",
        opacity: 0.8,
        marginBottom: 12,
    },
    featuredTags: {
        flexDirection: "row",
    },
    languageTag: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginLeft: 8,
    },
    languageTagText: {
        color: "white",
        fontSize: 12,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
    viewAll: {
        fontSize: 14,
        color: "#4A90E2",
    },
    courseCard: {
        backgroundColor: "white",
        width: 160,
        padding: 12,
        borderRadius: 12,
        marginRight: 12,
        marginLeft: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    courseCardTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
        marginBottom: 4,
    },
    courseCardSubtitle: {
        fontSize: 12,
        color: "#666",
        marginBottom: 8,
    },
    courseCardBatch: {
        fontSize: 11,
        color: "#999",
        marginBottom: 8,
    },
    courseCardTags: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    courseTag: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: 4,
        marginBottom: 4,
    },
    hindiTag: {
        backgroundColor: "#E8F5E8",
    },
    courseTagText: {
        fontSize: 10,
        fontWeight: "500",
    },
    bottomNav: {
        flexDirection: "row",
        backgroundColor: "white",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderTopColor: "#E5E5E5",
    },
    navItem: {
        flex: 1,
        alignItems: "center",
    },
    navItemCenter: {
        flex: 1,
        alignItems: "center",
    },
    exploreButton: {
        backgroundColor: "#4A90E2",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    navText: {
        fontSize: 10,
        color: "#999",
        marginTop: 4,
    },

})
