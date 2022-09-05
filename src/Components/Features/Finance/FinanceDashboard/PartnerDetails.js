import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PartnerDetails = () => {
    const [partnerList, setPartnerList] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`https://knot-business-solution-server.herokuapp.com/partner/${companyName}`)
            .then((res) => res.json())
            .then((data) => setPartnerList(data.reverse()));
    }, [partnerList, companyName]);

    // console.log(partnerList, companyName);

    return (
        <div className="">
            <div>
                <h2 className="text-base font-semibold">Partner List</h2>
                <div className="overflow-auto">
                    <table class="shadow-2xl border-2 border-cyan-300  mx-auto my-8 text-base w-1/2 overflow-hidden  lg:w-full">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100 ">
                            <tr className="w-1/2 lg:w-1/2">
                                <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                    Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Contact Number
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Email
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {partnerList.map((partner) => (
                                <tr
                                    key={partner._id}
                                    className="hover:shadow-md hover:bg-cyan-100  duration-500 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                        {partner.partnerName}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {partner.contactNumber}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {partner.email}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PartnerDetails;
