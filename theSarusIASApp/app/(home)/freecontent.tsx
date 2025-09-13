// import React from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     FlatList,
//     TouchableOpacity,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// interface Subject {
//     id: string;
//     name: string;
//     total: number;
//     color: string;
// }

// const subjects: Subject[] = [
//     { id: "1", name: "History", total: 9, color: "#FFA726" },
//     { id: "2", name: "Geography", total: 10, color: "#26A69A" },
//     { id: "3", name: "Science", total: 7, color: "#EF5350" },
//     { id: "4", name: "Polity", total: 9, color: "#29B6F6" },
//     { id: "5", name: "Economics", total: 5, color: "#EC407A" },
//     { id: "6", name: "Art & Culture", total: 3, color: "#9575CD" },
//     { id: "7", name: "Biology", total: 2, color: "#FFB300" },
//     { id: "8", name: "Chemistry", total: 4, color: "#26C6DA" },
//     { id: "9", name: "Sociology", total: 4, color: "#E57373" },
//     { id: "10", name: "Physics", total: 4, color: "#00BCD4" },
// ];

// const SubjectCard = ({ item }: { item: Subject }) => (
//     <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]}>
//         <View style={styles.cardHeader}>
//             <Ionicons name="document-text-outline" size={28} color="#fff" />
//             <Text style={styles.title}>{item.name}</Text>
//         </View>
//         <Text style={styles.pdfCount}>TOTAL PDFs : {item.total}</Text>
//     </TouchableOpacity>
// );

// export default function FreeContentScreen() {
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={subjects}
//                 renderItem={({ item }) => <SubjectCard item={item} />}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2}
//                 columnWrapperStyle={styles.row}
//                 contentContainerStyle={{ paddingBottom: 40 }}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         padding: 10,
//     },
//     row: {
//         justifyContent: "space-between",
//         marginBottom: 15,
//     },
//     card: {
//         flex: 1,
//         borderRadius: 10,
//         padding: 15,
//         minHeight: 100,
//         justifyContent: "space-between",
//         elevation: 3,
//         margin: 5
//     },
//     cardHeader: {
//         flexDirection: "row",
//         alignItems: "center",
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: "bold",
//         color: "#fff",
//         marginLeft: 10,
//     },
//     pdfCount: {
//         marginTop: 10,
//         fontSize: 14,
//         color: "#fff",
//         fontWeight: "600",
//     },
// });


import { themeColor } from "@/utils/constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

interface Book {
    id: string;
    title: string;
    date: string;
    color: string;
    url: string
}

const books: Book[] = [
    {
        id: "1",
        title: "Textbook for Class-VI (Social Science – Our Pasts-I)",
        date: "08 Jul 2018",
        color: "#FFA726",
        url: "https://www.drishtiias.com/images/pdf/History6.pdf",
    },
    {
        id: "2",
        title: "Textbook for Class-VII (Social Science – Social and Political Life-II)",
        date: "08 Jul 2018",
        color: "#26A69A",
        url: "https://www.drishtiias.com/images/pdf/History6.pdf",
    },
    {
        id: "3",
        title: "Textbook for Class-VIII (Social Science – Our Pasts-III) Part-2",
        date: "08 Jul 2018",
        color: "#EF5350",
        url: "https://www.drishtiias.com/images/pdf/History6.pdf",
    },
    {
        id: "4",
        title: "Textbook for Class-IX (Social Science – India and the Contemporary World-I)",
        date: "08 Jul 2018",
        color: "#29B6F6",
        url: "https://www.drishtiias.com/images/pdf/History6.pdf",
    },
    {
        id: "5",
        title: "Textbook for Class-X (Social Science – India and the Contemporary World-II)",
        date: "08 Jul 2018",
        color: "#EC407A",
        url: "https://www.drishtiias.com/images/pdf/History6.pdf",
    },
    {
        id: "6",
        title: "Textbook for Class-XI (Themes in World History)",
        date: "08 Jul 2018",
        color: "#9575CD",
        url: "https://www.drishtiias.com/images/pdf/History6.pdf",
    },
    {
        id: "7",
        title: "Textbook for Class-XII (Themes in Indian History – Part-I)",
        date: "08 Jul 2018",
        color: "#26C6DA",
        url: "https://www.drishtiias.com/images/pdf/History6.pdf",
    },
    {
        id: "8",
        title: "Textbook for Class-XII (Themes in Indian History – Part-II)",
        date: "08 Jul 2018",
        color: "#E57373",
        url: "https://www.drishtiias.com/images/pdf/History6.pdf",
    },
    {
        id: "9",
        title: "Textbook for Class-XII (Themes in Indian History – Part-III)",
        date: "08 Jul 2018",
        color: "#00BCD4",
        url: "https://www.drishtiias.com/images/pdf/History6.pdf",
    },
];

const handleDownload = async (url: string) => {
    try {
        //   const uri =
        //     "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"; // file url
        const fileUri = FileSystem.documentDirectory + "dummy.pdf";

        const { uri: localUri } = await FileSystem.downloadAsync(url, fileUri);

        Alert.alert("Download complete!", `File saved to: ${localUri}`);
    } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to download file.");
    }
};

const BookCard = ({ item }: { item: Book }) => (
    <View style={[styles.card, { backgroundColor: item.color }]}>
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </View>
        <TouchableOpacity style={styles.downloadBtn} onPress={() => handleDownload(item?.url)}>
            <Ionicons name="arrow-down-circle-outline" size={28} color="#fff" />
        </TouchableOpacity>
    </View>
);

export default function FreeContentScreen() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={themeColor.secondary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>NCERT PDF</Text>
                <View style={{ width: 24 }} />
            </View>
            <FlatList
                data={books}
                renderItem={({ item }) => <BookCard item={item} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={{ paddingBottom: 40 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingTop: 50
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        justifyContent: "space-between",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: themeColor.secondary,
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 15,
    },
    card: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        minHeight: 120,
        margin: 5,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 8,
    },
    date: {
        fontSize: 12,
        color: "#f5f5f5",
    },
    downloadBtn: {
        justifyContent: "center",
        alignItems: "center",
    },
});
