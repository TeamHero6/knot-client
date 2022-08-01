import React from "react";

const WarningModal = () => {
    return (
        <div className="w-full bg-[#EEEEEE] rounded-lg lg:w-[50%] mx-auto p-3 px-6">
            <form className="flex flex-col">
                <input type="date" className="bg-transparent my-2" />
                <textarea
                    type="text"
                    placeholder="Reason"
                    className="my-2 p-1 px-3 rounded-md"
                />
                <select name="reason" className="my-2 p-1 px-3 rounded-md">
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
