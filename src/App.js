import "antd/dist/antd.less";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/AdditionalLinkPages/Blog/Blog";
import AccountManagement from "./Components/AdditionalLinkPages/FAQ/AccountManagement/AccountManagement";
import Faq from "./Components/AdditionalLinkPages/FAQ/Faq";
import RulesAndPolitics from "./Components/AdditionalLinkPages/FAQ/RulesAndPolitics/RulesAndPolitics";
import SafetyAndSecurity from "./Components/AdditionalLinkPages/FAQ/SafetyAndSecurity/SafetyAndSecurity";
import About from "./Components/Pages/About/About";
import AccessYourApps from "./Components/Pages/AccessYourApps/AccessYourApps";
import Login from "./Components/Pages/Authentications/Login/Login";
import RequireAuth from "./Components/Pages/Authentications/RequireAuth/RequireAuth";
import Signup from "./Components/Pages/Authentications/Signup/Signup";
import Home from "./Components/Pages/Home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Hrdashboard from "./Components/Pages/Hrdashboard/Hrdashboard";
import UserDashboard from "./Components/Pages/UserDashboard/UserDashboard";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/hrdashboard" element={<Hrdashboard />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/userdashboard" element={<UserDashboard />} />
                <Route path="/accessApps" element={<AccessYourApps />} />
                <Route
                    path="/FAQ"
                    element={
                        <RequireAuth>
                            <Faq />
                        </RequireAuth>
                    }
                >
                    <Route index element={<AccountManagement />} />
                    <Route
                        path="safetyandsecuirity"
                        element={<SafetyAndSecurity />}
                    />
                    <Route
                        path="rules&politics"
                        element={<RulesAndPolitics />}
                    />
                </Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
