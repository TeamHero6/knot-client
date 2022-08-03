import React from "react";

const WarningModal = ({ refetch }) => {
    const handleWarning = (e) => {
        e.preventDefault();
        const warningDate = e.target.date.value;
        const warningReason = e.target.reason.value;
        const type = e.target.type.value;
        const warningDetails = { warningDate, warningReason, type };
    };
    return (
        <div
            className="w-full bg-[#EEEEEE] rounded-lg lg:w-[50%] mx-auto p-3 px-6"
            onSubmit={handleWarning}
        >
            <form className="flex flex-col">
                <input
                    type="date"
                    className="bg-transparent my-2"
                    name="date"
                />
                <textarea
                    type="text"
                    placeholder="Reason"
                    className="my-2 p-1 px-3 rounded-md"
                    name="reason"
                />
                <select name="type" className="my-2 p-1 px-3 rounded-md">
                    <option value="light">Light</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <input
                    type="submit"
                    value="Submit"
                    className="px-4 py-2 rounded-full bg-white my-2"
                />
            </form>
        </div>
    );
};

export default WarningModal;
