import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PartnerList = ({ setSinglePartnerDetail }) => {
    const [partnerList, setPartnerList] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`http://localhost:5000/partner/${companyName}`)
            .then((res) => res.json())
            .then((data) => setPartnerList(data.reverse()));
    }, [partnerList, companyName]);

    // console.log(partnerList, companyName);

    return (
        <div>
            <div>
                <div className="w-full">
                    <h2 className="text-base font-semibold">Partner Details</h2>
                    <div className="overflow-auto">
                        <table class="shadow-sm border-2 border-cyan-300 mx-auto my-12 text-base overflow-hidden">
                            <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                                <tr>
                                    <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                        Name
                                    </th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        Contact Number
                                    </th>
                                    <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {partnerList.map((partners) => (
                                    <tr
                                        key={partners._id}
                                        className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                                    >
                                        <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                            {partners.partnerName}
                                        </td>
                                        <td className="py-3 px-6 whitespace-nowrap text-center">
                                            {partners.contactNumber}
                                        </td>
                                        <td className="py-3 px-6 pr-10 whitespace-nowrap">
                                            <label
                                                for="item-details-modal"
                                                onClick={() =>
                                                    setSinglePartnerDetail(
                                                        partners
                                                    )
                                                }
                                            >
                                                <span className="underline hover:text-blue-500 hover:font-medium">
                                                    Details
                                                </span>
                                            </label>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerList;
