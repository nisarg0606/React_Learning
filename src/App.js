// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { UserApi } from "./api/UserApi";
import { Home } from "./components/Home";
import { DashBoard } from "./components/DashBoard";
import { UserFetch } from "./api/query/UserFetch";
import { UpdateUser } from "./api/query/UpdateUser";
import { UserAdd } from "./api/query/UserAdd";
import { ButtonExample } from "./mui/ButtonExample";
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
        <Route path="/usequery/users" element={<UserFetch />} />
        <Route path="/usequery/updateuser/:id" element={<UpdateUser />} />
        <Route path="/usequery/adduser" element={<UserAdd />} />
        <Route path="/mui" element={<ButtonExample/>} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
