import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ExaminationScreen from "./pages/ExaminationScreen";
import Dashboard from "./screen/Dashboard";
import QuestionBankScreen from "./screen/QuestionBank";
import AddQuestionScreen from "./screen/AddQuestion";
import CoursesScreen from "./screen/Courses";
import CourseDetails from "./components/dashboard/CourseDetails";
import LecturePage from "./components/dashboard/LecturePage";
// import Home from "./pages/Home";
// import InstructionsPage from "./pages/Instruction";
// import Slider from "./components/Slider";
// import ComingSoon from "./pages/ComingSoon";
// import TermsPage from "./pages/Term";
// import InstructionScreen from "./pages/InstructionPop";
// import { InstructionPopup } from "./components/InstructionPopup";

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
      <Route path="/" element={<Dashboard />} />
      <Route path="/exam" element={<ExaminationScreen />} />
      <Route path="/questionBank" element={<QuestionBankScreen />} />
      <Route path="/courses" element={<CoursesScreen />} />
      <Route path="/addQuestion" element={<AddQuestionScreen />} />
      <Route path="/courseDetails" element={<CourseDetails />} />
      <Route path="/lecture" element={<LecturePage />} />
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
