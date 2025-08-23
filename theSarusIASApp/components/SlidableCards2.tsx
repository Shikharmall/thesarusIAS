import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import Card from "./Cards2";
import { themeColor } from "@/constants/Colors";

export default function SlidableCards() {
    const featured = [
        { id: 1, title: 'UPSC Prelims', subTitle: "IAS Prelims 2026", image: require('../assets/images/bg1.png'), downloads: '200k', stars: 4 },
        { id: 2, title: 'SSC Tier I & II', subTitle: "SSC 2026", image: require('../assets/images/bg1.png'), downloads: '5M', stars: 4 },
        { id: 3, title: 'Railway Exam', subTitle: "Railway CBT I & II 2026", image: require('../assets/images/bg1.png'), downloads: '100M', stars: 3 },
        { id: 4, title: 'Bank PO', subTitle: "Prelims 2026", image: require('../assets/images/bg1.png'), downloads: '20k', stars: 4 },
    ];

    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>Test Series</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
                {featured?.map((item, index) => (
                    <Card key={index} game={item} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    section: { marginTop: 12 },
    subTitle: { color: themeColor?.secondary, fontSize: 18, fontWeight: "bold", marginLeft: 16, marginBottom: 8 },
    scrollRow: { paddingLeft: 16 },
});
