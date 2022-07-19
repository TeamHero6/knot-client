import React from "react";
import Footer from "../../Shared/Footer/Footer";

import Navbar from "../../Shared/Navbar/Navbar";
import Header from "./Header.js/Header";
import Intro from "./Intro";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Intro />
            <Footer />
        </div>
    );
};

export default Home;
