import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar'
import Login from './Pages/Login/Login'
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/appointment" element={<Appointment/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
