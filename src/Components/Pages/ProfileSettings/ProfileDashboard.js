import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const ProfileDashboard = () => {
    const authInfo = useSelector((state) => state.auth);
    const { role } = authInfo?.loggerInfo;
    return (
        <div className="bg-custom-gray min-h-screen">
            <Navbar />
            <section>
                <section className="flex justify-center my-6">
                    <div className="max-w-[564px] w-full bg-white shadow-xl mb-3 rounded-md text-center flex justify-between">
                        <NavLink
                            to="profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-cyan-400 text-white cursor-pointer p-3 text-center flex-1 hover:bg-cyan-400 rounded-tl-md rounded-bl-md flex flex-col items-center"
                                    : "cursor-pointer p-3 text-center flex-1 hover:bg-cyan-400 rounded-tl-md rounded-bl-md flex flex-col items-center transition duration-300"
                            }
                        >
                            <section>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        fill="currentColor"
                                        className="bi bi-person"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                </div>
                                Profile
                            </section>
                        </NavLink>
                        <NavLink
                            to="companySettings"
                            className={({ isActive }) =>
                                isActive
                                    ? `bg-cyan-400 text-white cursor-pointer p-3 text-center flex-1 hover:bg-cyan-400 rounded-tr-md rounded-br-md flex flex-col items-center ${
                                          role === "employee" && "hidden"
                                      }`
                                    : `cursor-pointer p-3 text-center flex-1 hover:bg-cyan-400 rounded-tr-md rounded-br-md flex flex-col items-center transition duration-300 ${
                                          role === "employee" && "hidden"
                                      }`
                            }
                        >
                            <div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        fill="currentColor"
                                        className="bi bi-building"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                                        />
                                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                                    </svg>
                                </div>
                                Company
                            </div>
                        </NavLink>
                    </div>
                </section>
                <Outlet />
            </section>
        </div>
    );
};

export default ProfileDashboard;
