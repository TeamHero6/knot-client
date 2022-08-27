import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const VendorList = ({ setSingleVendorDetail }) => {
    const [vendorList, setVendorList] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(
            `https://knot-business-solution-server.herokuapp.com/addNewVendor/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setVendorList(data.reverse()));
    }, [vendorList, companyName]);

    return (
        <div>
            <div className="bg-white mx-auto pt-4 px-6">
                <h1 className="text-center text-2xl font-semibold mb-2">
                    Vendor List
                </h1>
                <div className="overflow-auto rounded-none">
                    <table className="shadow-lg border-2 border-cyan-300 w-full mx-auto text-base overflow-hidden mb-8">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Company Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Contact Person
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Phone Number
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendorList.map((vendor) => (
                                <tr
                                    key={vendor._id}
                                    className="hover:shadow-md hover:bg-cyan-100 duration-300 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {vendor.company}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {vendor.contactPerson}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {vendor.mobile}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <label
                                            for="item-details-modal"
                                            onClick={() =>
                                                setSingleVendorDetail(vendor)
                                            }
                                        >
                                            <span className="underline hover:text-blue-500 hover:font-medium hover:cursor-pointer">
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
    );
};

export default VendorList;
