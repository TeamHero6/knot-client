import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiFillSave, AiTwotoneEye } from "react-icons/ai";
import { toast } from "react-toastify";

const Interview = () => {
    const [view, setView] = useState("");
    const [short, setShort] = useState([]);
    const [modal, setmodal] = useState({});
    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/applicant")
            .then((res) => res.json())
            .then((data) => setShort(data));
    }, [short]);

    const status = (event) => {
        setView(event.target.value);
    };
    const save = (id) => {
        const aprovel = view;

        const updata = { aprovel };

        const url = `https://knot-business-solution-server.herokuapp.com/applicant/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updata),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("success");
            });
    };
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ y: -50, opacity: 0 }}
        >
            <div className="my-5">
                <h3 className="text-[#0182be] text-2xl">Interview</h3>
                <div className="mx-auto w-full rounded-lg my-3 ">
                    <div className="rounded-none">
                        <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                            <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                                <tr>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        Applicant Name
                                    </th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        Job Title
                                    </th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        Position
                                    </th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        View
                                    </th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        Interview Status
                                    </th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        Saving
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {short.map((s) => (
                                    <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                        <td className="py-3 px-6 whitespace-nowrap">
                                            {s.Applicant_Name}
                                        </td>
                                        <td className="py-3 px-6 whitespace-nowrap">
                                            {s.Job_Title}
                                        </td>
                                        <td className="py-3 px-6 whitespace-nowrap">
                                            {s.Position}
                                        </td>
                                        <td className="text-[#0182be]  text-center">
                                            <label
                                                for={s._id}
                                                onClick={() => setmodal(s)}
                                                className="modal-button text-center"
                                            >
                                                <AiTwotoneEye></AiTwotoneEye>
                                            </label>
                                        </td>
                                        <td className="py-3 px-6 whitespace-nowrap">
                                            <select
                                                onChange={status}
                                                className="pl-3 py-2 border border-gray-300 bg-slate-50 rounded outline-none"
                                            >
                                                <option
                                                    className="text-gray-400"
                                                    value="Accept"
                                                    disabled
                                                    selected
                                                >
                                                    Accept
                                                </option>
                                                <option
                                                    className="text-green-400"
                                                    value="Reject"
                                                >
                                                    Reject
                                                </option>
                                            </select>
                                        </td>

                                        <td className="">
                                            <div className="lg:flex justify-between md:flex pt-2  mx-5">
                                                <button
                                                    onClick={() => save(s._id)}
                                                    className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                                    type="subimt"
                                                >
                                                    <AiFillSave />
                                                    Save
                                                </button>
                                            </div>
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
                                    <div>
                                        <h1 className="text-xl border-b-2 border-yellow-500 capitalize mb-3">
                                            Details info
                                        </h1>
                                        <div>
                                            <p>
                                                <span className="font-medium capitalize">
                                                    {" "}
                                                    Applicant Name:{" "}
                                                </span>
                                                {modal.Applicant_Name}
                                            </p>
                                            <p>
                                                <span className="font-medium capitalize">
                                                    Position:{" "}
                                                </span>
                                                {modal.Position}
                                            </p>
                                            <p>
                                                <span className="font-medium capitalize">
                                                    Interview Date:{" "}
                                                </span>
                                                {modal.Interview_Date}
                                            </p>
                                            <p>
                                                <span className="font-medium capitalize">
                                                    Meeting Link:{" "}
                                                </span>
                                                {modal.Meeting_Link}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-action">
                                    <label
                                        for={modal._id}
                                        className="btn btn-warning"
                                    >
                                        Cancel
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Interview;
