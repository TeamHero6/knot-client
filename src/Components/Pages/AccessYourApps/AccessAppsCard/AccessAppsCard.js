import React from "react";
import { useNavigate } from "react-router-dom";

const AccessAppsCard = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div
            className="mx-auto text-center text-gray-400 hover:text-gray-500 hover:shadow-xl p-3 hover:bg-white rounded-xl duration-500"
            onClick={() => navigate(`${product.link}`)}
        >
            <img src={product.icon} className={"w-32"} alt="" />
            <small className="">{product.name}</small>
        </div>
    );
};

export default AccessAppsCard;
