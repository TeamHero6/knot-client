import React from "react";

const AwardModal = ({ refetch }) => {
    const handleAward = (e) => {
        e.preventDefault();
        const awardDate = e.target.date.value;
        const name = e.target.name.value;
        const employeeID = e.target.employeeID.value;
        const department = e.target.Department.value;
        const designation = e.target.designation.value;
        const awardProvidingDate = e.target.awardProvidingDate.value;
        const awardType = e.target.awardType.value;
        const newAward = {
            awardDate,
            name,
            employeeID,
            department,
            designation,
            awardProvidingDate,
            awardType,
        };

        fetch(
            "http://localhost:5000/createAward",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newAward),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    refetch();
                    e.target.reset();
                }
            });
    };
    return (
        <div
            className="w-full bg-[#EEEEEE] rounded-lg lg:w-[50%] mx-auto p-3 px-6"
            onSubmit={handleAward}
        >
            <form className="flex flex-col">
                <input
                    type="date"
                    className="bg-transparent my-2"
                    name="date"
                />
                <input
                    type="text"
                    placeholder="Team Member Name"
                    className="my-2 p-1 px-3 rounded-md"
                    name="name"
                />
                <input
                    type="text"
                    placeholder="Employee ID"
                    className="my-2 p-1 px-3 rounded-md"
                    name="employeeID"
                />
                <input
                    type="text"
                    placeholder="Department"
                    className="my-2 p-1 px-3 rounded-md"
                    name="Department"
                />
                <input
                    type="text"
                    placeholder="Designation"
                    className="my-2 p-1 px-3 rounded-md"
                    name="designation"
                />
                <input
                    type="text"
                    placeholder="Award Providing Date"
                    className="my-2 p-1 px-3 rounded-md"
                    name="awardProvidingDate"
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
