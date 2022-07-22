import "antd/dist/antd.less";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Authentications/Login/Login";
import Home from "./Components/Pages/Home/Home";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
