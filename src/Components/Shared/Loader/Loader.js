import React from "react";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../../Assets/logo/KnotLogo.png";

const Loader = ({ children }) => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img src={logo} className="w-24 mr-3" alt="" />
                <ThreeDots
                    height="40"
                    width="40"
                    radius="9"
                    color="gray"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        </div>
    );
};

export default Loader;
