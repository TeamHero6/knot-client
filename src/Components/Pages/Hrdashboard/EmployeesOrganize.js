import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { toast } from "react-toastify";

const EmployeesOrganize = () => {
    const [warning, setWarning] = useState([]);
    const [award, setAward] = useState([]);
    const [feeds, setFeed] = useState("");
    const [leader, setleader] = useState("");
    // const [show, setShow] = useState('');

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/warning")
            .then((res) => res.json())
            .then((data) => setWarning(data));
    }, [feeds]);
    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/award")
            .then((res) => res.json())
            .then((data) => setAward(data));
    }, []);

    const feedback = (event) => {
        setFeed(event.target.value);
    };
    const ledarfeed = (event) => {
        setleader(event.target.value);
    };

    const teamfeed = (id) => {
        const infeed = feeds;

        const colfeed = { infeed };

        const url = `https://knot-business-solution-server.herokuapp.com/warning/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(colfeed),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("successfully save warning data");
            });
    };
    const handelleader = (id) => {
        const ledarfeed = leader;

        const leadercol = { ledarfeed };

        const url = `https://knot-business-solution-server.herokuapp.com/award/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(leadercol),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("successfully save award data");
            });
    };

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ y: -50, opacity: 0 }}
        >
            <div className="px-5">
                <h1 className="text-xl  my-5">Team Members Warning Database</h1>
                <div class="rounded-none overflow-auto">
                    <table class="lg:w-11/12 shadow-2xl border-2 border-cyan-300  mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Warning Date
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Reason of Warning
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Warning Type
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Team Member Feedback
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Save Change
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {warning.map((w) => (
                                <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {w.warningDate}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <p className="pl-2">
                                            {w.warningReason}{" "}
                                        </p>
                                    </td>

                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {w.type}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <textarea
                                            className="pl-3 pt-3"
                                            onChange={feedback}
                                            rows=""
                                            cols=""
                                            placeholder={w.infeed}
                                        >
                                            {w.infeed}
                                        </textarea>
                                    </td>
                                    <td className="py-3  whitespace-nowrap">
                                        <button
                                            onClick={() => teamfeed(w._id)}
                                            className="flex items-center gap-2 bg-blue-600 ml-3 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                            type="subimt"
                                        >
                                            <AiFillSave />
                                            Save
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="px-5">
                <h1 className="text-xl  my-5 ">Team Member Award Database</h1>
                <div class="rounded-none overflow-auto">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Award Date
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Team Member Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Type Of Award
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Leader Feedback
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Save Change
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {award.map((a) => (
                                <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {a.awardDate}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {a.name}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {a.awardType}
                                    </td>

                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <textarea
                                            className="pl-3 pt-3"
                                            required
                                            onChange={ledarfeed}
                                            placeholder={a.ledarfeed}
                                            rows=""
                                            cols=""
                                        >
                                            {a.ledarfeed}
                                        </textarea>
                                    </td>

                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <button
                                            onClick={() => handelleader(a._id)}
                                            className="flex items-center gap-2 bg-blue-600 ml-3 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                            type="subimt"
                                        >
                                            <AiFillSave />
                                            Save
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
};

export default EmployeesOrganize;
