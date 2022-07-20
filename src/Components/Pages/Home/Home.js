import React from "react";
import Footer from "../../Shared/Footer/Footer";

import Navbar from "../../Shared/Navbar/Navbar";
import AllKnotApp from "./AllKnotApp/AllKnotApp";
import Header from "./Header.js/Header";
import Promotion from "./Promotion/Promotion";
import Intro from "./Intro";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Promotion />
            <AllKnotApp />
            <Intro />
            <Footer />
        </div>
    );
};

export default Home;
