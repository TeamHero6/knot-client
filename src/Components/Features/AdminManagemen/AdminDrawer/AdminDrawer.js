import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";

const AdminDrawer = () => {
    const [openDropDown, setOpenDropDown] = useState(false);
    return (
        <div className="flex justify-center p-2 border-r-[0.5px] min-h-screen">
            <div>
                <div className=" flex bg-white w-full items-center border-[0.7px] px-3 rounded-md">
                    <button onClick={() => setOpenDropDown(!openDropDown)}>
                        Daily Task
                    </button>
                    {openDropDown ? (
                        <AiOutlineArrowUp />
                    ) : (
                        <AiOutlineArrowDown />
                    )}
                </div>
                <div
                    className={`${
                        openDropDown ? "flex translate-y-2" : "hidden"
                    } flex-col justify-center items-center mt-1 bg-cyan-400 rounded text-white duration-500 transition transform -translate-y-1`}
                >
                    <p>
                        <Link to="/admin" className="hover:border-b-[0.5px]">
                            Add Task
                        </Link>
                    </p>
                    <p>
                        <Link to="Demo" className="hover:border-b-[0.5px]">
                            Demo
                        </Link>
                    </p>
                    <p>
                        <Link to="Demo" className="hover:border-b-[0.5px]">
                            Demo
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminDrawer;
