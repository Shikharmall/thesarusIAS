import { themeColor } from "@/utils/constant/Colors";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Card from "./Cards2";

interface CardProps {
    id: number;
    title: string;
    subTitle: string;
    image: string;
    enrolled: string;
    stars: number;
    color: string;
}

interface Props {
    title: string
}

export default function SlidableCards({ title }: Props) {
    const featured: CardProps[] = [
        {
            id: 1,
            title: 'UPSC Prelims',
            subTitle: "IAS Prelims 2026",
            image: require('../assets/images/bg1.png'),
            enrolled: '5k',
            stars: 4,
            color: "#29B6F6",
        },
        {
            id: 2,
            title: 'UPSC CSAT',
            subTitle: "IAS CSAT 2026",
            image: require('../assets/images/bg1.png'),
            enrolled: '3k',
            stars: 4,
            color: "#E57373",
        },
        {
            id: 3,
            title: 'SSC Tier I & II',
            subTitle: "SSC 2026",
            image: require('../assets/images/bg1.png'),
            enrolled: '5k',
            stars: 4,
            color: "#EC407A",
        },
        {
            id: 4,
            title: 'Railway Exam',
            subTitle: "Railway CBT I & II 2026",
            image: require('../assets/images/bg1.png'),
            enrolled: '5k',
            stars: 3,
            color: "#26C6DA",
        },
        {
            id: 5,
            title: 'Bank PO',
            subTitle: "Prelims 2026",
            image: require('../assets/images/bg1.png'),
            enrolled: '2k',
            stars: 4,
            color: "#9575CD",
        },
    ];

    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>{title}</Text>
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
