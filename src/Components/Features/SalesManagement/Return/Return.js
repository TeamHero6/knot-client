import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Return = () => {
    const [cancelledOrder, setCancelledOrder] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/cancelledSalesOrder")
            .then(res => res.json())
            .then(data => setCancelledOrder(data))
    }, [])
    return (
        <div>
            <div className="overflow-auto rounded-none bg-white p-6">
                <h1 className="text-center text-2xl font-bold mb-4">All Order List</h1>
                <table className="shadow-sm w-full border-2 border-cyan-300 text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Customer Name
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Product Name
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Unit Price
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Quantity
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Total Amount
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Cancel Order
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cancelledOrder.map((order) => (
                            <tr
                                key={order._id}
                                className="hover:shadow-md hover:bg-cyan-100 duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {order.customerName}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {order.productName}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {order.unitPrice}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {order.quantity}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {order.totalAmount}
                                </td>
                                <td className="py-3 ">
                                    {
                                        order.isCancel ?
                                            <button
                                                disabled
                                                className='flex items-center bg-red-600	py-2 px-2 ml-7 text-white font-bold rounded border border-white'>Cancelled</button>
                                            :
                                            ""
                                    }
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