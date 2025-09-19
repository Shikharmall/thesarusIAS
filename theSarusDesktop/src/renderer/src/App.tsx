import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import LoginScreen from "./screen/authentication/LoginScreen";
import RegisterScreen from "./screen/authentication/RegisterScreen";

import Dashboard from "./screen/home/DashboardScreen";


import CoursesScreen from "./screen/courses/CoursesScreen";
import AddCourseScreen from "./screen/courses/AddCourseScreen";
import CourseDetailsScreen from "./screen/courses/CourseDetailsScreen";
import VideoPlayerScreen from "./screen/courses/VideoPlayerScreen";


import ExaminationScreen from "./screen/testseries/ExaminationScreen";
import NotificationScreen from "./screen/miscellaneous/NotificationScreen";
import HelpSupportScreen from "./screen/miscellaneous/HelpSupportScreen";
import SettingsScreen from "./screen/miscellaneous/SettingsScreen";
import QuestionBankListScreen from "./screen/questionbank/QuestionBankListScreen";
import DisplayQuestionPaperScreen from "./screen/testpaper/DisplayQuestionPaperScreen";


import TestSeriesScreen from "./screen/testseries/TestSeriesScreen";
import QuestionPaperScreen from "./screen/testpaper/QuestionPaperScreen";
import ExamSectionPaperScreen from "./screen/testpaper/ExamSectionPaperScreen";
import CreateExamPaperScreen from "./screen/testpaper/CreateExamPaperScreen";
import InstructionScreen from "./screen/testseries/InstructionScreen";


import ConductScreen from "./screen/conduct/ConductScreen";
import ExamSubmitScreen from "./screen/testseries/ExamSubmitScreen";
import CheckoutScreen from "./screen/checkout/CheckoutScreen";
import ExamResultPage from "./screen/testseries/ExamResultScreen";
import AddQuestionScreen from "./screen/questionbank/AddQuestionScreen";
import QuestionBankScreen from "./screen/questionbank/QuestionBankScreen";
import AddTestScreen from "./screen/testpaper/AddTestScreen";
import AddCourseDetailsScreen from "./screen/courses/AddCourseDetailsScreen";
// import TicketScreen from "./screen/ticket/TicketScreen";

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

      {/* User Authentication Routes */}
      <Route path="/" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      {/* Home Routes */}
      <Route path="/home" element={<Dashboard />} />

      {/* Courses Routes */}
      <Route path="/courses" element={<CoursesScreen />} />
      <Route path="/addCourse" element={<AddCourseScreen />} />
      <Route path="/addCourseDetails/:id" element={<AddCourseDetailsScreen />} />
      <Route path="/courseDetails/:id" element={<CourseDetailsScreen />} />
      <Route path="/video" element={<VideoPlayerScreen />} />

      {/* Question Bank Routes */}
      <Route path="/questionBanks" element={<QuestionBankScreen />} />
      <Route path="/questionBankList/:id" element={<QuestionBankListScreen />} />
      <Route path="/addQuestion/:id" element={<AddQuestionScreen />} />

      {/* Exam Paper Routes */}
      <Route path="/testPapers" element={<AddTestScreen />} />
      <Route path="/examSectionPaper/:id" element={<ExamSectionPaperScreen />} />
      <Route path="/createExamPaper" element={<CreateExamPaperScreen />} />
      <Route path="/questionPaper/:id" element={<QuestionPaperScreen />} />
      <Route path="/displayQuestionPaper" element={<DisplayQuestionPaperScreen />} />

      {/* Test Series Routes */}
      <Route path="/testSeries" element={<TestSeriesScreen />} />
      <Route path="/instructionPage/:id" element={<InstructionScreen />} />
      <Route path="/exam/:id" element={<ExaminationScreen />} />
      <Route path="/examSubmit/:total/:answered/:flagged/:answeredFlagged" element={<ExamSubmitScreen />} />
      <Route path="/examResult" element={<ExamResultPage />} />

      {/* Conduct Exam Routes */}
      <Route path="/conduct" element={<ConductScreen />} />

      {/* Miscellaneous Routes */}
      <Route path="/helpSupport" element={<HelpSupportScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
      <Route path="/notification" element={<NotificationScreen />} />
      <Route path="/checkout" element={<CheckoutScreen />} />
      {/* <Route path="/ticket" element={<TicketScreen />} /> */}

    </Routes>
  );
}

export default App;
