import moment from "moment";
import React from "react";
import { AiFillSave } from "react-icons/ai";

const UserReportModal = ({ singleAttendance }) => {
    const { _id } = singleAttendance;

    const handleAddInvest = (e) => {
        e.preventDefault();
        const endTime = e.target.endTime.value;
        const endDate = e.target.endDate.value;
        const taskReport = e.target.taskReport.value;

        const UpdateDateTime = {
            endTime,
            endDate,
            taskReport,
        };
        console.log(UpdateDateTime);
        const url = `https://knot-business-solution-server.herokuapp.com/attendance/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(UpdateDateTime),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("success", data);
                e.target.reset();
            });
    };
    return (
        <div>
            <input
                type="checkbox"
                id="attend-details-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        for="attend-details-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <div>
                        <div>
                            <form onSubmit={handleAddInvest}>
                                <div className="flex gap-3">
                                    <div className="md:flex items-center">
                                        <br />
                                        <input
                                            type="hidden"
                                            name="endTime"
                                            id=""
                                            value={moment().format("LT")}
                                        />{" "}
                                    </div>
                                    <div className="md:flex items-center">
                                        <input
                                            type="hidden"
                                            name="endDate"
                                            id=""
                                            value={moment().format("ll")}
                                        />{" "}
                                    </div>
                                    <div className="md:flex items-center">
                                        <textarea
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="text"
                                            name="taskReport"
                                            id=""
                                            cols="50"
                                            rows="2"
                                            placeholder="Task Report"
                                        />{" "}
                                    </div>
                                </div>
                                <div className="flex justify-center mt-2">
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 bg-green-500 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-green-500 hover:outline-1 hover:border hover:border-green-500 hover: shadow-blue-300 hover: shadow-sm"
                                    >
                                        <AiFillSave />
                                        Submit
                                    </button>{" "}
                                    <br />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReportModal;
