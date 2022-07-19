import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import AllKnotApp from "./AllKnotApp/AllKnotApp";
import Header from "./Header.js/Header";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AllKnotApp />
        </div>
    );
};

export default Home;
