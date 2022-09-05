import React, { useEffect, useState } from "react";
import HRAwardCard from "./HRAwardCard";
import { useSelector } from "react-redux";

const HRWarning = () => {
    const [warning, setWarning] = useState([]);
    const [award, setAward] = useState([]);
    const loggerInfo = useSelector(state => state.auth.loggerInfo);
    const { companyName } = loggerInfo;


    useEffect(() => {
        fetch(`https://knot-business-solution-server.herokuapp.com/warnings/${companyName}`)
            .then((res) => res.json())
            .then((data) => setWarning(data));
    }, [warning, companyName]);

    // console.log(warning, companyName);

    useEffect(() => {
        fetch(`https://knot-business-solution-server.herokuapp.com/award/${companyName}`)
            .then((res) => res.json())
            .then((data) => setAward(data));
    }, [award, companyName]);
    console.log(award, companyName);

    return (
        <div>
            <div className="bg-white px-5 pt-5"> 
                <h1 className="font-semibold text-cyan-500 text-xl ml-5">
                    Warning Database
                </h1>
                <div class="rounded-none overflow-auto h-80 w-full ">
                    <table class="lg:w-full shadow-sm border-2 border-cyan-300 mt-5  mx-auto text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Warning Date
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Employee Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Reason of Warning
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Warning Type
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {warning.map((w) => (
                                <tr className="hover:shadow-md hover:bg-cyan-100 duration-500 cursor-pointer border-b border-cyan-100">
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {w.warningDate}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {w.name}
                                    </td>
                                    <td className="py-3 px-6 w-5 whitespace-nowrap">
                                        <p className="pl-2">
                                            {w.warningReason}{" "}
                                        </p>
                                    </td>

                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {w.type}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-5">
                <h1 className="font-semibold text-xl text-orange-500 mb-4 ml-5">
                    Award Database
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mb-10">
                    {award.slice(0, 20).map((award) => (
                        <HRAwardCard award={award}></HRAwardCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HRWarning;