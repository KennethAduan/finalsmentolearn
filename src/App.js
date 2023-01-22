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
// import NewsFeed from "./containers/MainPage/StudentUI/NewsFeed";
import Dashboard from "./containers/MainPage/StudentUI/Dashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from "./components/Student_UI/Dashboard_UI/Task";
import SideBar from "./components/Student_UI/SideBar";
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
        <Route path="/News Feed" element={<MainStudent />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Sidebar" element={<SideBar />} />
        <Route path="/Task" element={<Task />} />
        <Route Path="/Sign out" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
