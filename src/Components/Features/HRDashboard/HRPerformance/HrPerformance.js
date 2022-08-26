import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSave, AiOutlineEye } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import HRPerformanceData from "./HRPerformanceData";
// import profile from "../../../Assets/icons/Live-chat-icon/profile_user.png";

const HrPerformance = () => {
    const { register, handleSubmit, reset } = useForm();
    const [promo, setPromo] = useState([]);
    const [show, setShow] = useState(false);
    const [showTransfer, setShowTransfer] = useState(false);
    const [modal, setmodal] = useState({});
    const [transfer, setTransfer] = useState([]);


//     useEffect(() => {
//         fetch("https://knot-business-solution-server.herokuapp.com/transfer")
//             .then((res) => res.json())
//             .then((data) => setTransfer(data));
//     }, [transfer]);
// // console.log(transfer);

//     useEffect(() => {
//         fetch("https://knot-business-solution-server.herokuapp.com/performance")
//             .then((res) => res.json())
//             .then((data) => setPromo(data));
//     }, [promo]);
//     // console.log(promo);

    const onSubmit = (data) => {
        fetch(
            "https://knot-business-solution-server.herokuapp.com/performance",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((res) => res.json())
            .then((inserted) => {
                if (inserted.insertedId) {
                    reset();
                    toast.success("Save change");
                }
            });
    };


    const onSubmitTransfer = (data) => {
        fetch("http://localhost:5000/transfer", {
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
                    toast.success("Save change");
                }
            });
    };
    return (
        <div className="ml-5">
            <div className="flex gap-5">
                <div>
                    <button
                        onClick={() => setShow(!show)}
                        className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                    >
                        <IoIosAddCircleOutline className="text-2xl" />
                        Promotion
                    </button>{" "}
                </div>

                <div>
                    <button
                        onClick={() => setShowTransfer(!showTransfer)}
                        className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                    >
                        <IoIosAddCircleOutline className="text-2xl" />
                        Transfer
                    </button>{" "}
                </div>
            </div>
            {show ? (


                <div className="mt-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className="md:w-3/6 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
                            <label
                                className="font-bold text-purple-800"
                                htmlFor="name"
                            >
                                Employee Info
                            </label>{" "}
                            <br />
                            <br />

                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    Date :{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-1 pl-3 w-5/6 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                    type="date"
                                    {...register("Promotion_Date")}
                                    id=""
                                    placeholder="Promotion_Date"
                                />
                                <br />
                            </div>
                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    Name :{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Name")}
                                    id=""
                                    placeholder="Employee Name"
                                />
                                <br />
                            </div>
                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    Department :{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Department")}
                                    id=""
                                    placeholder="Department"
                                />
                                <br />
                            </div>
                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    Designation :{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Designation")}
                                    id=""
                                    placeholder="Designation"
                                />
                                <br />
                            </div>
                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    Increment:{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="number"
                                    {...register("Increment_Salary")}
                                    id=""
                                    placeholder="Increment Salary"
                                />
                                <br />
                            </div>
                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    Employee ID :{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Employee_ID")}
                                    id=""
                                    placeholder="Employee ID"
                                />
                                <br />
                            </div>
                            <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                >
                                    <AiFillSave />
                                    Save
                                </button>{" "}
                                <br />
                            </div>
                        </section>
                    </form>
                </div>
            ) : (
                ""
            )}

            {/* Transfer Form */}
            {showTransfer ? (
                <div className="mt-6">
                    <form onSubmit={handleSubmit(onSubmitTransfer)}>
                        <section className="md:w-3/6 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
                            <label
                                className="font-bold text-purple-800"
                                htmlFor="name"
                            >
                                 Transfer Info
                            </label>{" "}
                            <br />
                            <br />

                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    Name :{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Name")}
                                    id=""
                                    placeholder="Employee Name"
                                />
                                <br />
                            </div>
                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    Employee Id :{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Employee_ID")}
                                    id=""
                                    placeholder="Employee ID"
                                />
                                <br />
                            </div>
                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    Department :{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Department")}
                                    id=""
                                    placeholder="Department"
                                />
                                <br />
                            </div>
                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    New Location :{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Location")}
                                    id=""
                                    placeholder="New Office Location"
                                />
                                <br />
                            </div>
                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    Team Leader:{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Team_Leader")}
                                    id=""
                                    placeholder="New Team Leader"
                                />
                                <br />
                            </div>
                            <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                >
                                    <AiFillSave />
                                    Save
                                </button>{" "}
                                <br />
                            </div>
                        </section>
                    </form>
                </div>
            ) : (
                ""
            )}
                <HRPerformanceData/>
        </div>
    );
};

export default HrPerformance;
