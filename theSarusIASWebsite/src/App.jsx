import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
// import Slider from "./components/Slider";
import Home from "./pages/Home";
import ExaminationScreen from "./pages/ExaminationScreen";
import InstructionsPage from "./pages/Instruction";
import TermsPage from "./pages/Term";
import InstructionScreen from "./pages/InstructionPop";
// import { InstructionPopup } from "./components/InstructionPopup";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="/slider" element={<Slider />} /> */}
      <Route exact path="/instructionPop" element={<InstructionScreen />} />
      <Route exact path="/instructionPage" element={<InstructionsPage />} />
      {/* <Route exact path="/" element={<InstructionPopup />} /> */}
      <Route exact path="/terms" element={<TermsPage />} />
      <Route exact path="/exam" element={<ExaminationScreen />} />
      <Route exact path="/comingSoon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
