import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ExaminationScreen from "./screen/ExaminationScreen";
import Dashboard from "./screen/DashboardScreen";
import CoursesScreen from "./screen/CoursesScreen";
import LecturePage from "./components/dashboard/LecturePage";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import CourseDetails from "./components/dashboard/CourseDetails";
import VideoPlayerPage from "./components/dashboard/VideoPage";
import AddCourseScreen from "./screen/AddCourseScreen";
import NotificationScreen from "./screen/NotificationScreen";
import HelpSupportScreen from "./screen/HelpSupportScreen";
import TicketScreen from "./screen/TicketScreen";
import SettingsScreen from "./screen/SettingsScreen";
import QuestionBankScreen from "./screen/QuestionBankScreen";
import QuestionBankListScreen from "./screen/QuestionBankListScreen";
import AddQuestionScreen from "./screen/AddQuestionScreen";
import DisplayQuestionPaperScreen from "./screen/DisplayQuestionPaperScreen";
import ExamPaperScreen from "./screen/ExamPaperScreen";
import TestSeriesScreen from "./screen/TestSeriesScreen";
import InstructionsPage from "./pages/Instruction";

function App() {
  const location = useLocation();

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.scrollBehavior = "auto";
      window.scrollTo({ top: 0 });
      html.style.scrollBehavior = "";
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/home" element={<Dashboard />} />

      <Route path="/instructionPage/:id" element={<InstructionsPage />} />
      <Route path="/exam/:id" element={<ExaminationScreen />} />

      <Route path="/questionBank" element={<QuestionBankScreen />} />
      <Route path="/questionBankList/:id" element={<QuestionBankListScreen />} />
      <Route path="/courses" element={<CoursesScreen />} />
      <Route path="/addCourse" element={<AddCourseScreen />} />
      <Route path="/addQuestion" element={<AddQuestionScreen />} />
      <Route path="/courseDetails/:id" element={<CourseDetails />} />
      <Route path="/video" element={<VideoPlayerPage />} />
      <Route path="/lecture" element={<LecturePage />} />
      <Route path="/helpSupport" element={<HelpSupportScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
      <Route path="/ticket" element={<TicketScreen />} />
      <Route path="/notification" element={<NotificationScreen />} />

      <Route path="/examPaper" element={<ExamPaperScreen />} />
      <Route path="/displayQuestionPaper" element={<DisplayQuestionPaperScreen />} />

      <Route path="/testSeries" element={<TestSeriesScreen />} />

      {/* <Route path="/instructionPage" element={<InstructionsPage />} />*/}
      {/* <Route path="/slider" element={<Slider />} /> */}
      {/* <Route path="/instructionPop" element={<InstructionScreen />} />
      {/* <Route path="/" element={<InstructionPopup />} /> */}
      {/* <Route path="/terms" element={<TermsPage />} />
      <Route path="/comingSoon" element={<ComingSoon />} /> */}
    </Routes>
  );
}

export default App;
