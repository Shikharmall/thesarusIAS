import { TestSeries, TestSeriesProps } from "@/types/testseries";
import { useRouter } from "expo-router";
import React from "react";

import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function TestSeriesComponent({ testseries }: TestSeriesProps) {

    const router = useRouter();

    const renderSeries = ({ item }: { item: TestSeries }) => (
        <TouchableOpacity style={styles.card}
            onPress={() => {
                router.push({
                    pathname: "/(exam)/instructions",
                    params: { title: item?.title, },
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
            {
                testseries?.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/7486/7486744.png" }} // replace with your own illustration
                            style={styles.emptyImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.emptyTitle}>No Test Series Found</Text>
                        <Text style={styles.emptySubtitle}>
                            We couldnt find any test series right now. Please check back later!
                        </Text>
                    </View>
                )
                    :
                    (
                        <FlatList
                            data={testseries}
                            keyExtractor={(item) => item.id}
                            renderItem={renderSeries}
                            contentContainerStyle={{ padding: 10 }}
                        />

                    )
            }
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

    // items not found
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    emptyImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
        opacity: 0.9,
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 6,
    },
    emptySubtitle: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        lineHeight: 20,
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
