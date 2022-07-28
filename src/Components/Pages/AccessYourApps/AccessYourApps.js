import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import financeIcon from "../../../Assets/icons/financereport.png";
import marketingIcon from "../../../Assets/icons/marketing-automation.png";
import salesTSLogo from "../../../Assets/icons/sales2.png";
import background from "../../../Assets/images/networkMash.jpg";
import logo from "../../../Assets/logo/KnotLogo.png";
import AccessAppsCard from "./AccessAppsCard/AccessAppsCard";

const AccessYourApps = () => {
    const products = [
        { id: 1, name: "Sales", link: "/salesTS", icon: salesTSLogo },
        { id: 2, name: "Marketing", link: "/marketingTS", icon: marketingIcon },
        { id: 2, name: "Finance", link: "/financeTS", icon: financeIcon },
        { id: 1, name: "Sales", link: "/salesTS", icon: salesTSLogo },
        { id: 2, name: "Marketing", link: "/marketingTS", icon: marketingIcon },
        { id: 2, name: "Finance", link: "/financeTS", icon: financeIcon },
    ];
    const navigate = useNavigate();
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="min-h-screen"
        >
            <div className="flex relative justify-end md:justify-center items-center h-10 border-[0.5px] border-gray-400">
                <img
                    src={logo}
                    className="w-12 absolute left-4"
                    alt=""
                    onClick={() => navigate("/")}
                />
                <FaSearch className="mr-4 text-gray-400 hover:text-cyan-400 duration-300 " />
                <input
                    type="text"
                    name="search"
                    className="h-full outline-none cursor-pointer text-gray-400 bg-transparent"
                    placeholder="Search"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:w-2/3 mx-auto mt-4">
                {products.map((product) => (
                    <AccessAppsCard {...{ product }} />
                ))}
            </div>
        </div>
    );
};

export default AccessYourApps;