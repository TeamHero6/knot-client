import React from "react";

const TeamManagement = () => {
    return (
        <div class="rounded-none w-full">
            <table class=" border-2 border-custom-cyan-300 mx-auto text-base overflow-hidden">
                <thead className="text-white bg-[#FFFFFF]  border-b border-custom-cyan-100">
                    {/* <thead className=' border-b border-cyan-100'> */}
                    <tr>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Date
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            ID
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Name
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Department
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Designation
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Types of leave
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            View details
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Leave Request
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Approval Status
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            SAVE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:shadow-md hover:bg-custom-cyan-100 duration-500 cursor-pointer border-b border-custom-cyan-100">
                        <td className="py-3 px-6 whitespace-nowrap">1</td>
                        <td className="py-3 px-6 whitespace-nowrap">
                            Cy Ganderton
                        </td>
                        <td className="py-3 px-6 whitespace-nowrap">
                            Quality Control Specialist
                        </td>
                        <td className="py-3 px-6 whitespace-nowrap">Blue</td>
                        <td className="py-3 px-6 whitespace-nowrap">
                            This is fifth column
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TeamManagement;
