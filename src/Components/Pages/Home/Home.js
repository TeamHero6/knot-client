import React, { lazy } from "react";
import AccessibleAnywhere from "./AccessibleAnywhere/AccessibleAnywhere";
import Client from "./Client/Client";
import Newsletter from "./Newsletter/Newsletter";
const Navbar = lazy(() => import("../../Shared/Navbar/Navbar"));
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
