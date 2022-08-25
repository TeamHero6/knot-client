import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const HrPayroll = () => {
    const { register, handleSubmit, reset } = useForm();
    const [payrolls, setPayrolls] = useState([]);

    const [show, setShow] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5000/payrolls")
            .then((res) => res.json())
            .then((data) => setPayrolls(data));
    }, [payrolls]);
    console.log(payrolls);

    const onSubmit = (data) => {
        fetch("http://localhost:5000/payrolls", {
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
            <div>
                <button
                    onClick={() => setShow(!show)}
                    className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                >
                    <IoIosAddCircleOutline className="text-2xl" />
                    Add Payroll
                </button>{" "}
            </div>


            {show ? (
                <div className="mt-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className="md:w-3/6 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
                            <label
                                className="font-bold text-purple-800"
                                htmlFor="name"
                            >
                                Payrolls
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
                                    Payroll:{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="Number"
                                    {...register("Payroll")}
                                    id=""
                                    placeholder="Payroll Amount"
                                />
                                <br />
                            </div>
                            <div className="md:flex items-center">
                                <label
                                    className="font-bold w-40"
                                    htmlFor="name"
                                >
                                    Payment Date:{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="Date"
                                    {...register("Date")}
                                    id=""
                                    placeholder="Payment Date"
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

            {/* {show ? (
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className="lg:w-6/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto">
                            <label
                                className="font-bold text-purple-800"
                                htmlFor="name"
                            >
                                Payrolls Info
                            </label>{" "}
                            <br />
                            <br />
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Name")}
                                    id=""
                                    placeholder="Employee Name"
                                />

                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Depertment")}
                                    id=""
                                    placeholder="Depertment"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Pay_Amount")}
                                    id=""
                                    placeholder="Pay_Amount"
                                />
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Designation")}
                                    id=""
                                    placeholder="Designation"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Payable_Amount")}
                                    id=""
                                    placeholder="Payable Amount"
                                />
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="date"
                                    {...register("Payment_Date")}
                                    id=""
                                    placeholder="Payment_Date"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <select
                                    className="w-6/12 pl-3 py-2 border border-gray-300 bg-slate-50 rounded outline-none"
                                    {...register("Payroll_Type")}
                                >
                                    <option
                                        className="text-gray-400"
                                        disabled
                                        selected
                                    >
                                        Payroll_Type
                                    </option>
                                    <option value="Salary">Salary</option>
                                    <option value="House_Rent">
                                        House Rent
                                    </option>
                                    <option value="Hospitali_Bill">
                                        Hospitali Bill
                                    </option>
                                    <option value="Internet_Bill">
                                        Internet Bill
                                    </option>
                                    <option value="KPI">KPI</option>
                                    <option value="Overtime">Overtime</option>
                                    <option value="TA/DA">TA/DA</option>
                                    <option value="Lunch_Bill">
                                        Lunch Bill
                                    </option>
                                    <option value="Phone_Bill">
                                        Phone Bill
                                    </option>
                                </select>
                                <select
                                    className="w-6/12 pl-3 py-2 border border-gray-300 bg-slate-50 rounded outline-none"
                                    {...register("Pay_stutas")}
                                >
                                    <option
                                        className="text-gray-400"
                                        disabled
                                        selected
                                    >
                                        Type Of Leave
                                    </option>
                                    <option value="unpaid">unpaid</option>
                                    <option value="paid">paid</option>
                                </select>
                            </div>
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Employee_ID")}
                                    id=""
                                    placeholder="Employee ID"
                                />
                            </div>
                            <div className="lg:flex justify-between md:flex pt-2">
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
            )} */}

            {/* <div className="mx-auto w-full rounded-lg my-5 ">
                <div className="overflow-auto  rounded-none">
                    <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Payment Date
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Employee ID
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Department
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Designation
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Payroll Amount
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {payrolls.map((pr) => (
                                <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Employee_ID}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Name}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Depertment}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Payable_Amount}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Payment_Date}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Pay_stutas}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> */}

            <div>
                <div className="w-full h-80 mt-5 mb-5">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-full h-10 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                    Payment Date
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Name
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Employee ID
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Department
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Designation
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Payroll Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {payrolls.map((payrolls) => (
                                <tr
                                    key={payrolls._id}
                                    className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                        {payrolls.Date}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {payrolls.Name}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {payrolls.Employee_ID}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {payrolls.Department}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {payrolls.Designation}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {payrolls.Payroll}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HrPayroll;