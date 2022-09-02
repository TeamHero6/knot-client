import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Return = () => {
    const [cancelledOrder, setCancelledOrder] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        const url = `http://localhost:5000/cancelledSalesOrder/${companyName}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCancelledOrder(data));
    }, [companyName]);

    return (
        <div>
            <div className="overflow-auto rounded-none bg-white p-6">
                <h1 className="text-center text-2xl font-semibold mb-4">
                    Returned Order
                </h1>
                <table className="shadow-sm w-full border-2 border-cyan-300 text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Customer Name
                            </th>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Product Name
                            </th>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Unit Price
                            </th>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Quantity
                            </th>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Total Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cancelledOrder.map((order) => (
                            <tr
                                key={order._id}
                                className="hover:shadow-md hover:bg-cyan-100 duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    {order.customerName}
                                </td>
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    {order.productName}
                                </td>
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    {order.unitPrice}
                                </td>
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    {order.quantity}
                                </td>
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    {order.totalAmount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Return;
