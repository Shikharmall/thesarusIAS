import TabSwitcherCourses from "@/components/course/TabSwitcherCourses";
import Header from "@/components/Header";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function CourseScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <TabSwitcherCourses />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    // paddingTop: 50,
    // paddingBottom: 40
  }
})
