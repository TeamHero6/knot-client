import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Award = () => {
    const [awards, setAwards] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);

    useEffect(() => {
        fetch(`http://localhost:5000/userAwards/${loggerInfo.email}`)
            .then((res) => res.json())
            .then((data) => setAwards(data.reverse()));
    }, [awards, loggerInfo]);

    return (
        <div className="m-10">
            <div className="overflow-x-auto">
                <h1 className="text-2xl text-orange-500 font-bold my-6">
                    Award Database
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {awards?.slice(0, 20).map((award) => (
                        <div className="px-4 py-2 w-80 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <p className="my-2 font-semibold">{award.name}</p>
                            <p className="font-semibold">
                                {award.employeeEmail}
                            </p>
                            <p>
                                <span className="font-semibold">Title :</span>{" "}
                                {award.awardTitle}
                            </p>
                            <p>
                                <span className="font-semibold">Message :</span>{" "}
                                "{award.successMessage}"{" "}
                            </p>
                            <p className="card-actions justify-end text-gray-400 font-semibold">
                                {award.AwardDate}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Award;
