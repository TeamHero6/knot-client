import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";

const SentEmailList = () => {
    const [emailList, setEmailList] = useState([]);
    const loggerInfo = useSelector(state => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`http://localhost:5000/sentEmail/${companyName}`)
            .then((res) => res.json())
            .then((data) => setEmailList(data.reverse()));
    }, [emailList, companyName]);

    const deleteEmail = (id) => {
        const proceed = window.confirm("Do you want to delete this task?");
        if (proceed) {
            const url = `https://knot-business-solution-server.herokuapp.com/deleteEmail/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
    };

    return (
        <div className="bg-white my-16 px-6 py-7">
            <div className=" ">
                <table className="shadow-lg border-[1px] border-cyan-300 w-full mx-auto text-base overflow-hidden">
                    {/* <!-- head --> */}
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-3 text-left pl-6 px-4 whitespace-nowrap">
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox border-white"
                                    />
                                </label>
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Company
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Campaign
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap"></th>
                            <th className="py-3 text-left px-6 whitespace-nowrap"></th>
                            <th className="py-3 text-left px-6 whitespace-nowrap"></th>
                            <th className="py-3 text-left px-6 whitespace-nowrap"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {emailList.map((email) => (
                            <tr
                                key={email._id}
                                className="hover:shadow-md hover:bg-cyan-100 duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <th className="py-3 pl-6 pr-4 whitespace-nowrap">
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                    </label>
                                </th>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div>KNOT</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {email.emailSubject}
                                </td>
                                <td>{email.emailDescription}</td>
                                <td className="py-3 px-6">
                                    <button
                                        onClick={() => deleteEmail(email._id)}
                                        className="flex items-center gap-2 py-1 px-3 text-white font-bold rounded  hover:bg-white hover:text-red-600 hover:outline-1 hover:border hover:border-red-600 hover:shadow-red-400 hover:shadow-sm"
                                    >
                                        <AiFillDelete className="text-xl text-red-500" />
                                    </button>
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    <FaRegStar className="text-xl" />{" "}
                                </td>
                                <th className="py-3 px-6 whitespace-nowrap">
                                    <button className="flex items-center bg-green-400 py-1 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm">
                                        Done
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SentEmailList;
