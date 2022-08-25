import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSave, AiOutlineEye } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
// import profile from "../../../Assets/icons/Live-chat-icon/profile_user.png";

const HrPerformance = () => {
    const { register, handleSubmit, reset } = useForm();
    const [promo, setPromo] = useState([]);
    const [show, setShow] = useState(false);
    const [showTransfer, setShowTransfer] = useState(false);
    const [modal, setmodal] = useState({});
    const [transfer, setTransfer] = useState([]);


    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/transfer")
            .then((res) => res.json())
            .then((data) => setTransfer(data));
    }, [transfer]);
    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/performance")
            .then((res) => res.json())
            .then((data) => setPromo(data));
    }, [promo]);

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
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className="lg:w-10/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto">
                            <label
                                className="font-bold text-purple-800"
                                htmlFor="name"
                            >
                                Employee Info
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
                                    {...register("Promoted_Designation")}
                                    id=""
                                    placeholder="Promoted Designation"
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
                                    {...register("Incriment_Salary")}
                                    id=""
                                    placeholder="Incriment Salary"
                                />
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="date"
                                    {...register("Pormotion_Date")}
                                    id=""
                                    placeholder="Pormotion_Date"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Employee_ID")}
                                    id=""
                                    placeholder="Employee ID"
                                />
                                <select
                                    className="w-6/12 pl-3 py-2 border border-gray-300 bg-slate-50 rounded outline-none"
                                    {...register("Promoted_Type")}
                                >
                                    <option
                                        className="text-gray-400"
                                        disabled
                                        selected
                                    >
                                        Type Of Leave
                                    </option>
                                    <option className="text-green-400">
                                        Approve
                                    </option>
                                    <option className="text-red-600">
                                        Reject
                                    </option>
                                </select>
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


            {/* Transfer Form */}
            {showTransfer ? (
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className="lg:w-8/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto">
                            <label
                                className="font-bold text-purple-800"
                                htmlFor="name"
                            >
                                Transfer Info
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
                                    {...register("Transfer_Reason")}
                                    id=""
                                    placeholder="Transfer Reason"
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
                                    {...register("Employee_ID")}
                                    id=""
                                    placeholder="Employee ID"
                                />
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="date"
                                    {...register("Transfer_Date")}
                                    id=""
                                    placeholder="Transfer Date"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <select
                                    className="w-6/12 pl-3 py-2 border border-gray-300 bg-slate-50 rounded outline-none"
                                    {...register("Location")}
                                >
                                    <option
                                        className="text-gray-400"
                                        value="Salary"
                                        disabled
                                        selected
                                    >
                                        Salary
                                    </option>
                                    <option
                                        className="text-green-400"
                                        value="Designation"
                                    >
                                        Designation
                                    </option>
                                </select>
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

            <div className="w-fit rounded-lg my-5 ">
                <div className="rounded-none">
                    <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Employee ID
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Depertment
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    View Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {promo.map((pr) => (
                                <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Name}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Employee_ID}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Depertment}
                                    </td>
                                    <td className="text-[#0182be]">
                                        <label
                                            for={pr._id}
                                            onClick={() => setmodal(pr)}
                                            className="modal-button"
                                        >
                                            <AiOutlineEye className="text-2xl "></AiOutlineEye>
                                        </label>
                                        {/* */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <input
                        required
                        type="checkbox"
                        id={modal._id}
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box">
                            <div>
                                <div className="flex items-center mb-5">
                                    <div className="ml-5">
                                        <h2 className="text-2xl capitalize">
                                            {modal.Name}
                                        </h2>
                                        <span className="uppercase">
                                            {modal.Depertment}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-xl border-b-2 border-yellow-500 capitalize mb-3">
                                        Details info
                                    </h1>
                                    <div>
                                        <p>
                                            <span className="font-medium capitalize">
                                                {" "}
                                                Employee ID:{" "}
                                            </span>
                                            {modal.Employee_ID}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Incriment Salary:{" "}
                                            </span>
                                            {modal.Incriment_Salary}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Designation:{" "}
                                            </span>
                                            {modal.Designation}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Pormotion Date:{" "}
                                            </span>
                                            {modal.Pormotion_Date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-action">
                                <label for={modal._id} className="btn btn-warning">
                                    Cancel
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full rounded-lg mt-5 ">
                <div className="rounded-none">
                    <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Employee ID
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Depertment
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    View Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {transfer.map((pr) => (
                                <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Name}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Employee_ID}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {pr.Depertment}
                                    </td>
                                    <td className="text-[#0182be]">
                                        <label
                                            for={pr._id}
                                            onClick={() => setmodal(pr)}
                                            className="modal-button text-center"
                                        >
                                            <AiOutlineEye className="text-2xl "></AiOutlineEye>
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <input
                        required
                        type="checkbox"
                        id={modal._id}
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box">
                            <div>
                                <div className="flex items-center mb-5">
                                    {/* <img
                                        className="w-28"
                                        src={profile}
                                        alt=""
                                    /> */}
                                    <div className="ml-5">
                                        <h2 className="text-2xl capitalize">
                                            {modal.Name}
                                        </h2>
                                        <span className="uppercase">
                                            {modal.Depertment}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-xl border-b-2 border-yellow-500 capitalize mb-3">
                                        Details info
                                    </h1>
                                    <div>
                                        <p>
                                            <span className="font-medium capitalize">
                                                {" "}
                                                Transfer Reason:{" "}
                                            </span>
                                            {modal.Transfer_Reason}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Location:{" "}
                                            </span>
                                            {modal.Location}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Designation:{" "}
                                            </span>
                                            {modal.Designation}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Transfer Date:{" "}
                                            </span>
                                            {modal.Transfer_Date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-action">
                                <label for={modal._id} className="btn btn-warning">
                                    Cancel
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HrPerformance;
