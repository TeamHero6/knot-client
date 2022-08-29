import React, { useEffect, useState } from "react";

const UserPromotion = () => {
    const [promotions, setPromotions] = useState([]);
    const [transfers, setTransfers] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/performance")
            .then((res) => res.json())
            .then((data) => setPromotions(data));
    }, []);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/transfer")
            .then((res) => res.json())
            .then((data) => setTransfers(data.reverse()));
    }, []);

    return (
        <div className="w-full">
            <div className="mx-3">
                <h1 className="text-2xl text-green-500 font-bold mt-5 mx-6">
                    Employee Promotion Database
                </h1>
                <div className="w-full mb-5 flex justify-between rounded py-6 px-6 mt-5">
                    <table className="shadow-2xl border-2 border-cyan-300 w-full text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Promotion Date
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Employee ID
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Department
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Designation
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Increment
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {promotions?.map((promotion) => (
                                <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {promotion.Promotion_Date}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {promotion.Name}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {promotion.Employee_ID}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {promotion.Department}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {promotion.Designation}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {promotion.Increment_Salary}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="m-8">
                <h1 className="text-2xl font-bold mt-12 mb-6">
                    Employee Transfer Database
                </h1>
                <div className="overflow-x-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {transfers?.slice(0, 8).map((transfer) => (
                            <div className="p-4 w-80 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <p>
                                    <span className="font-semibold">
                                        Name :{" "}
                                    </span>
                                    {transfer.Name}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Emplouee ID :{" "}
                                    </span>
                                    {transfer.Employee_ID}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Department :{" "}
                                    </span>
                                    {transfer.Department}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        New Location :{" "}
                                    </span>
                                    {transfer.Location}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        New Team Leader :{" "}
                                    </span>
                                    {transfer.Team_Leader}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPromotion;
