import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";

interface TestSeries {
    id: string;
    title: string;
    price: string;
    oldPrice?: string;
    discount?: string;
    tags: string[];
    image: string;
}

const testSeries: TestSeries[] = [
    {
        id: "1",
        title: "UPSC Prelims Test Series 2026 (General Studies)",
        price: "₹60",
        oldPrice: "₹500",
        discount: "50% OFF",
        tags: ["FULL LENGTH", "PDF SOLUTIONS"],
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png",
    },
    {
        id: "2",
        title: "CSAT Practice Test Series (Aptitude & Reasoning)",
        price: "₹40",
        tags: ["SECTIONAL TESTS", "SOLUTION PDFs"],
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png",
    },
    {
        id: "3",
        title: "SSC CGL Test Series",
        price: "₹50",
        oldPrice: "₹5,00",
        discount: "90% OFF",
        tags: ["ESSAY", "ANSWER REVIEW", "EVALUATION"],
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/ssccgl_rknj1o.png",
    },
    {
        id: "4",
        title: "SSC CHSL Test Series",
        price: "₹50",
        tags: ["MCQs", "EXPLANATIONS", "PDF NOTES"],
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscchsl_fwfdka.png",
    },
    {
        id: "5",
        title: "SSC MTS Test Series",
        price: "₹50",
        tags: ["MCQs", "EXPLANATIONS", "PDF NOTES"],
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscmts_j31n5a.png",
    },
    {
        id: "6",
        title: "Railway NTPC Test Series",
        price: "₹50",
        tags: ["MCQs", "EXPLANATIONS", "PDF NOTES"],
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756031617/railwayblue_tjaeud.jpg",
    }
];

export default function TestSeries() {

    const router = useRouter();

    const renderSeries = ({ item }: { item: TestSeries }) => (
        <TouchableOpacity style={styles.card}
            onPress={() => {
                router.push({
                    pathname: "/(exam)/instructions",
                });
            }}
        >
            <View style={styles.row}>
                <Image source={{ uri: item.image }} style={styles.image} />

                <View style={styles.content}>
                    {/* Tags */}
                    <View style={styles.tagsRow}>
                        {item.tags.map((tag, idx) => (
                            <Text key={idx} style={styles.tag}>
                                {tag}
                            </Text>
                        ))}
                    </View>

                    {/* Title */}
                    <Text style={styles.title} numberOfLines={2}>
                        {item.title}
                    </Text>

                    {/* Price Section */}
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{item.price}</Text>
                        {item.oldPrice && (
                            <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                        )}
                        {item.discount && (
                            <Text style={styles.discount}>{item.discount}</Text>
                        )}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Test Series List */}
            <FlatList
                data={testSeries}
                keyExtractor={(item) => item.id}
                renderItem={renderSeries}
                contentContainerStyle={{ padding: 10 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    // Card
    card: {
        backgroundColor: "#fff",
        marginBottom: 12,
        borderRadius: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    row: { flexDirection: "row", padding: 10 },
    image: {
        width: 90,
        height: 70,
        borderRadius: 6,
        marginRight: 10,
    },
    content: { flex: 1, justifyContent: "center" },
    tagsRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 4 },
    tag: {
        backgroundColor: "#f1f1f1",
        fontSize: 10,
        color: "#555",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: 4,
    },
    title: { fontSize: 14, fontWeight: "bold", marginBottom: 6 },
    priceRow: { flexDirection: "row", alignItems: "center" },
    price: { fontSize: 14, fontWeight: "bold", color: "#000" },
    oldPrice: {
        fontSize: 12,
        textDecorationLine: "line-through",
        marginLeft: 6,
        color: "gray",
    },
    discount: {
        fontSize: 12,
        marginLeft: 6,
        color: "red",
        fontWeight: "bold",
    },

    // Bottom Navigation
    bottomNav: {
        height: 60,
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        backgroundColor: "#fff",
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    navItemActive: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    navText: {
        fontSize: 12,
        color: "#666",
        marginTop: 2,
    },
    navTextActive: {
        fontSize: 12,
        color: "#2196F3",
        marginTop: 2,
        fontWeight: "bold",
    },
});
