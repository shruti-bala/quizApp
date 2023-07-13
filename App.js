import "./App.css";
import Login from "./components/Login/Login.js";
// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDash from "./components/Dashboard/StudentDash";
import Profile from "./components/Profile/Profile";
import Course from "./components/CoursesPage/Courses";
import MentorDash from "./components/Dashboard/MentorDash.js";
import MentorviewQ from "./components/Dashboard/mentorviewQ";
import MentorQ from "./components/Dashboard/MentorQ";
import Signup from "./components/Login/SignupTest";
import MentoreditQ from "./components/Dashboard/mentorEditQ";
import Studentqueries from "./components/Dashboard/Studentqueries";
import Studentprogress from "./components/Dashboard/Studentprogress"
import Coursedesc from "./components/CoursesPage/coursedesc";
import Mentorprofile from "./components/Profile/mentorprofile";
import AdminDash from "./components/Admin/AdminDash";
import Cart from "./components/cart/cart";
import NotificationsList from "./components/appnotifications/appnotif";
import Manalytics from "./components/Dashboard/Manalytics";
import Mnotifications from "./components/Dashboard/Mnotifications";
import Aanalytics from "./components/Admin/Aanalytics";
import Anotifications from "./components/Admin/Anotifications";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/StudentDashboard" element={<StudentDash />} />
          <Route path="/AdminDash" element= {<AdminDash />} />
          <Route path="/StudentProfile" element={<Profile />} />
          <Route path="/coursePage" element={<Course />} />
          <Route path="/SignupTest" element={<Signup />} />
          <Route path="/MentorDash" element={<MentorDash />} />
          <Route path="/MentorQ" element={<MentorQ />}/>
          <Route path="/MentorviewQ" element={<MentorviewQ />}/>
          <Route path="/MentoreditQ" element={<MentoreditQ/>}></Route>
          <Route path ="/Studentqueries" element={<Studentqueries/>}></Route>
          <Route path ="/Studentprogress" element={<Studentprogress/>}></Route>
          <Route path ="/Coursedesc" element={<Coursedesc/>}></Route>
          <Route path ="/Mentorprofile" element={<Mentorprofile/>}></Route>
          <Route path ="/Cart" element={<Cart/>}></Route>
          <Route path ="/NotificationsList" element={<NotificationsList/>}></Route>
          <Route path="/Manalytics" element={<Manalytics />} />
          <Route path="/Mnotifications" element={<Mnotifications />} />
          <Route path="/Aanalytics" element={<Aanalytics />} />
          <Route path="/Anotifications" element={<Anotifications />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
