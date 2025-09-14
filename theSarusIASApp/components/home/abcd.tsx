import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

const CourseDetailsScreen = () => {
  const featureItems = [
    { id: 1, title: "Features", icon: "document-text-outline", color: "#4A90E2" },
    { id: 2, title: "Demo Class", icon: "play-outline", color: "#50C878" },
    { id: 3, title: "FAQs", icon: "help-circle-outline", color: "#FFB347" },
    { id: 4, title: "Submit Feedback", icon: "star-outline", color: "#FF6B6B" },
    { id: 5, title: "Schedule & Syllabus", icon: "calendar-outline", color: "#4ECDC4" },
    { id: 6, title: "My Class", icon: "folder-outline", color: "#95A5A6" },
  ]

  const bottomItems = [
    { id: 1, title: "Test Series", icon: "library-outline", color: "#E67E22" },
    { id: 2, title: "Submit Answer", icon: "checkmark-circle-outline", color: "#9B59B6" },
    { id: 3, title: "Class Test", icon: "clipboard-outline", color: "#3498DB" },
  ]

  const FeatureCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.featureCard}>
      <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
        <Ionicons name={item.icon as any} size={24} color={item.color} />
      </View>
      <Text style={styles.featureText}>{item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Course Details</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Course Card */}
        <View style={styles.courseCard}>
          <View style={styles.courseHeader}>
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>IAS GS Foundation</Text>
              <Text style={styles.courseBatch}>Batch - 32B</Text>
            </View>
            <View style={styles.liveIndicator}>
              <Text style={styles.liveText}>Live</Text>
            </View>
          </View>

          <View style={styles.courseTags}>
            <View style={styles.liveTag}>
              <Text style={styles.liveTagText}>🔴 Live</Text>
            </View>
            <View style={styles.englishTag}>
              <Text style={styles.englishTagText}>English</Text>
            </View>
          </View>

          <View style={styles.courseDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Weekly</Text>
              <Text style={styles.detailValue}>36 Months</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Category</Text>
              <Text style={styles.detailValue}>Offline</Text>
            </View>
          </View>
        </View>

        {/* Features Grid */}
        <View style={styles.featuresGrid}>
          {featureItems.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </View>

        {/* Bottom Items */}
        <View style={styles.bottomGrid}>
          {bottomItems.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const TestScreen = () => {
  const [activeTab, setActiveTab] = useState("Instructions")

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>General Studies tests</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Tabs */}
        <View style={styles.tabContainer}>
          {["Instructions", "Questions", "Downloads"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Test Details */}
        <View style={styles.testDetailsContainer}>
          <View style={styles.testDetailRow}>
            <View style={styles.testDetailItem}>
              <Ionicons name="calendar-outline" size={16} color="#666" />
              <Text style={styles.testDetailLabel}>Start Date</Text>
              <Text style={styles.testDetailValue}>28 Feb 2024 | 3:00:00PM</Text>
            </View>
            <View style={styles.testDetailItem}>
              <Ionicons name="calendar-outline" size={16} color="#666" />
              <Text style={styles.testDetailLabel}>Start Date</Text>
              <Text style={styles.testDetailValue}>28 Feb 2024 | 3:00:00PM</Text>
            </View>
          </View>

          <View style={styles.testStatsRow}>
            <View style={styles.testStat}>
              <Ionicons name="document-text-outline" size={20} color="#4A90E2" />
              <Text style={styles.testStatNumber}>100</Text>
              <Text style={styles.testStatLabel}>Questions</Text>
            </View>
            <View style={styles.testStat}>
              <Ionicons name="time-outline" size={20} color="#4A90E2" />
              <Text style={styles.testStatNumber}>100</Text>
              <Text style={styles.testStatLabel}>Minutes</Text>
            </View>
            <View style={styles.testStat}>
              <Ionicons name="trophy-outline" size={20} color="#4A90E2" />
              <Text style={styles.testStatNumber}>100</Text>
              <Text style={styles.testStatLabel}>Marks</Text>
            </View>
          </View>
        </View>

        {/* Language Selection */}
        <View style={styles.languageContainer}>
          <TouchableOpacity style={styles.languageButtonActive}>
            <Text style={styles.languageTextActive}>हिंदी</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.languageButton}>
            <Text style={styles.languageText}>English</Text>
          </TouchableOpacity>
        </View>

        {/* Hindi Instructions */}
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>प्रश्न-पत्र के लिए विशिष्ट अनुदेश</Text>
          <Text style={styles.instructionsText}>
            कृपया प्रश्नों के उत्तर देने से पूर्व निम्नलिखित प्रत्येक अनुदेश को ध्यानपूर्वक पढ़ें:{"\n\n"}
            हिन्दी और अंग्रेजी दोनों में दिये गये हैं।{"\n\n"}
            सभी प्रश्न अनिवार्य हैं।{"\n\n"}
            प्रत्येक प्रश्न के अन्तर्गत चार विकल्प दिए गए हैं।{"\n\n"}
            प्रश्नों के उत्तर उसी माध्यम में दिये जाने चाहिए जिसमें उम्मीदवार उत्तीर्ण आपकी प्रश्न-पत्र में किया गया है और यह माध्यम का चयन
            उत्तर-पत्र (ओ.एम.आर.) पुस्तिका के मुख्य पृष्ठ पर अंकित निर्देश स्थान पर किया जाना चाहिए। उल्लेखित माध्यम के अतिरिक्त अन्य किसी
            माध्यम में अंकित किये गए उत्तर पर अंकित निर्देश स्थान पर किया गया उत्तर पर
          </Text>
        </View>

        {/* Start Button */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Attempt</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const HomeScreen = () => {
  const courseData = [
    {
      id: 1,
      title: "CUET (UG) 2024",
      subtitle: "Common University Entrance Test",
      batch: "General Test | Language |",
      status: "Live",
      language: "English",
      color: "#4A90E2",
    },
    {
      id: 2,
      title: "CTET 2024",
      subtitle: "Paper - 1&2",
      batch: "",
      status: "Live",
      language: "हिंदी",
      color: "#27AE60",
    },
    {
      id: 3,
      title: "CUET (UG) 2024",
      subtitle: "Geography Sec-B",
      batch: "General Test | Language |",
      status: "Live",
      language: "हिंदी",
      color: "#E67E22",
    },
  ]

  const newCourses = [
    {
      id: 1,
      title: "GS Foundation",
      subtitle: "(Prelims+Mains)",
      batch: "Weekend Batch",
      status: "हिंदी",
      type: "हिंदी",
    },
    {
      id: 2,
      title: "GS Foundation",
      subtitle: "(Prelims+Mains)",
      batch: "Weekend Batch",
      status: "हिंदी",
      type: "हिंदी",
    },
    { id: 3, title: "IAS GS Foundation", subtitle: "Batch - 33", batch: "", status: "Live", type: "English" },
    { id: 4, title: "GS Foundation", subtitle: "Batch - 34", batch: "", status: "Live", type: "English" },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Header */}
      <View style={styles.homeHeader}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#666" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerCenterText}>IAS</Text>
          <Ionicons name="chevron-down" size={16} color="#666" />
        </View>
        <View style={styles.notificationBadge}>
          <Ionicons name="notifications" size={24} color="#666" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </View>
      </View>

      {/* Greeting */}
      <View style={styles.greetingContainer}>
        <View style={styles.profileIcon}>
          <Ionicons name="person" size={24} color="#4A90E2" />
        </View>
        <View>
          <Text style={styles.greetingText}>Good Morning</Text>
          <Text style={styles.studentText}>Student</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" />
        <Text style={styles.searchPlaceholder}>Search Items here...</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Featured Courses */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
          {courseData.map((course) => (
            <View key={course.id} style={[styles.featuredCard, { backgroundColor: course.color }]}>
              <Text style={styles.featuredTitle}>{course.title}</Text>
              <Text style={styles.featuredSubtitle}>{course.subtitle}</Text>
              <Text style={styles.featuredBatch}>{course.batch}</Text>
              <View style={styles.featuredTags}>
                <View style={styles.liveTag}>
                  <Text style={styles.liveTagText}>🔴 {course.status}</Text>
                </View>
                <View style={styles.languageTag}>
                  <Text style={styles.languageTagText}>{course.language}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* New Courses Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Courses in IAS</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {newCourses.map((course) => (
            <View key={course.id} style={styles.courseCard}>
              <Text style={styles.courseCardTitle}>{course.title}</Text>
              <Text style={styles.courseCardSubtitle}>{course.subtitle}</Text>
              <Text style={styles.courseCardBatch}>{course.batch}</Text>
              <View style={styles.courseCardTags}>
                <View style={[styles.courseTag, course.status === "Live" ? styles.liveTag : styles.hindiTag]}>
                  <Text style={styles.courseTagText}>{course.status}</Text>
                </View>
                <View style={styles.courseTag}>
                  <Text style={styles.courseTagText}>{course.type}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Popular Courses Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Courses in IAS</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {newCourses.map((course) => (
            <View key={`popular-${course.id}`} style={styles.courseCard}>
              <Text style={styles.courseCardTitle}>{course.title}</Text>
              <Text style={styles.courseCardSubtitle}>{course.subtitle}</Text>
              <Text style={styles.courseCardBatch}>{course.batch}</Text>
              <View style={styles.courseCardTags}>
                <View style={[styles.courseTag, course.status === "Live" ? styles.liveTag : styles.hindiTag]}>
                  <Text style={styles.courseTagText}>{course.status}</Text>
                </View>
                <View style={styles.courseTag}>
                  <Text style={styles.courseTagText}>{course.type}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Trending Courses Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending Courses in IAS</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 100 }}>
          {newCourses.map((course) => (
            <View key={`trending-${course.id}`} style={styles.courseCard}>
              <Text style={styles.courseCardTitle}>{course.title}</Text>
              <Text style={styles.courseCardSubtitle}>{course.subtitle}</Text>
              <Text style={styles.courseCardBatch}>{course.batch}</Text>
              <View style={styles.courseCardTags}>
                <View style={[styles.courseTag, course.status === "Live" ? styles.liveTag : styles.hindiTag]}>
                  <Text style={styles.courseTagText}>{course.status}</Text>
                </View>
                <View style={styles.courseTag}>
                  <Text style={styles.courseTagText}>{course.type}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#4A90E2" />
          <Text style={[styles.navText, { color: "#4A90E2" }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#999" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemCenter}>
          <View style={styles.exploreButton}>
            <Ionicons name="compass" size={24} color="white" />
          </View>
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="book-outline" size={24} color="#999" />
          <Text style={styles.navText}>My Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="#999" />
          <Text style={styles.navText}>My Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="menu" size={24} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#666" />
        </TouchableOpacity>
      </View>

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
    </SafeAreaView>
  )
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home")

  const renderScreen = () => {
    switch (currentScreen) {
      case "course":
        return <CourseDetailsScreen />
      case "test":
        return <TestScreen />
      case "profile":
        return <ProfileScreen />
      default:
        return <HomeScreen />
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
      {/* Simple navigation for demo */}
      <View style={styles.demoNav}>
        <TouchableOpacity onPress={() => setCurrentScreen("home")} style={styles.demoNavButton}>
          <Text style={styles.demoNavText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen("course")} style={styles.demoNavButton}>
          <Text style={styles.demoNavText}>Course</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen("test")} style={styles.demoNavButton}>
          <Text style={styles.demoNavText}>Test</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen("profile")} style={styles.demoNavButton}>
          <Text style={styles.demoNavText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F8F9FA",
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#8B5CF6",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
//   courseCard: {
//     backgroundColor: "#87CEEB",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 24,
//   },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 4,
  },
  courseBatch: {
    fontSize: 14,
    color: "#34495E",
  },
  liveIndicator: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  liveText: {
    fontSize: 12,
    color: "#E74C3C",
    fontWeight: "600",
  },
  courseTags: {
    flexDirection: "row",
    marginBottom: 16,
  },
  liveTag: {
    backgroundColor: "#E74C3C",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  liveTagText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  englishTag: {
    backgroundColor: "#27AE60",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  englishTagText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  courseDetails: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    padding: 12,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 14,
    color: "#2C3E50",
  },
  detailValue: {
    fontSize: 14,
    color: "#2C3E50",
    fontWeight: "600",
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  bottomGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
  },
  featureCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    width: "30%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    textAlign: "center",
    color: "#2C3E50",
    fontWeight: "500",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 20,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#4A90E2",
    borderRadius: 6,
  },
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  activeTabText: {
    color: "white",
    fontWeight: "600",
  },
  testDetailsContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  testDetailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  testDetailItem: {
    flex: 1,
    alignItems: "center",
  },
  testDetailLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  testDetailValue: {
    fontSize: 12,
    color: "#333",
    fontWeight: "600",
    marginTop: 2,
  },
  testStatsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  testStat: {
    alignItems: "center",
  },
  testStatNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },
  testStatLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  languageContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  languageButtonActive: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 12,
  },
  languageButton: {
    backgroundColor: "#E5E5E5",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  languageTextActive: {
    color: "white",
    fontWeight: "600",
  },
  languageText: {
    color: "#666",
  },
  instructionsContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  instructionsText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  startButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  startButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  homeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerCenterText: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 4,
  },
  notificationBadge: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#E74C3C",
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F0F4FF",
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  greetingText: {
    fontSize: 14,
    color: "#666",
  },
  studentText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  searchPlaceholder: {
    marginLeft: 8,
    color: "#999",
    fontSize: 14,
  },
  featuredScroll: {
    marginBottom: 24,
  },
  featuredCard: {
    width: 280,
    padding: 16,
    borderRadius: 12,
    marginRight: 16,
    marginLeft: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  featuredSubtitle: {
    fontSize: 14,
    color: "white",
    opacity: 0.9,
    marginBottom: 8,
  },
  featuredBatch: {
    fontSize: 12,
    color: "white",
    opacity: 0.8,
    marginBottom: 12,
  },
  featuredTags: {
    flexDirection: "row",
  },
  languageTag: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  languageTagText: {
    color: "white",
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  viewAll: {
    fontSize: 14,
    color: "#4A90E2",
  },
  courseCard: {
    backgroundColor: "white",
    width: 160,
    padding: 12,
    borderRadius: 12,
    marginRight: 12,
    marginLeft: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseCardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  courseCardSubtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  courseCardBatch: {
    fontSize: 11,
    color: "#999",
    marginBottom: 8,
  },
  courseCardTags: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  courseTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  hindiTag: {
    backgroundColor: "#E8F5E8",
  },
  courseTagText: {
    fontSize: 10,
    fontWeight: "500",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  navItemCenter: {
    flex: 1,
    alignItems: "center",
  },
  exploreButton: {
    backgroundColor: "#4A90E2",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    fontSize: 10,
    color: "#999",
    marginTop: 4,
  },
  profileContainer: {
    backgroundColor: "white",
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
  demoNav: {
    flexDirection: "row",
    backgroundColor: "#333",
    paddingVertical: 8,
  },
  demoNavButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
  },
  demoNavText: {
    color: "white",
    fontSize: 12,
  },
})
