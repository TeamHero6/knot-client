import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CustomerList = () => {
    const [customerList, setCustomerList] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(
            `http://localhost:5000/addCustomer/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setCustomerList(data.reverse()));
    }, [customerList, companyName]);

    return (
        <div className="mb-8">
            <div className="bg-white px-8">
                <h1 className="text-center text-2xl font-semibold pt-4 mb-2">
                    All Customer List
                </h1>
                <div className="overflow-auto rounded-none">
                    <table className="shadow-lg border-2 border-cyan-300 mx-auto text-base overflow-hidden mb-6 w-full">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Customer Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Customer Email
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Mobile No.
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Address
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerList.map((customer) => (
                                <tr
                                    key={customer._id}
                                    className="hover:shadow-md hover:bg-cyan-100 duration-300 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {customer.customerName}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {customer.customerEmail}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {customer.mobileNo}
                                    </td>
                                    <td className="py-3 px-6">
                                        {customer.customerAddress}
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

export default CustomerList;
