import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AllKnotApp from "./AllKnotApp/AllKnotApp";
import Client from "./Client/Client";
import Header from "./Header.js/Header";
import Newsletter from "./Newsletter/Newsletter";
import Promotion from "./Promotion/Promotion";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Promotion />
            <AllKnotApp />
            <Client />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
