import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiPlus } from "react-icons/bi";
import { FiEye } from "react-icons/fi";

import { toast } from "react-toastify";

const Transfer = () => {
    const { register, handleSubmit, reset } = useForm();
    const [transfer, setTransfer] = useState([]);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/transfer")
            .then((res) => res.json())
            .then((data) => setTransfer(data));
    }, []);
    const onSubmit = (data) => {
        fetch("https://knot-business-solution-server.herokuapp.com/transfer", {
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
                for="my-drawer"
                class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none"
            >
                <span>
                    <BiPlus></BiPlus>
                </span>
                <span className="capitalize"> Transfer</span>
            </label>
            <div className="mt-5 p-5 mx-auto w-4/5  bg-[#EEEEEE] rounded-lg">
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
                                        Depertment:
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                    {...register("Depertment")}
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="label w-48">
                                    <span className="label-text text-xl">
                                        Transfer office Location:
                                    </span>
                                </label>
                                <select
                                    className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                    {...register("Location")}
                                >
                                    <option value=""></option>
                                    <option value="Designation">
                                        Designation
                                    </option>
                                    <option value="Salary">Salary</option>
                                </select>
                            </div>
                            <div className="flex items-center">
                                <label className="label w-48">
                                    <span className="label-text text-xl">
                                        Transfer Reason Note:
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    className="w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                    {...register("Transfer_Reason")}
                                />
                            </div>
                        </div>

                        {/* ff */}
                        <div>
                            <div className="flex items-center">
                                <label className="label w-48">
                                    <span className="label-text text-xl">
                                        Employee ID:
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                    {...register("Employee_ID")}
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
                                        Transfer Date:
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                    {...register("Transfer_Date")}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center bg-[#0182be]  w-32 p-2 rounded-lg mx-auto border-solid border border-[#0182be] mt-5">
                        <input
                            className="pl-2 font-medium text-white"
                            type="submit"
                            value="Save Change"
                        />
                    </div>
                </form>
            </div>
            <div className="mx-auto w-4/5 rounded-lg mt-5 ">
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Employee ID</th>
                                <th>Depertment</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transfer.map((pr) => (
                                <tr>
                                    <th>{pr.Name}</th>
                                    <th>{pr.Employee_ID}</th>
                                    <th>{pr.Depertment}</th>
                                    <th className="text-[#0182be]">
                                        <FiEye></FiEye>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Transfer;
