import Header from "@/components/common/Header";
import TabSwitcherTestSeries from "@/components/testseries/TabSwitcherTestSeries";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../../utils/constant/Colors";

export default function TestScreen() {
    return (
        <View style={styles.container}>
            <Header />
            {/* Tabs */}
            <TabSwitcherTestSeries />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        //paddingTop: 50
    },
})
