import React, { useEffect, useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const PurchaseOrderList = ({ setSinglePurchaseOrderDetail }) => {
    const [purchaseOrderList, setPurchaseOrderList] = useState([]);

    useEffect(() => {
        fetch(
            "https://knot-business-solution-server.herokuapp.com/addNewPurchaseOrder"
        )
            .then((res) => res.json())
            .then((data) => setPurchaseOrderList(data.reverse()));
    }, [purchaseOrderList]);

    return (
        <div>
            <div className="grid grid-cols-6 bg-white">
                <div className="col-span-4 overflow-auto rounded-none">
                    <table className="shadow-lg border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <caption>
                            <h1 className="text-center text-2xl font-bold mb-2">
                                Purchase Order List
                            </h1>
                        </caption>
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Date
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Order No.
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Product
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Vendor
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchaseOrderList.map((purchaseOrder) => (
                                <tr
                                    key={purchaseOrder._id}
                                    className="hover:shadow-md hover:bg-cyan-100 duration-500 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {purchaseOrder.orderDate}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {purchaseOrder.orderNo}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {purchaseOrder.productName}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {purchaseOrder.vendorName}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <label
                                            for="purchase-order-details-modal"
                                            onClick={() =>
                                                setSinglePurchaseOrderDetail(
                                                    purchaseOrder
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
                <div className="col-span-2 mx-6 my-auto">
                    <div className="mx-auto my-auto shadow-2xl px-6 py-4 rounded-3xl">
                        <p className="font-semibold text-lg my-2">
                            Total Vendor: 25
                        </p>
                        <p className="font-semibold text-lg my-2">
                            Total Purchase Order: 75
                        </p>
                        <p className="font-semibold text-lg my-2">
                            Vendor Paid Amount: 551200 $
                        </p>
                        <p className="font-semibold text-lg my-2">
                            Vendor Due Amount: 154800 $
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="bg-white px-6 py-4">
                    <h1 className="text-xl text-center my-2 font-medium">
                        Vendor Vs Total Price
                    </h1>
                    <BarChart width={500} height={250} data={purchaseOrderList}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="vendorName" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="totalAmount" fill="#8884d8" />
                    </BarChart>
                </div>
                <div className="bg-white px-6 py-4">
                    <h1 className="text-xl text-center my-2 font-medium">
                        Product Vs Unit Price
                    </h1>
                    <BarChart width={500} height={250} data={purchaseOrderList}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="productName" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="unitPrice" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default PurchaseOrderList;
