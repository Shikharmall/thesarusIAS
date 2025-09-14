import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const size: number = 50;

interface CardProps {
  game: {
    id: number;
    title: string;
    subTitle: string;
    image: string;
    enrolled: string;
    stars: number;
    color: string;
  };
}

export default function Card2({ game }: CardProps) {
  const [isFavourite, setFavourite] = useState<boolean>(false);

  return (
    <View style={styles.cardWrapper}>
      {/* <Image
        source={require("../assets/images/bg1.png")}
        style={styles.cardImage}
      /> */}
      <View
        //colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
        // colors={['#4fcbf5ff', '#57ccf3ff']}
        style={[styles.overlay, { backgroundColor: game?.color }]}
      >
        {/* Footer Info */}
        <View style={styles.footer}>
          <Text style={styles.title}>{game?.title}</Text>
          <Text style={styles.ratingText}>{game?.subTitle}</Text>
          <View style={styles.downloadRow}>
            <MaterialIcons name="people-outline" size={20} color="#eee" />
            <Text style={styles.downloadText}>{game.enrolled} Enrolled</Text>
          </View>
        </View>

        {/* Favourite Button */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setFavourite(!isFavourite)}
            style={styles.favBtn}
          >
            <MaterialIcons
              name="calendar-today"
              size={20}
              color={isFavourite ? 'white' : 'white'}
            />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginRight: 16,
    position: "relative",
    width: size * 4,
    height: size * 3,
  },
  cardImage: {
    width: 320,
    height: 240,
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    padding: 16,
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: '#29B6F6'
    // backgroundColor: '#dbf2ff'
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  favBtn: {
    padding: 12,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.3)",
    margin: 5
  },
  footer: {
    gap: 4,
  },
  ratingText: {
    color: "#eee", // gray-300
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#eee", // gray-300
  },
  downloadRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  downloadText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#eee", // gray-300
  },
});
