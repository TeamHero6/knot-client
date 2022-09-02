import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import HrEmployeeData from "./HrEmployeeData";

const HrEmployeeDetails = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        fetch(
            "http://localhost:5000/employeedetails",
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
        <div className="ml-5">
            <div>
                <button
                    onClick={() => setShow(!show)}
                    className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500  hover: shadow-green-200 hover: shadow-sm"
                >
                    <IoIosAddCircleOutline className="text-2xl" />
                    Add Employee
                </button>{" "}
            </div>
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
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-32"
                                        htmlFor="name"
                                    >
                                        Joining Date :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-2 pl-3 w-2/6 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="date"
                                        {...register("Joining_Date")}
                                        id=""
                                        placeholder="Joining Date"
                                    />
                                    <br />
                                    <input
                                        className="py-2 pl-3 ml-9 w-3/6 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Employee_Name")}
                                        id=""
                                        placeholder="Employee Name"
                                    />
                                </div>

                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="number"
                                        {...register("Employee_id")}
                                        id=""
                                        placeholder="Employee ID"
                                    />
                                    <select
                                        required
                                        name="customerName"
                                        {...register("Department")}
                                        id=""
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                    >
                                        <option value="" selected disabled>
                                            Select Department
                                        </option>
                                        <option value="Human Resources">
                                            Human Resources
                                        </option>
                                        <option value="Sales">Sales</option>
                                        <option value="Marketing">
                                            Marketing
                                        </option>
                                        <option value="Finance">Finance</option>
                                    </select>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full  my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Designation")}
                                        id=""
                                        placeholder="Designation"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="email"
                                        {...register("Company_Email")}
                                        id=""
                                        placeholder="Company Email"
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
                                        placeholder="Personal Email"
                                    />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Report_Person")}
                                        id=""
                                        placeholder="Report Person"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Blood_Group")}
                                        id=""
                                        placeholder="Blood Group"
                                    />
                                </div>

                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Salary_Grad")}
                                        id=""
                                        placeholder="Salary Grad"
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
                                    <textarea
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Address")}
                                        id=""
                                        placeholder="Full Address"
                                    />
                                </div>
                                <h2 className="text-blue-900 my-3 text-xl font-medium">
                                    Emergency Contact
                                </h2>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("contact_Name")}
                                        id=""
                                        placeholder="Name"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Emergency_contact")}
                                        id=""
                                        placeholder="Phone Number"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Relation")}
                                        id=""
                                        placeholder="Relation"
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
            </div>
            <HrEmployeeData />
        </div>
    );
};

export default HrEmployeeDetails;
