import React, { useEffect, useState } from "react";

const VendorList = ({ setSingleVendorDetail }) => {
    const [vendorList, setVendorList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/addNewVendor")
            .then((res) => res.json())
            .then((data) => setVendorList(data.reverse()));
    }, [vendorList]);

    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Vendor List</h1>
            <div className="overflow-auto rounded-none">
                <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        {/* <thead className=' border-b border-cyan-100'> */}
                        <tr>
                            <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                Company Name
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Contact Person
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Phone Number
                            </th>
                            <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendorList.map((vendor) => (
                            <tr
                                key={vendor._id}
                                className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                    {vendor.companyName}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap text-center">
                                    {vendor.contactPerson}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap text-center">
                                    {vendor.mobile}
                                </td>
                                <td className="py-3 px-6 pr-10 whitespace-nowrap">
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
    );
};

export default VendorList;
