import Header from "@/components/Header";
import Banner from "@/components/home/Banner";
import SlidableCards from "@/components/SlidableCards";
import SlidableCards2 from "@/components/SlidableCards2";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Banner />
      <SlidableCards />
      <SlidableCards2 />
      {/* <Pagee /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    //paddingTop: 50,
    //paddingBottom: 40
  },
})
