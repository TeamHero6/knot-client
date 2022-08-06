import React, { useState } from "react";
import ExNavbar from "./ExNavbar";

const ExDashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-screen bg-custom-gray">
            <span
                className="absolute block lg:hidden bottom-6 bg-custom-light-gray p-3 hover:bg-custom-green hover:text-custom-light-gray duration-300 shadow-sm rounded-full right-3 hover:shadow-lg"
                onClick={() => setOpen(!open)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-expand"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
                    />
                </svg>
            </span>
            <ExNavbar />
            <div
                className={`bg-custom-light-gray md:w-64 min-h-screen shadow-md flex justify-center ${
                    open ? "w-9/12 " : "hidden lg:flex "
                }`}
            >
                <div>
                    <p className="flex my-4 hover:text-custom-green duration-300 transition cursor-pointer">
                        Daily Task
                    </p>
                    <p className="flex my-4 hover:text-custom-green duration-300 transition cursor-pointer">
                        Add Task
                    </p>
                    <p className="flex my-4 hover:text-custom-green duration-300 transition cursor-pointer">
                        Team Management
                    </p>
                    <p className="flex my-4 hover:text-custom-green duration-300 transition cursor-pointer">
                        Team Organize
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExDashboard;
