import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { toast } from "react-toastify";



const HRWarning = () => {
    const [warning, setWarning] = useState([]);
    const [award, setAward] = useState([]);
    const [feeds, setFeed] = useState("");
    const [leader, setleader] = useState("");
    // const [show, setShow] = useState('');

    useEffect(() => {
        fetch("http://localhost:5000/warnings")
            .then((res) => res.json())
            .then((data) => setWarning(data));
    }, [feeds]);
    useEffect(() => {
        fetch("http://localhost:5000/award")
            .then((res) => res.json())
            .then((data) => setAward(data));
    }, [award]);
    console.log(award);

    const feedback = (event) => {
        setFeed(event.target.value);
    };
    const ledarfeed = (event) => {
        setleader(event.target.value);
    };

    const teamfeed = (id) => {
        const infeed = feeds;

        const colfeed = { infeed };

        const url = `http://localhost:5000/warnings/${id}`;
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
    return (
        <div>
            <div class="rounded-none overflow-auto w-full">
                <table class="lg:w-full shadow-sm border-2 border-cyan-300  mx-auto my-12 text-base overflow-hidden">
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
                        </tr>
                    </thead>

                    <tbody>
                        {warning.map((w) => (
                            <tr className="hover:shadow-md hover:bg-cyan-100 duration-500 cursor-pointer border-b border-cyan-100">
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {w.warningDate}
                                </td>
                                <td className="py-3 px-6 w-5 whitespace-nowrap">
                                    <p className="pl-2">
                                        {w.warningReason}{" "}
                                    </p>
                                </td>

                                <td className="py-3 px-6 whitespace-nowrap">
                                    {w.type}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
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
                        </tr>
                    </thead>

                    <tbody>
                        {award.map((award) => (
                            <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {award.AwardDate}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {award.awardTitle}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {award.successMessage}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HRWarning;