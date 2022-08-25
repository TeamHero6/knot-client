import React, { lazy, Suspense } from "react";
const Navbar = lazy(() => import("../../Shared/Navbar/Navbar"));
const Header = lazy(() => import("./Header.js/Header"));
const Promotion = lazy(() => import("./Promotion/Promotion"));
const AllKnotApp = lazy(() => import("./AllKnotApp/AllKnotApp"));
const Intro = lazy(() => import("./Intro"));
const Footer = lazy(() => import("../../Shared/Footer/Footer"));
const Loader = lazy(() => import("../../Shared/Loader/Loader"));

const Home = () => {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <Header />
                <Promotion />
                <AllKnotApp />
                <Intro />
                <Footer />
            </Suspense>
        </div>
    );
};

export default Home;
