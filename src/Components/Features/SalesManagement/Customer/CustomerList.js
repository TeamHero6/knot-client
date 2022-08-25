import React, { useEffect, useState } from "react";

const CustomerList = () => {
    const [customerList, setCustomerList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/addCustomer")
            .then((res) => res.json())
            .then((data) => setCustomerList(data.reverse()));
    }, [customerList]);

    return (
        <div>
            <h1 className="text-center text-2xl font-bold">
                All Customer List
            </h1>
            <div className="overflow-auto rounded-none">
                <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                Customer Name
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Customer Email
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Mobile No.
                            </th>
                            <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                Address
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerList.map((customer) => (
                            <tr
                                key={customer._id}
                                className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                    {customer.customerName}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {customer.customerEmail}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {customer.mobileNo}
                                </td>
                                <td className="py-3 px-6 pr-10 whitespace-nowrap">
                                    {customer.customerAddress}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerList;
