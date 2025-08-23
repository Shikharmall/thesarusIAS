import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons';

const size = 50;

export default function Card({ game }: any) {
  const [isFavourite, setFavourite] = useState(false);

  return (
    <View style={styles.cardWrapper}>
      <Image
        source={require("../assets/images/bg1.png")}
        style={styles.cardImage}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
        style={styles.overlay}
      >
        {/* Favourite Button */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setFavourite(!isFavourite)}
            style={styles.favBtn}
          >
            <MaterialIcons
              name="heart-broken"
              size={25}
              color={isFavourite ? 'red' : 'white'}
            />
          </TouchableOpacity>
        </View>

        {/* Footer Info */}
        <View style={styles.footer}>
          <Text style={styles.ratingText}>Star rating</Text>
          <Text style={styles.title}>{game.title}</Text>
          <View style={styles.downloadRow}>
            <MaterialIcons name="arrow-downward" size={20} color="lightgray" />
            <Text style={styles.downloadText}>{game.downloads} Downloads</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginRight: 16,
    position: "relative",
  },
  cardImage: {
    // width: 320,
    // height: 240,
    width: size*6,
    height: size*3,
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    padding: 16,
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  favBtn: {
    padding: 12,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  footer: {
    gap: 4,
  },
  ratingText: {
    color: "#d1d5db", // gray-300
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#d1d5db", // gray-300
  },
  downloadRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  downloadText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#d1d5db", // gray-300
  },
});
