import React, { lazy } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import AccessibleAnywhere from "./AccessibleAnywhere/AccessibleAnywhere";
import Client from "./Client/Client";
import Newsletter from "./Newsletter/Newsletter";
const Header = lazy(() => import("./Header.js/Header"));
const Promotion = lazy(() => import("./Promotion/Promotion"));
const Footer = lazy(() => import("../../Shared/Footer/Footer"));

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Promotion />
            <AccessibleAnywhere />
            <Client />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
