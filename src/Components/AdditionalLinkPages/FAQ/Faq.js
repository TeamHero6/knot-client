import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import FAQNavbar from "./FAQNavbar/FAQNavbar";

const Faq = () => {
    const [userName, setUsername] = useState("");
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    useEffect(() => {
        if (loggerInfo !== null) {
            const { name } = loggerInfo;
            setUsername(name);
        }
    }, [loggerInfo]);

    return (
        <div>
            <div>
                <FAQNavbar />
                <section className=" md:flex md:justify-between py-28 px-8 lg:px-12 bg-cyan-400">
                    <div>
                        <h1 className="text-4xl font-semibold">
                            Hi{" "}
                            <span className="text-white">
                                {userName ? userName : "Dear"}
                            </span>
                            , <br />
                            How can we help?
                        </h1>
                    </div>
                </section>
            </div>{" "}
            {/*FAQ Header*/}
            {/* //Dashboard */}
            <section className="w-full flex my-12">
                <div className="text-gray-500 w-1/3 text-center">
                    <Link to="/FAQ">
                        <p>Account</p>
                    </Link>
                    <Link to="safetyandsecuirity">
                        <p>Safety and security</p>
                    </Link>
                    <Link to="rules&politics">
                        <p>Rules and politics</p>
                    </Link>
                </div>
                <div className="w-full overflow-hidden hover:overflow-x-auto">
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default Faq;
