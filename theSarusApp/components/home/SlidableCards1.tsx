import React from "react";
import {
    ScrollView,
    StyleSheet,
    View
} from "react-native";
import Card1 from "./Card1";

export default function SlidableCards1() {

    const featured = [
        {
            id: 1,
            title: 'Zooba',
            image: 'https://res.cloudinary.com/drb1ds8e3/image/upload/v1757832866/bg1_mla2uz.png',
            downloads: '200k',
            stars: 4
        },
        {
            id: 2,
            title: 'Subway Surfer',
            image: 'https://res.cloudinary.com/drb1ds8e3/image/upload/v1757832866/bg1_mla2uz.png',
            downloads: '5M',
            stars: 4
        },
        {
            id: 3,
            title: 'Free Fire',
            image: 'https://res.cloudinary.com/drb1ds8e3/image/upload/v1757832866/bg1_mla2uz.png',
            downloads: '100M',
            stars: 3
        },
        {
            id: 4,
            title: "Alto's Adventure",
            image: 'https://res.cloudinary.com/drb1ds8e3/image/upload/v1757832866/bg1_mla2uz.png',
            downloads: '20k',
            stars: 4
        },
    ];

    return (
        <View style={styles.section}>
            {/* <Text style={styles.subTitle}>Featured Games</Text> */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
                {featured?.map((item, index) => (
                    <Card1 key={index} game={item} />
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
