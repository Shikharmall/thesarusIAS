
import { Colors, themeColor } from "@/utils/constant/Colors";
import { FeatureItems } from "@/utils/types/testseries";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TestSeriesDetailsScreen() {
    const router = useRouter();

    const featureItems: FeatureItems[] = [
        {
            id: 1,
            title: "10 Tests",
            icon: "library-outline",
            color: "#4A90E2",
            url: "/(course)/video"
        },
        {
            id: 2,
            title: "Demo Test",
            icon: "play-outline",
            color: "#50C878",
            url: "/(course)/video"
        },
        {
            id: 3,
            title: "Solutions",
            icon: "document-text-outline",
            color: "#E67E22",
            url: "/(course)/video"
        },
        {
            id: 4,
            title: "Submit Feedback",
            icon: "star-outline",
            color: "#FF6B6B",
            url: "/(course)/video"
        },
        {
            id: 5,
            title: "Schedule & Syllabus",
            icon: "calendar-outline",
            color: "#4ECDC4",
            url: "/(course)/video"
        },
        {
            id: 6,
            title: "My Class",
            icon: "folder-outline",
            color: "#95A5A6",
            url: "/(course)/video"
        },
        {
            id: 7,
            title: "FAQs",
            icon: "help-circle-outline",
            color: "#FFB347",
            url: "/(course)/video"
        },
        {
            id: 8,
            title: "Submit Answer",
            icon: "checkmark-circle-outline",
            color: "#9B59B6",
            url: "/(course)/video"
        },
        {
            id: 9,
            title: "Class Test",
            icon: "clipboard-outline",
            color: "#3498DB",
            url: "/(course)/video"
        },
    ]

    const FeatureCard = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.featureCard} onPress={() => router.push(item.url)} >
            <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
                <Ionicons name={item.icon as any} size={24} color={item.color} />
            </View>
            <Text style={styles.featureText}>{item?.title}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={themeColor.secondary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Test Series Details</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Course Card */}
                <View style={styles.courseCard}>
                    <View style={styles.courseHeader}>
                        <View style={styles.courseInfo}>
                            <Text style={styles.courseTitle}>UPSC Prelims (General Studies I) 2026</Text>
                            <Text style={styles.courseBatch}>Batch - 32B</Text>
                        </View>
                        {/* <View style={styles.liveIndicator}>
                            <Text style={styles.liveText}>Live</Text>
                        </View> */}
                    </View>

                    <View style={styles.courseTags}>
                        <View style={styles.liveTag}>
                            <Text style={styles.liveTagText}>PDF Solution</Text>
                        </View>
                        <View style={styles.englishTag}>
                            <Text style={styles.englishTagText}>English</Text>
                        </View>
                    </View>

                    <View style={styles.courseDetails}>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Weekly</Text>
                            <Text style={styles.detailValue}>4 Months</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Category</Text>
                            <Text style={styles.detailValue}>Online</Text>
                        </View>
                    </View>
                </View>

                {/* Features Grid */}
                <View style={styles.featuresGrid}>
                    {featureItems?.map((item) => (
                        <FeatureCard key={item.id} item={item} />
                    ))}
                </View>

                {/* Bottom Button */}
                <TouchableOpacity style={styles.submitButton}>
                    <Ionicons name="cash" size={20} color={Colors.background} />
                    <Text style={styles.submitButtonText}>Purchase ₹60</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        paddingHorizontal: 12,
        paddingTop: 50
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        justifyContent: "space-between",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: themeColor.secondary,
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
        fontSize: 16,
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
    submitButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.success,
        paddingVertical: 12,
        borderRadius: 8,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.background,
        marginLeft: 8,
    },
});