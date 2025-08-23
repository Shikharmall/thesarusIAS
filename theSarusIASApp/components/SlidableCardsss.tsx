import React, { useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

const { width } = Dimensions.get("window");

const images = [
  { id: "1", uri: "https://picsum.photos/600/400?random=2" },
  { id: "2", uri: "https://picsum.photos/600/400?random=2" },
  { id: "3", uri: "https://picsum.photos/600/400?random=2" },
  { id: "4", uri: "https://picsum.photos/600/400?random=2" },
];

export default function SlidableCards() {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        )}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />

      {/* Pagination dots */}
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  card: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width * 0.9,
    height: 220,
    borderRadius: 16,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#6A0DAD",
    width: 10,
    height: 10,
  },
});
