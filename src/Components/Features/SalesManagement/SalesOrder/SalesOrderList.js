import React, { useEffect, useState } from "react";

const SalesOrderList = () => {
    const [orderList, setOrderList] = useState([]);
    // const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/addNewOrder")
            .then((res) => res.json())
            .then((data) => setOrderList(data.reverse()));
    }, [orderList]);

    // useEffect(() => {
    //     let sum = 0;
    //     orderList.map(order => {
    //         sum = sum + parseInt(order.quantity);
    //     })
    //     setTotalQuantity(sum);
    // }, []);

    return (
        <div>
            <h1 className="text-center text-2xl font-bold">All Order List</h1>
            <div className="overflow-auto rounded-none bg-white">
                <table className="shadow-sm w-full border-2 border-cyan-300 mx-4 my-6 text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
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
                            <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                Total Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList.map((order) => (
                            <tr
                                key={order._id}
                                className="hover:shadow-md hover:bg-cyan-100 duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="py-3 px-6 pl-10 whitespace-nowrap">
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
                                <td className="py-3 px-6 pr-10 whitespace-nowrap">
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

export default SalesOrderList;
