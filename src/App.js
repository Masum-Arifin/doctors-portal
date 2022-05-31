import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar'
import Login from './Pages/Login/Login'

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
