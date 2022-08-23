import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { AiFillSave } from "react-icons/ai";
import { toast } from "react-toastify";
import Hrtable from "./Hrtable";

const Hrdetails = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        fetch(
            "https://knot-business-solution-server.herokuapp.com/employeedetails",
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
                    toast.success("add Employee Details");
                }
            });
    };
    return (
        <div>
            <button
                onClick={() => setShow(!show)}
                class="flex  border-transparent items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover: shadow-blue-300 hover: shadow-sm"
            >
                {" "}
                + New
            </button>
            <div className="mt-5">
                {show ? (
                    <div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ width: "1000px" }}
                        >
                            <section className="lg:w-11/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto">
                                <h2 className="text-blue-900 my-3 text-xl font-medium">
                                    Employee Details
                                </h2>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Employee_Name")}
                                        id=""
                                        placeholder="Employee Name"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Report_Person")}
                                        id=""
                                        placeholder="Report Person"
                                    />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="number"
                                        {...register("Employee_id")}
                                        id=""
                                        placeholder="Employee Id"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Department")}
                                        id=""
                                        placeholder="Department"
                                    />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Blood_Group")}
                                        id=""
                                        placeholder="Blood Group"
                                    />

                                    <input
                                        className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="email"
                                        {...register("Company_Email")}
                                        id=""
                                        placeholder="Company Email"
                                    />
                                </div>

                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="date"
                                        {...register("Joining_Date")}
                                        id=""
                                        placeholder="Joining Date"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="number"
                                        {...register("Salary")}
                                        id=""
                                        placeholder="Salary"
                                    />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="number"
                                        {...register("phone")}
                                        id=""
                                        placeholder="Phone"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="email"
                                        {...register("Email")}
                                        id=""
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <textarea
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Address")}
                                        id=""
                                        placeholder="Address"
                                    />
                                    <input
                                        className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Designation")}
                                        id=""
                                        placeholder="Designation"
                                    />
                                </div>
                                <h2 className="text-blue-900 my-3 text-xl font-medium">
                                    Emergency Contact
                                </h2>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("contuct_Name")}
                                        id=""
                                        placeholder="Name"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("c_phone")}
                                        id=""
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <textarea
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("C_Address")}
                                        id=""
                                        placeholder="Address"
                                    />
                                    <input
                                        className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Relation")}
                                        id=""
                                        placeholder="Relation"
                                    />
                                </div>

                                <div className="lg:flex justify-between md:flex pt-2 w-28 mx-auto">
                                    <button
                                        className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                        type="subimt"
                                    >
                                        <AiFillSave />
                                        Save
                                    </button>
                                </div>
                            </section>
                        </form>
                    </div>
                ) : (
                    ""
                )}
                <Hrtable />
            </div>
        </div>
    );
};

export default Hrdetails;
