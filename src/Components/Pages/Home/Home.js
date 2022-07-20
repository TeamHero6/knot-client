import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import AllKnotApp from "./AllKnotApp/AllKnotApp";
import Header from "./Header.js/Header";
import Promotion from "./Promotion/Promotion";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Promotion />
            <AllKnotApp />
        </div>
    );
};

export default Home;
