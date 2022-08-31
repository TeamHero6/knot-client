import React from 'react';
import logo from "../../../Assets/logo/KnotLogo.png";
import { Link } from 'react-router-dom';

const MorePagesNavBar = () => {
    return (
        <div>
            <div className="flex justify-between items-center py-3 md:px-8 lg:px-12 bg-cyan-400">
                <div>
                    <Link to='/'>
                        <img
                            src={logo}
                            className="w-20 p-1 md:w-20 md:p-2"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <Link
                        to="/contactus"
                        className="text-gray-200 border-2 border-gray-200 px-3 py-1 rounded-full mx-2 hover:bg-white duration-300 hover:border-white outline-none hover:text-cyan-400"
                    >
                        Contact us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MorePagesNavBar;