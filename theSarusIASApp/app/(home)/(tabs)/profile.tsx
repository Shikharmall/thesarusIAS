import Header from "@/components/Header";
import Profile from "@/components/profile/Profile";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Profile />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    // paddingTop: 50,
    // paddingBottom: 40
  },
})
