import React from "react";

const Notification = () => {
    return (
        <div className="hidden md:block fixed top-[70px] right-28 ring-1 ring-gray-900/5 bg-white shadow-xl sm:max-w-sm md:max-w-[500px] py-4 px-4 rounded-md max:h-[400px]">
            <ul>
                <li className="flex items-center">
                    <svg
                        class="h-6 w-6 flex-none fill-sky-100 stroke-gray-400 stroke-2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="12" cy="12" r="11" />
                        <path
                            d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                            fill="none"
                        />
                    </svg>
                    <p class="ml-4">Customizing your file </p>
                </li>
            </ul>
        </div>
    );
};

export default Notification;
