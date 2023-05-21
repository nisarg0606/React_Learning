// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { UserApi } from "./api/UserApi";
import { Home } from "./components/Home";
import { DashBoard } from "./components/DashBoard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/users" element={<UserApi />} />
      </Routes>
    </div>
  );
}

export default App;
