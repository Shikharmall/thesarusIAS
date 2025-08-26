import { themeColor } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    LayoutAnimation,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const faqs = [
    {
        question: "How do I manage all the notifications on the App?",
        answer:
            "In the Profile section, go to Notification Settings. Here, you can turn all notifications on or off collectively. You can also customize notifications for specific categories, such as Orders, Purchases, Promotions, and Offers, based on your preferences.",
    },
    {
        question: "How can I add/modify the payment method?",
        answer: "Go to Profile > Payments and select Add/Modify payment method.",
    },
    {
        question: "Which modes of payment are available on the District app?",
        answer: "Credit/Debit Cards, UPI, Netbanking, Wallets, etc. are supported.",
    },
    {
        question: "Can I change my birthday/Anniversary on the App?",
        answer: "Yes, go to Profile > Personal Information and update your details.",
    },
    {
        question: "Why do I have to input a state for the Invoice?",
        answer: "Entering the state is mandatory for tax calculation in invoices.",
    },
];

const categories = [
    { key: "all", label: "ALL", icon: "sparkles-outline" },
    { key: "movies", label: "MOVIES", icon: "film-outline" },
    { key: "events", label: "EVENTS", icon: "musical-notes-outline" },
    { key: "dining", label: "DINING", icon: "restaurant-outline" },
];

export default function HelpScreen() {
    const [expanded, setExpanded] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState("all");
    const router = useRouter();

    const toggleExpand = (q: string) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(expanded === q ? null : q);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={themeColor.secondary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Help & Support</Text>
                <View style={{ width: 24 }} />
            </View>
            <Text style={styles.header}>How can we help you?</Text>

            {/* Search */}
            <View style={styles.searchBox}>
                <Ionicons name="search-outline" size={20} color="#999" />
                <TextInput
                    placeholder="Search for FAQs"
                    placeholderTextColor="#999"
                    style={styles.searchInput}
                />
            </View>

            {/* Categories */}
            {/* <View style={styles.categoryRow}>
                {categories.map((cat) => (
                    <TouchableOpacity
                        key={cat.key}
                        style={[
                            styles.categoryBtn,
                            activeCategory === cat.key && styles.categoryActive,
                        ]}
                        onPress={() => setActiveCategory(cat.key)}
                    >
                        <Ionicons
                            name={cat.icon as any}
                            size={20}
                            color={activeCategory === cat.key ? themeColor.primary : "#777"}
                        />
                        <Text
                            style={[
                                styles.categoryText,
                                activeCategory === cat.key && styles.categoryTextActive,
                            ]}
                        >
                            {cat.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View> */}

            {/* FAQs */}
            <ScrollView style={{ flex: 1 }}>
                <Text style={styles.sectionTitle}>All Questions</Text>
                {faqs.map((item, index) => (
                    <View key={index} style={styles.accordion}>
                        <TouchableOpacity
                            style={styles.questionRow}
                            onPress={() => toggleExpand(item.question)}
                        >
                            <Text style={styles.question}>{item.question}</Text>
                            <Ionicons
                                name={expanded === item.question ? "chevron-up" : "chevron-down"}
                                size={20}
                                color="#666"
                            />
                        </TouchableOpacity>
                        {expanded === item.question && (
                            <Text style={styles.answer}>{item.answer}</Text>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", padding: 16, paddingTop: 50 },
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
    // header: {
    //     fontSize: 22,
    //     fontWeight: "bold",
    //     color: themeColor.secondary,
    //     marginBottom: 16,
    // },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: themeColor.lightSecondary,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    searchInput: { flex: 1, color: themeColor.secondary, marginLeft: 8 },
    categoryRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    categoryBtn: { alignItems: "center", padding: 6 },
    categoryActive: { borderBottomWidth: 2, borderBottomColor: themeColor.primary },
    categoryText: { fontSize: 12, color: "#777", marginTop: 4 },
    categoryTextActive: { color: themeColor.primary, fontWeight: "600" },
    sectionTitle: {
        fontSize: 14,
        color: themeColor.secondary,
        marginBottom: 8,
        fontWeight: "500",
    },
    accordion: {
        backgroundColor: themeColor.lightSecondary,
        marginVertical: 4,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    questionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    question: {
        color: themeColor.secondary,
        fontSize: 16,
        fontWeight: "600",
        flex: 1,
    },
    answer: {
        color: "#555",
        fontSize: 13,
        lineHeight: 18,
        marginTop: 8,
    },
});
