import "antd/dist/antd.less";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Authentications/Login/Login";
import Signup from "./Components/Pages/Authentications/Signup/Signup";
import Home from "./Components/Pages/Home/Home";
import Hrdashboard from "./Components/Pages/Hrdashboard/Hrdashboard";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/hrdashboard" element={<Hrdashboard />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
