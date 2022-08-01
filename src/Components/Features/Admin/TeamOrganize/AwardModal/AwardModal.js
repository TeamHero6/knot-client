import React from "react";

const AwardModal = () => {
    return (
        <div className="w-full bg-[#EEEEEE] rounded-lg lg:w-[50%] mx-auto p-3 px-6">
            <form className="flex flex-col">
                <input type="date" className="bg-transparent my-2" />
                <input
                    type="text"
                    placeholder="Team Member Name"
                    className="my-2 p-1 px-3 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Employee ID"
                    className="my-2 p-1 px-3 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Department"
                    className="my-2 p-1 px-3 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Designation"
                    className="my-2 p-1 px-3 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Award Providing Date"
                    className="my-2 p-1 px-3 rounded-md"
                />
                <select name="awardType" className="my-2 p-1 px-3 rounded-md">
                    <option value="employeeOfTheMonth">
                        Employee of the month
                    </option>
                    <option value="bestTeamMemberOfTheMonth">
                        Best team membe of the month
                    </option>
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

export default AwardModal;
