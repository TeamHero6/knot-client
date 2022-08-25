import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import SentEmailList from "./SentEmailList";

const EmailMarketing = () => {
    const [compose, setCompose] = useState(false);

    const handleEmailForm = (e) => {
        e.preventDefault();
        const emailTo = e.target.emailTo.value;
        const emailSubject = e.target.emailSubject.value;
        const emailDescription = e.target.emailDescription.value;
        const emailToSend = { emailTo, emailSubject, emailDescription };
        console.log(emailToSend);

        fetch("http://localhost:5000/sentEmail", {
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
        <div className="mx-5 mt-3">
            <div className="flex flex-wrap justify-between items-center">
                <div className="form-control md:min-w-[400px] border border-gray-300 bg-slate-50 rounded">
                    <div className="input-group ">
                        <button className="btn btn-ghost text-2xl">
                            <BiSearchAlt></BiSearchAlt>
                        </button>
                        <input
                            className="text-xl py-2 pl-3 w-full my-1 outline-none"
                            type="text"
                            placeholder="Search Here"
                            className="input"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 md:gap-8">
                    <div className="text-lg md:text-xl whitespace-nowrap">
                        <p>Total Sent Mail: 12</p>
                        <p>Total Subscribe: 06</p>
                    </div>
                    <div>
                        <button
                            onClick={() => setCompose(!compose)}
                            className="btn btn-outline flex flex-nowrap justify-center items-center text-lg md:text-xl md:py-2 md:px-4 border-gray-300 bg-slate-50 rounded"
                        >
                            <FaRegEdit />
                            <p>Compose</p>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {compose ? (
                    <div className="mt-8 z-50 border rounded">
                        <form onSubmit={handleEmailForm}>
                            {/* <label
                                className="px-4 z-10 py-2 border-b w-full"
                                type="text"
                                value={"New Mail"}
                            /> */}
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
                ) : (
                    ""
                )}
            </div>
            <SentEmailList></SentEmailList>
        </div>
    );
};

export default EmailMarketing;
