import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
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
                    <div className="border-b-2 text-white border-white flex items-center rounded-full h-[50px] px-12 mt-32 md:mt-0">
                        <input
                            type="text"
                            name="faq"
                            id=""
                            className="bg-transparent flex-1 w-full outline-none text-white"
                            placeholder="Search"
                        />{" "}
                        <button>
                            <FaSearch className="text-white" />
                        </button>
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
                <div>
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default Faq;
