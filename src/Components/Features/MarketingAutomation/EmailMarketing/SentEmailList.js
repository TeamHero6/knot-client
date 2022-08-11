import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const SentEmailList = () => {
    const [emailList, setEmailList] = useState([]);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/sentEmail")
            .then((res) => res.json())
            .then((data) => setEmailList(data));
    }, []);

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
        <div class="overflow-x-auto w-full my-16">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <th>Company</th>
                        <th>Campaign</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {emailList.map((email) => (
                        <tr key={email._id}>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div>
                                        <div>KNOT</div>
                                    </div>
                                </div>
                            </td>
                            <td className="font-semibold">
                                {email.emailSubject}
                            </td>
                            <td>{email.emailDescription}</td>
                            <td>
                                <button
                                    onClick={() => deleteEmail(email._id)}
                                    className="btn btn-sm btn-ghost"
                                >
                                    <RiDeleteBin5Line className="text-xl text-red-500" />
                                </button>
                            </td>
                            <td>
                                <FaRegStar className="text-xl" />{" "}
                            </td>
                            <th>
                                <button class="btn btn-outline btn-xs">
                                    Done
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SentEmailList;
