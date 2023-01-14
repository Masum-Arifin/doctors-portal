import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import Signup from "./Pages/Login/Signup";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";

function App() {
  return (
    <div className=" mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              {" "}
              <Appointment />
            </RequireAuth>
          }
        >
          {" "}
        </Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              {" "}
              <Dashboard />
            </RequireAuth>
          }
        >
        <Route index element={<MyAppointments></MyAppointments>}></Route>  
        <Route path="review" element={<MyReview></MyReview>}></Route>  
          {" "}
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
