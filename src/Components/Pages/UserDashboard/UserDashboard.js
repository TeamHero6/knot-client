<<<<<<< HEAD
import React, {  useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserNavbar from '../../Shared/UserNavbar/UserNavbar';

const UserDashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-screen bg-custom-gray">
            <span
                className="fixed block lg:hidden bottom-6 bg-custom-light-gray p-3 hover:bg-custom-green hover:text-custom-light-gray duration-300 shadow-sm rounded-full right-3 hover:shadow-lg"
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
            <UserNavbar />
            <section className="flex w-full">
                <div
                    className={`bg-[#FFFFFF] md:w-2/12 duration-300 min-h-screen shadow-md justify-center 
                ease-in-out ${open ? "w-9/12" : "hidden md:flex"}`}
                >
                    <div>
                        <Link
                            to="/userdashboard"
                            className="flex my-4 bg-custom-gray duration-300 px-6 py-2 transition cursor-pointer rounded hover:bg-custom-cyan-100 "
                        >
                            <p>Dashboard</p>
                        </Link>
                        <Link
                            to="attendance"
                            className="flex bg-custom-gray my-4 px-6 py-2 duration-300 transition cursor-pointer rounded hover:bg-custom-cyan-100"
                        >
                            Attendance
                        </Link>
                        <Link
                            to="performance"
                            className="flex bg-custom-gray my-4 px-6 py-2 duration-300 transition cursor-pointer rounded hover:bg-custom-cyan-100"
                        >
                            Performance
                        </Link>
                        <Link
                            to="Payrolls"
                            className="flex bg-custom-gray my-4 px-6 py-2 duration-300 transition cursor-pointer rounded hover:bg-custom-cyan-100"
                        >
                            Payrolls
                        </Link>

=======
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiPlus } from "react-icons/bi";
import { FaSave } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import UserNavbar from "../../Shared/UserNavbar/UserNavbar";

const UserDashboard = () => {
    const { register, handleSubmit, reset } = useForm();
    const [leave, setleave] = useState([]);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/user")
            .then((res) => res.json())
            .then((data) => setleave(data));
    }, []);
    const onSubmit = (data) => {
        fetch("https://knot-business-solution-server.herokuapp.com/user", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((inserted) => {
                if (inserted.insertedId) {
                    reset();
                    toast.success("Add succesfully");
                }
            });
    };

    return (
        <div>
            <UserNavbar></UserNavbar>
            <div class="drawer drawer-mobile">
                <input
                    id="dashboard-sidebar"
                    type="checkbox"
                    class="drawer-toggle"
                />
                <div class="drawer-content">
                    <label
                        for="my-drawer"
                        class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none"
                    >
                        <span>
                            <BiPlus></BiPlus>
                        </span>
                        <span className="capitalize"> New</span>
                    </label>
                    <h1 className="text-[#0182be] ml-3 my-3 text-xl">
                        Employee Details :
                    </h1>
                    <div className="ml-3 ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2">
                                {/* ff */}
                                <div>
                                    <div className="flex items-center">
                                        <label className="label w-48">
                                            <span className="label-text text-xl">
                                                Employees Name:
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Name")}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <label className="label w-48">
                                            <span className="label-text text-xl">
                                                Employees ID:
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("id")}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <label className="label w-48">
                                            <span className="label-text text-xl">
                                                Designation:
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Designation")}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <label className="label w-48">
                                            <span className="label-text text-xl">
                                                Reason For Leave:
                                            </span>
                                        </label>
                                        <textarea
                                            type="text"
                                            className=" w-64 h-20 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("leave")}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <label className="label w-48">
                                            <span className="label-text text-xl">
                                                Type Of Leave:
                                            </span>
                                        </label>

                                        <div className="mt-5">
                                            <input
                                                {...register("leave_type")}
                                                type="checkbox"
                                                value="Casual leave"
                                            />
                                            <span className="px-3  text-xl">
                                                Casual leave
                                            </span>
                                            <br />
                                            <input
                                                {...register("leave_type")}
                                                type="checkbox"
                                                value="Sick leave"
                                            />
                                            <span className="px-3  text-xl">
                                                Sick leave
                                            </span>
                                            <br />
                                            <input
                                                {...register("leave_type")}
                                                type="checkbox"
                                                value="Annual leave"
                                            />
                                            <span className="px-3  text-xl">
                                                Annual leave
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* ff */}
                                <div>
                                    <div className="flex items-center">
                                        <label className="label w-48">
                                            <span className="label-text text-xl">
                                                Depertment Name:
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("dep")}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <label className="label w-48">
                                            <span className="label-text text-xl">
                                                Depertment Id:
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("dep_id")}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <label className="label w-48">
                                            <span className="label-text text-xl">
                                                Leave Request Date:
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("leave_date")}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <label className="label w-48">
                                            <span className="label-text text-xl">
                                                End Date:
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("e_date")}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center bg-[#EEEEEE]  w-24 p-2 rounded-lg mx-auto border-solid border border-[#0182be] mt-5">
                                <FaSave></FaSave>
                                <input
                                    className="pl-2 font-medium"
                                    type="submit"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="px-5">
                        <h1 className="text-2xl text-center font-bold my-5">
                            Request Status
                        </h1>
                        <div class="overflow-x-auto">
                            <table class="table table-compact w-full">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Dept</th>
                                        <th>Designation</th>
                                        <th>Type Of Leave</th>
                                        <th>View Details</th>
                                        <th>Leave Request Date</th>
                                        <th>
                                            Approval Status <br />
                                            (HR+TeamLeader){" "}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leave.map((le) => (
                                        <tr>
                                            <th>{le.e_date}</th>
                                            <td>{le.id}</td>
                                            <td>{le.Name}</td>
                                            <td>{le.dep}</td>
                                            <td>{le.Designation}</td>
                                            <td>{le.leave_type}</td>
                                            <td>{le.leave}</td>
                                            <td>{le.leave_date}</td>
                                            <td>APPROVAL</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
>>>>>>> 88606e86582b97aa66f1228b0bec652f645cb951
                    </div>
                </div>
<<<<<<< HEAD
                <div className="mx-auto overflow-auto">
                    <Outlet />
=======
                <div class="drawer-side">
                    <label
                        for="dashboard-sidebar"
                        class="drawer-overlay"
                    ></label>
                    <ul class="menu p-4 overflow-y-auto w-52 text-base-content gray">
                        <li>
                            <Link className="" to="/userdashboard">
                                Leave Request
                            </Link>
                        </li>
                    </ul>
>>>>>>> 88606e86582b97aa66f1228b0bec652f645cb951
                </div>
            </section>
        </div>
    );
};

export default UserDashboard;