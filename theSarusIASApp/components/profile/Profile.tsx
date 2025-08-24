import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'

export default function Profile() {

    return (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Profile Info */}
            <View style={styles.profileContainer}>
                <View style={styles.profileHeader}>
                    <View style={styles.profileAvatar}>
                        <Ionicons name="person" size={32} color="#4A90E2" />
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Student</Text>
                        <Text style={styles.profileId}>9659XXXX</Text>
                        <Text style={styles.profileEmail}>abcxxxx23@gmail.com</Text>
                    </View>
                    <TouchableOpacity style={styles.editButton}>
                        <Ionicons name="create-outline" size={20} color="#4A90E2" />
                        <Text style={styles.editText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Progress Section */}
            <View style={styles.progressContainer}>
                <View style={styles.progressHeader}>
                    <Text style={styles.progressTitle}>My Progress</Text>
                    <Ionicons name="trending-up" size={20} color="#4A90E2" />
                </View>

                <View style={styles.progressCircleContainer}>
                    <View style={styles.progressCircle}>
                        <Text style={styles.progressPercentage}>75%</Text>
                        <Text style={styles.progressLabel}>Overall</Text>
                    </View>
                </View>

                <Text style={styles.progressSubtext}>Monitor your course completion</Text>
            </View>

            {/* Stats Grid */}
            <View style={styles.statsGrid}>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>1/09</Text>
                    <Text style={styles.statLabel}>Test Series</Text>
                    <Text style={styles.statSubtext}>Test your mettle</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>21/22</Text>
                    <Text style={styles.statLabel}>Class Videos</Text>
                    <Text style={styles.statSubtext}>Learn from the best</Text>
                </View>
            </View>

            <View style={styles.statsGrid}>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>05/500</Text>
                    <Text style={styles.statLabel}>AWM</Text>
                    <Text style={styles.statSubtext}>Answer Writing</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>09/11</Text>
                    <Text style={styles.statLabel}>Notes</Text>
                    <Text style={styles.statSubtext}>Additional content for</Text>
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    profileContainer: {
        backgroundColor: "#F0F4FF",
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#F0F4FF",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
        marginBottom: 4,
    },
    profileId: {
        fontSize: 14,
        color: "#666",
        marginBottom: 2,
    },
    profileEmail: {
        fontSize: 14,
        color: "#666",
    },
    editButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    editText: {
        fontSize: 12,
        color: "#4A90E2",
        marginLeft: 4,
    },
    progressContainer: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    progressHeader: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        marginBottom: 20,
    },
    progressTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
        marginRight: 8,
    },
    progressCircleContainer: {
        marginBottom: 12,
    },
    progressCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 8,
        borderColor: "#4A90E2",
        borderTopColor: "#E5E5E5",
        borderRightColor: "#E5E5E5",
        borderBottomColor: "#E5E5E5",
        justifyContent: "center",
        alignItems: "center",
    },
    progressPercentage: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#4A90E2",
    },
    progressLabel: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },
    progressSubtext: {
        fontSize: 14,
        color: "#999",
    },
    statsGrid: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    statCard: {
        backgroundColor: "white",
        flex: 1,
        padding: 16,
        borderRadius: 12,
        marginHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    statNumber: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4A90E2",
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
        marginBottom: 4,
    },
    statSubtext: {
        fontSize: 12,
        color: "#666",
    },
})

