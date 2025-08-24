import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const CourseDetailsScreen = () => {
    const featureItems = [
        { id: 1, title: "Features", icon: "document-text-outline", color: "#4A90E2" },
        { id: 2, title: "Demo Class", icon: "play-outline", color: "#50C878" },
        { id: 3, title: "FAQs", icon: "help-circle-outline", color: "#FFB347" },
        { id: 4, title: "Submit Feedback", icon: "star-outline", color: "#FF6B6B" },
        { id: 5, title: "Schedule & Syllabus", icon: "calendar-outline", color: "#4ECDC4" },
        { id: 6, title: "My Class", icon: "folder-outline", color: "#95A5A6" },
    ]

    const bottomItems = [
        { id: 1, title: "Test Series", icon: "library-outline", color: "#E67E22" },
        { id: 2, title: "Submit Answer", icon: "checkmark-circle-outline", color: "#9B59B6" },
        { id: 3, title: "Class Test", icon: "clipboard-outline", color: "#3498DB" },
    ]

    const FeatureCard = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.featureCard}>
            <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
                <Ionicons name={item.icon as any} size={24} color={item.color} />
            </View>
            <Text style={styles.featureText}>{item.title}</Text>
        </TouchableOpacity>
    )

    return (
        <>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#666" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Course Details</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Course Card */}
                <View style={styles.courseCard}>
                    <View style={styles.courseHeader}>
                        <View style={styles.courseInfo}>
                            <Text style={styles.courseTitle}>IAS GS Foundation</Text>
                            <Text style={styles.courseBatch}>Batch - 32B</Text>
                        </View>
                        <View style={styles.liveIndicator}>
                            <Text style={styles.liveText}>Live</Text>
                        </View>
                    </View>

                    <View style={styles.courseTags}>
                        <View style={styles.liveTag}>
                            <Text style={styles.liveTagText}>🔴 Live</Text>
                        </View>
                        <View style={styles.englishTag}>
                            <Text style={styles.englishTagText}>English</Text>
                        </View>
                    </View>

                    <View style={styles.courseDetails}>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Weekly</Text>
                            <Text style={styles.detailValue}>36 Months</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Category</Text>
                            <Text style={styles.detailValue}>Offline</Text>
                        </View>
                    </View>
                </View>

                {/* Features Grid */}
                <View style={styles.featuresGrid}>
                    {featureItems.map((item) => (
                        <FeatureCard key={item.id} item={item} />
                    ))}
                </View>

                {/* Bottom Items */}
                <View style={styles.bottomGrid}>
                    {bottomItems.map((item) => (
                        <FeatureCard key={item.id} item={item} />
                    ))}
                </View>
            </ScrollView>
        </>
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
        paddingTop: 50
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
    courseCard: {
        backgroundColor: "#87CEEB",
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
    },
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
})

export default function App() {
    return <CourseDetailsScreen />
}
