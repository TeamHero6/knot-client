import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import adminLogo from "../../../Assets/homepageFeaturedAppIcon/team.png";
import dashboard from "../../../Assets/homepageFeaturedAppIcon/dashboards.png";
import hr from "../../../Assets/homepageFeaturedAppIcon/hr.png";
import finance from "../../../Assets/homepageFeaturedAppIcon/financeManagement.svg";
import chat from "../../../Assets/homepageFeaturedAppIcon/chat.png";
import marketing from "../../../Assets/homepageFeaturedAppIcon/digital-marketing.png";
import sales from "../../../Assets/homepageFeaturedAppIcon/sales.png";
import logo from "../../../Assets/logo/KnotLogo.png";
import AccessAppsCard from "./AccessAppsCard/AccessAppsCard";

const AccessYourApps = () => {
    const [filterResult, setFilterResult] = useState([]);

    const products = [
        {
            id: 1,
            name: "Team Management",
            link: "/teamManagement",
            icon: adminLogo,
        },
        {
            id: 2,
            name: "Human Resource",
            link: "/hrdashboard",
            icon: hr,
        },
        {
            id: 3,
            name: "Finance",
            link: "/financeTS",
            icon: finance,
        },
        {
            id: 4,
            name: "Sales",
            link: "/salesTS",
            icon: sales,
        },
        {
            id: 5,
            name: "Marketing",
            link: "/marketingTS",
            icon: marketing,
        },
        {
            id: 6,
            name: "UserDashboard",
            link: "/userDashboard",
            icon: dashboard,
        },
        {
            id: 7,
            name: "Live Chat",
            link: "/chat",
            icon: chat,
        },
    ];
    useEffect(() => {
        setFilterResult(products);
    }, []);

    const handleFilter = (e) => {
        const searchTerm = e.target.value;
        if (searchTerm < 0) {
            setFilterResult(products);
        } else {
            const regex = new RegExp(`${searchTerm}`, "gi");
            const matchs = products.filter((product) => {
                if (product.name.match(regex)) {
                    return product;
                }
            });
            setFilterResult(matchs);
        }
    };

    const navigate = useNavigate();
    return (
        <div className="min-h-screen">
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
                    onChange={handleFilter}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:w-2/3 mx-auto mt-4">
                {filterResult
                    ? filterResult?.map((product) => (
                        <AccessAppsCard {...{ product }} />
                    ))
                    : products?.map((product) => (
                        <AccessAppsCard {...{ product }} />
                    ))}
            </div>
        </div>
    );
};

export default AccessYourApps;