// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InstructionsPage from "./pages/Instruction";
import ExaminationScreen from "./pages/ExaminationScreen";
// import Slider from "./components/Slider";
// import ComingSoon from "./pages/ComingSoon";
// import TermsPage from "./pages/Term";
// import InstructionScreen from "./pages/InstructionPop";
// import { InstructionPopup } from "./components/InstructionPopup";

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   document.querySelector("html").style.scrollBehavior = "auto";
  //   window.scroll({ top: 0 });
  //   document.querySelector("html").style.scrollBehavior = "";
  // }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instructionPage" element={<InstructionsPage />} />
      <Route path="/exam" element={<ExaminationScreen />} />
      {/* <Route path="/slider" element={<Slider />} /> */}
      {/* <Route path="/instructionPop" element={<InstructionScreen />} />
      {/* <Route path="/" element={<InstructionPopup />} /> */}
      {/* <Route path="/terms" element={<TermsPage />} />
      <Route path="/comingSoon" element={<ComingSoon />} /> */}
    </Routes>
  );
}

export default App;
