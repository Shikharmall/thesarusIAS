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
import QuestionBankScreen from "./screen/questionbank/QuestionBankScreen";
import QuestionBankListScreen from "./screen/questionbank/QuestionBankListScreen";
import AddQuestionScreen from "./screen/questionbank/AddQuestionScreen";
import DisplayQuestionPaperScreen from "./screen/exampaper/DisplayQuestionPaperScreen";
import ExamPaperScreen from "./screen/exampaper/ExamPaperScreen";
import TestSeriesScreen from "./screen/testseries/TestSeriesScreen";
import InstructionsPage from "./screen/testseries/Instruction";
import QuestionPaperScreen from "./screen/exampaper/QuestionPaperScreen";
import ExamSectionPaperScreen from "./screen/exampaper/ExamSectionPaperScreen";
import CreateExamPaperScreen from "./screen/exampaper/CreateExamPaperScreen";
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
      <Route path="/courseDetails/:id" element={<CourseDetailsScreen />} />
      <Route path="/video" element={<VideoPlayerScreen />} />

      {/* Question Bank Routes */}
      <Route path="/questionBank" element={<QuestionBankScreen />} />
      <Route path="/questionBankList/:id" element={<QuestionBankListScreen />} />
      <Route path="/addQuestion" element={<AddQuestionScreen />} />

      {/* Exam Paper Routes */}
      <Route path="/examPaper" element={<ExamPaperScreen />} />
      <Route path="/examSectionPaper/:id" element={<ExamSectionPaperScreen />} />
      <Route path="/createExamPaper" element={<CreateExamPaperScreen />} />
      <Route path="/questionPaper/:id" element={<QuestionPaperScreen />} />
      <Route path="/displayQuestionPaper" element={<DisplayQuestionPaperScreen />} />

      {/* Test Series Routes */}
      <Route path="/testSeries" element={<TestSeriesScreen />} />
      <Route path="/instructionPage/:id" element={<InstructionsPage />} />
      <Route path="/exam/:id" element={<ExaminationScreen />} />

      {/* Miscellaneous Routes */}
      <Route path="/helpSupport" element={<HelpSupportScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
      <Route path="/notification" element={<NotificationScreen />} />
      {/* <Route path="/ticket" element={<TicketScreen />} /> */}

    </Routes>
  );
}

export default App;
