import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSave } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { toast } from "react-toastify";

const Payrolls = () => {
    const { register, handleSubmit, reset } = useForm();
    const [payrolls, setPayrolls] = useState([]);

    const [show, setShow] = useState(false);
    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/payrolls")
            .then((res) => res.json())
            .then((data) => setPayrolls(data));
    }, [payrolls]);

    const onSubmit = (data) => {
        fetch("https://knot-business-solution-server.herokuapp.com/payrolls", {
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
        <div>
            <label
                onClick={() => setShow(!show)}
                for="my-drawer"
                className="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none"
            >
                <span>
                    <BiPlus></BiPlus>
                </span>
                <span className="capitalize"> Payrolls</span>
            </label>

            {show ? (
                <div className="py-20">
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
            )}

            <div className="mx-auto w-full rounded-lg my-5 ">
                <div className="overflow-auto  rounded-none">
                    <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Employee ID
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Depertment
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Paid Amount
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Pament Date
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Payment Status
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
            </div>
        </div>
    );
};

export default Payrolls;
