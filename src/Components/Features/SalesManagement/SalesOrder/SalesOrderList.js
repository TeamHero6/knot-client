import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const SalesOrderList = () => {
    const [orderList, setOrderList] = useState([]);
    const loggerInfo = useSelector(state => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`http://localhost:5000/addNewOrder/${companyName}`)
            .then((res) => res.json())
            .then((data) => setOrderList(data.reverse()));
    }, [orderList, companyName]);

    const handleOrderCancel = (id) => {
        const url = `http://localhost:5000/addNewOrder/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ isCancel: "cancelled" }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    // setIsOrderCancel(data);
                    toast.success("Successfully updated your Sales Order info");
                }
            });
    };

    const latestOrderList = orderList.filter(order => order.isCancel !== 'cancelled');

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
                        {latestOrderList.map((order) => (
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
                                <td className="py-3 px-6">
                                    <button
                                        onClick={() => handleOrderCancel(order._id)}
                                        className='flex items-center gap-2 bg-red-600 py-2 px-6 text-white font-bold rounded border border-white hover:bg-white hover:text-red-600 hover:outline-1 hover:border hover:border-red-600 hover: shadow-red-400 hover: shadow-sm'>
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesOrderList;
