import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { useSelector } from "react-redux";
import SentEmailList from "./SentEmailList";

const EmailMarketing = () => {
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    const handleEmailForm = (e) => {
        e.preventDefault();
        const emailTo = e.target.emailTo.value;
        const emailSubject = e.target.emailSubject.value;
        const emailDescription = e.target.emailDescription.value;
        const emailToSend = {
            emailTo,
            emailSubject,
            emailDescription,
            companyName,
        };
        console.log(emailToSend);

        fetch("https://knot-business-solution-server.herokuapp.com/sentEmail", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(emailToSend),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                }
            });
    };
    return (
        <div className="">
            <div className="mx-4 mt-3 flex flex-wrap md:flex-nowrap justify-between items-center">
                <div className="form-control border md:w-1/2 border-gray-300 bg-slate-50 rounded">
                    <div className="input-group w-full bg-white">
                        <button className="px-4 text-2xl">
                            <BiSearchAlt></BiSearchAlt>
                        </button>
                        <input
                            className="text-xl py-2 pl-3 w-full my-1 outline-none"
                            type="text"
                            placeholder="Search Here"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 md:gap-8">
                    <div className="text-lg md:text-xl whitespace-nowrap">
                        <p>Total Sent Mail: 12</p>
                        <p>Total Subscribe: 06</p>
                    </div>
                    <div>
                        <label
                            for="composeEmail"
                            className="btn modal-button flex items-center gap-2 bg-green-400	 py-2 px-6 text-white font-semibold rounded border border-white hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm"
                        >
                            <FaRegEdit />
                            <p className="text-xl">Compose</p>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="composeEmail"
                    className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box min-w-min">
                        <label
                            for="composeEmail"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <div className="bg-white mt-8 w-[776px]">
                            <div className="z-50 border rounded">
                                <form onSubmit={handleEmailForm}>
                                    <label
                                        className="block px-4 py-2 border-b bg-slate-50"
                                        htmlFor="emailTo"
                                    >
                                        New Mail
                                    </label>
                                    <input
                                        className="px-4 py-2 border-b w-full bg-slate-50"
                                        type="email"
                                        name="emailTo"
                                        placeholder="To"
                                        required
                                    />
                                    <br />
                                    <input
                                        className="px-4 py-2 border-b w-full bg-slate-50"
                                        type="text"
                                        name="emailSubject"
                                        placeholder="Subject"
                                        required
                                    />
                                    <br />
                                    <textarea
                                        className="px-4 py-2 w-full bg-slate-50"
                                        name="emailDescription"
                                        placeholder="..."
                                        id=""
                                        cols="50"
                                        rows="5"
                                        required
                                    ></textarea>
                                    <button
                                        className="flex items-center bg-blue-600 py-1 px-3 ml-4 mb-2 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                        type="submit"
                                    >
                                        <div className="flex items-center gap-1">
                                            <TbSend />
                                            <p>Send</p>
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SentEmailList></SentEmailList>
        </div>
    );
};

export default EmailMarketing;
