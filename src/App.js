import "./App.css";
import LandingPage from "./containers/LandingPage/index.jsx";
import HomePage from "./containers/HomePage/home.jsx";
import AboutPage from "./containers/HomePage/About.jsx";
import GuestPage from "./containers/HomePage/Guest.jsx";
import UserPage from "./containers/HomePage/UserAgree.jsx";
import Selection from "./containers/Register/Selection";
import Student from "./containers/Register/Student/Student";
import ClickHere from "./containers/Register/Mentor/ClickHere";
import Mentor from "./containers/Register/Mentor/Mentor";
import RegistrationMentor from "./containers/Register/Mentor/Registration";
import ForgotPass from "./containers/HomePage/Forgot";
import MainStudent from "./containers/MainPage/StudentUI/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/guest" element={<GuestPage />} />
        <Route path="/userAgree" element={<UserPage />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/student" element={<Student />} />
        <Route path="/clickHere" element={<ClickHere />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/registrationMentor" element={<RegistrationMentor />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/MainStudent" element={<MainStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
