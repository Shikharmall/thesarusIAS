import { MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card1 from './Card1'
import { Button } from '../ui/Button'

const categories = ['Action', 'Family', 'Puzzle', 'Adventure', 'Racing', 'Education', 'Others'];

const featured = [
    { id: 1, title: 'Zooba', image: require('../assets/images/thesaruslogo.jpg'), downloads: '200k', stars: 4 },
    { id: 2, title: 'Subway Surfer', image: require('../assets/images/thesaruslogo.jpg'), downloads: '5M', stars: 4 },
    { id: 3, title: 'Free Fire', image: require('../assets/images/thesaruslogo.jpg'), downloads: '100M', stars: 3 },
    { id: 4, title: "Alto's Adventure", image: require('../assets/images/thesaruslogo.jpg'), downloads: '20k', stars: 4 },
];

const games = [
    { id: 1, title: 'Shadow Fight', image: require('../assets/images/thesaruslogo.jpg'), downloads: '20M', stars: 4.5 },
    { id: 2, title: 'Valor Arena', image: require('../assets/images/thesaruslogo.jpg'), downloads: '10k', stars: 3.4 },
    { id: 3, title: 'Frag', image: require('../assets/images/thesaruslogo.jpg'), downloads: '80k', stars: 4.6 },
    { id: 4, title: "Zooba Wildlife", image: require('../assets/images/thesaruslogo.jpg'), downloads: '40k', stars: 3.5 },
    { id: 5, title: "Clash of Clans", image: require('../assets/images/thesaruslogo.jpg'), downloads: '20k', stars: 4.2 },
];

export default function StoreScreen() {
    const [activeCategory, setActiveCategory] = useState('Action');
    const [selectedGame, setSelectedGame] = useState<number | null>(null);

    return (
        <LinearGradient
            colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
            style={styles.gradient}
        >
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <MaterialIcons name='doorbell' size={30} color={'red'} />
                    <MaterialIcons name='doorbell' size={30} color={'red'} />
                </View>

                {/* Categories */}
                <View style={styles.section}>
                    <Text style={styles.title}>Browse Games</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
                        {categories.map(cat =>
                            cat === activeCategory ? (
                                <Button key={cat} label={cat} />
                            ) : (
                                <TouchableOpacity
                                    onPress={() => setActiveCategory(cat)}
                                    key={cat}
                                    style={styles.categoryBtn}
                                >
                                    <Text>{cat}</Text>
                                </TouchableOpacity>
                            )
                        )}
                    </ScrollView>
                </View>

                {/* Featured */}
                <View style={styles.section}>
                    <Text style={styles.subTitle}>Featured Games</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
                        {featured.map((item, index) => (
                            <Card1 key={index} game={item} />
                        ))}
                    </ScrollView>
                </View>

                {/* Top Action Games */}
                <View style={styles.section}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.subTitle}>Top Action Games</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.gamesList} showsVerticalScrollIndicator={false}>
                        {games.map((game, index) => {
                            const bg = game.id === selectedGame ? 'rgba(255,255,255,0.4)' : 'transparent';
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.gameCard, { backgroundColor: bg }]}
                                // onPress={() => setSelectedGame(game.id)}
                                >
                                    <Image
                                        source={game.image}
                                        style={styles.gameImage}
                                    />
                                    <View style={styles.gameInfo}>
                                        <Text style={styles.gameTitle}>{game.title}</Text>
                                        <View style={styles.row}>
                                            <View style={styles.row}>
                                                <Image style={styles.iconSmall} source={require("../assets/images/thesaruslogo.jpg")} />
                                                <Text style={styles.gameMeta}>{game.stars} stars</Text>
                                            </View>
                                            <View style={styles.row}>
                                                <MaterialIcons name='doorbell' size={16} color={'red'} />
                                                <Text style={styles.gameMeta}>{game.downloads}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.playBtn}>
                                        <Button label="play" />
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: { flex: 1, width: "100%" },
    safeArea: { flex: 1 },
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 16 },
    section: { marginTop: 12 },
    title: { color: "gray", fontSize: 24, fontWeight: "bold", marginLeft: 16, marginBottom: 8 },
    subTitle: { color: "gray", fontSize: 18, fontWeight: "bold", marginLeft: 16, marginBottom: 8 },
    scrollRow: { paddingLeft: 16 },
    categoryBtn: { backgroundColor: "#bfdbfe", paddingVertical: 8, paddingHorizontal: 16, borderRadius: 999, marginRight: 8 },
    rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8, paddingHorizontal: 16 },
    seeAll: { color: "#2563eb", fontWeight: "bold" },
    gamesList: { height: 320 },
    gameCard: { flexDirection: "row", padding: 8, borderRadius: 24, marginHorizontal: 16, marginBottom: 12 },
    gameImage: { width: 80, height: 80, borderRadius: 16 },
    gameInfo: { flex: 1, justifyContent: "center", paddingLeft: 12 },
    gameTitle: { color: "gray", fontWeight: "600" },
    row: { flexDirection: "row", alignItems: "center", marginRight: 12 },
    iconSmall: { width: 16, height: 16, opacity: 0.8, marginRight: 4 },
    gameMeta: { fontSize: 12, color: "#374151" },
    playBtn: { justifyContent: "center", alignItems: "center" },
});
