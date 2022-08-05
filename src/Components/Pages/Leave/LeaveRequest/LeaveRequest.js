import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import Award from "../Award";
import Meeting from "../Meeting";
import Warming from "../Warming";

const LeaveRequest = () => {
    const [userinfo, setUserinfo] = useState([]);
    const [leave, setleave] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/leaveData")
            .then((res) => res.json())
            .then((data) => setUserinfo(data));
    }, []);

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/user")
            .then((res) => res.json())
            .then((data) => setleave(data));
    }, []);
    const onSubmit = (data) => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/user", {
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
    // console.log(userinfo)
    return (
        <div>
            <section>
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
                            <input className="pl-2 font-medium" type="submit" />
                        </div>
                    </form>
                </div>
            </section>
            <section>
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
                </div>
            </section>
            <div className="my-10">
                <p className="text-xl text-color md:ml-5">Leave Report</p>
                <p className="text-xl text-center mb-3">Leave Request</p>
                <table className="text-center responsive bg-[#EEEEEE] w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Dept.</th>
                            <th>Designation</th>
                            <th>Leave Date</th>
                            <th>Reason For Leave</th>
                            <th>Leave Request</th>
                            <th>Approval</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userinfo?.map((user) => (
                            <tr>
                                <td>{user?.Name}</td>
                                <td>{user?.dep}</td>
                                <td>{user?.Designation}</td>
                                <td>{user?.leave_date}</td>
                                <td>{user?.leave}</td>
                                <td>Details</td>
                                <td>Edit</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Meeting />
                <Warming />
                <Award />
            </div>
        </div>
    );
};

export default LeaveRequest;
