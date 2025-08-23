import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import Card from "./Cards";

export default function SlidableCards() {
    const featured = [
        { id: 1, title: 'Zooba', image: require('../assets/images/bg1.png'), downloads: '200k', stars: 4 },
        { id: 2, title: 'Subway Surfer', image: require('../assets/images/bg1.png'), downloads: '5M', stars: 4 },
        { id: 3, title: 'Free Fire', image: require('../assets/images/bg1.png'), downloads: '100M', stars: 3 },
        { id: 4, title: "Alto's Adventure", image: require('../assets/images/bg1.png'), downloads: '20k', stars: 4 },
    ];

    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>Featured Games</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
                {featured.map((item, index) => (
                    <Card key={index} game={item} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    section: { marginTop: 12 },
    subTitle: { color: "gray", fontSize: 18, fontWeight: "bold", marginLeft: 16, marginBottom: 8 },
    scrollRow: { paddingLeft: 16 },
});
