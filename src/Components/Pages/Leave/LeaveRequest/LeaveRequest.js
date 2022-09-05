import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSave } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const LeaveRequest = () => {
    const [leave, setleave] = useState([]);
    const [show, setShow] = useState(false);
    const [leaveModal, setLeaveModal] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`https://knot-business-solution-server.herokuapp.com/leaveUsers/${loggerInfo.email}`)
            .then((res) => res.json())
            .then((data) => setleave(data));
    }, [leave, loggerInfo]);
    console.log(leave);

    const onSubmit = (data) => {
        const newData = { ...data, companyName };
        fetch("https://sheltered-cliffs-60290.herokuapp.com/user", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newData),
        })
            .then((res) => res.json())
            .then((inserted) => {
                if (inserted.insertedId) {
                    reset();
                    toast.success("Add successfully");
                }
            });
    };

    return (
        <div className="w-full">
            <section>
                <label for="my-drawer">
                    <button
                        onClick={() => setShow(!show)}
                        className="flex border-transparent ml-5 items-center gap-2 bg-green-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm"
                    >
                        <BiPlus></BiPlus> New
                    </button>
                </label>
                {show ? (
                    <div>
                        <h1 className="text-2xl text-center font-semibold mt-5 text-[#0182BE]">
                            Leave Request{" "}
                        </h1>
                        <div className="ml-3 ">
                            <form
                                className="lg:w-10/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div>
                                    <div>
                                        <div className="flex items-center">
                                            <label className="label w-48">
                                                <span className="label-text text-xl">
                                                    Email :
                                                </span>
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="Your Email"
                                                className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                                {...register("email")}
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <label className="label w-48">
                                                <span className="label-text text-xl">
                                                    Name :
                                                </span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Your Name"
                                                className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                                {...register("Name")}
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <label className="label w-48">
                                                <span className="label-text text-xl">
                                                    Employee ID:
                                                </span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Employee ID"
                                                className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
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
                                                required
                                                type="text"
                                                placeholder="Designation"
                                                className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                                {...register("Designation")}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <label className="label w-48">
                                                <span className="label-text text-xl">
                                                    Depertment:
                                                </span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Department"
                                                className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                                {...register("dep")}
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <label className="label w-48">
                                                <span className="label-text text-xl">
                                                    Start Date:
                                                </span>
                                            </label>
                                            <input
                                                required
                                                type="date"
                                                placeholder="Start Date"
                                                className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                                {...register("s_date")}
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <label className="label w-48">
                                                <span className="label-text text-xl">
                                                    End Date:
                                                </span>
                                            </label>
                                            <input
                                                required
                                                type="date"
                                                placeholder="End Date"
                                                className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                                {...register("e_date")}
                                            />
                                        </div>
                                        <div className="lg:flex items-center">
                                            <label className="label w-48">
                                                <span className="label-text text-xl">
                                                    Type Of Leave:
                                                </span>
                                            </label>
                                            <select
                                                className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                                {...register("leave_type")}
                                            >
                                                <option disabled selected>
                                                    Leave type
                                                </option>
                                                <option value="Casual leave">
                                                    Casual leave
                                                </option>
                                                <option value="Sick leave">
                                                    Sick leave
                                                </option>
                                                <option value="Annual leave">
                                                    Annual leave
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center rounded-lg w-fit mx-auto mt-3">
                                    <button className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm">
                                        <AiFillSave />
                                        <input type="submit" value="Submit" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    " "
                )}
                <div className="px-5 mt-5 bg-white pt-2 mx-5">
                    <h1 className="text-2xl font-bold">Request Status</h1>
                    <div class="overflow-x-auto">
                        <div className="w-full mb-5 flex justify-between rounded py-6 mt-5">
                            <table class="shadow-sm border-2 border-cyan-300 w-full text-base overflow-hidden">
                                <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                                    <tr>
                                        <th className="py-3 text-left px-6 whitespace-nowrap">
                                            Employee ID
                                        </th>
                                        <th className="py-3 text-left px-6 whitespace-nowrap">
                                            Employee Name
                                        </th>
                                        <th className="py-3 text-left px-6 whitespace-nowrap">
                                            Department
                                        </th>
                                        {/* <th className="py-3 text-left px-6 whitespace-nowrap">
                                            Approval Status
                                        </th> */}
                                        <th className="py-3 text-left px-6 whitespace-nowrap">
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leave.map((le) => (
                                        <tr className="hover:shadow-md hover:bg-cyan-100  duration-500 cursor-pointer border-b border-cyan-100">
                                            <td className="py-3 px-6 whitespace-nowrap">
                                                {le.id}
                                            </td>
                                            <td className="py-3 px-6 whitespace-nowrap">
                                                {le.Name}
                                            </td>
                                            <td className="py-3 px-6 whitespace-nowrap">
                                                {le.dep}
                                            </td>
                                            {/* <td className="py-3 px-6 whitespace-nowrap">
                                                {le.aprovel}
                                            </td> */}
                                            <td className="py-3 px-6 whitespace-nowrap">
                                                <div>
                                                    <label
                                                        for={le._id}
                                                        onClick={() =>
                                                            setLeaveModal(le)
                                                        }
                                                        class=" modal-button"
                                                    >
                                                        <span className="underline hover:text-blue-500 hover:font-medium">
                                                            Details
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* <RequestStatus></RequestStatus> */}

                        <input
                            type="checkbox"
                            id={leaveModal._id}
                            className="modal-toggle"
                        />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">
                                    Leave Request Information!
                                </h3>
                                <p>Date : {leaveModal.email}</p>
                                <p>Name : {leaveModal.Name}</p>
                                <p>Employee ID : {leaveModal.id}</p>
                                <p>Designation : {leaveModal.Designation}</p>
                                <p>Department : {leaveModal.dep}</p>
                                <p>Start Date : {leaveModal.s_date}</p>
                                <p>End Date : {leaveModal.e_date}</p>
                                <p>Type Of Leave : {leaveModal.leave_type}</p>
                                <div class="modal-action">
                                    <label
                                        for={leaveModal._id}
                                        className="flex ml-5 items-center gap-2 bg-red-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-red-400 hover:outline-1 hover:border hover:border-red-400 hover: shadow-red-200 hover: shadow-sm"
                                    >
                                        Close!
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LeaveRequest;
