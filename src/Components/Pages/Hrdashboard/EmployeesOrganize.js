import React, { useEffect, useState } from "react";
import { BsSave2 } from "react-icons/bs";
import { toast } from "react-toastify";

const EmployeesOrganize = () => {
    const [warning, setWarning] = useState([]);
    const [award, setAward] = useState([]);
    const [feeds, setFeed] = useState("");
    const [leader, setleader] = useState("");

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/warning")
            .then((res) => res.json())
            .then((data) => setWarning(data));
    }, []);
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
        <div>
            <div className="px-5">
                <h1 className="text-xl  my-5">Team Members Warning Database</h1>
                <div class="rounded-none">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
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
                                            onChange={feedback}
                                            rows=""
                                            cols=""
                                        ></textarea>
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <div className="w-10 mx-auto">
                                            <button
                                                onClick={() => teamfeed(w._id)}
                                            >
                                                <BsSave2></BsSave2>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="px-5">
                <h1 className="text-xl  my-5 ">Team Member Award Database</h1>
                <div class="rounded-none">
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
                                            required
                                            onChange={ledarfeed}
                                            rows=""
                                            cols=""
                                        ></textarea>
                                    </td>

                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <div className="w-10 mx-auto">
                                            <button
                                                onClick={() =>
                                                    handelleader(a._id)
                                                }
                                            >
                                                <BsSave2></BsSave2>
                                            </button>
                                        </div>
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

export default EmployeesOrganize;
