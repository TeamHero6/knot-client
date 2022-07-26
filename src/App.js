import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Leave from "./Components/Pages/Leave/Leave";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/leave" element={<Leave></Leave>}></Route>
            </Routes>
        </div>
    );
}

export default App;
