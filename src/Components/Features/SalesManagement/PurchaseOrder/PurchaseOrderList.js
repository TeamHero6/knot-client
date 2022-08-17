import React, { useEffect, useState } from "react";

const PurchaseOrderList = ({ setSinglePurchaseOrderDetail }) => {
    const [purchaseOrderList, setPurchaseOrderList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/addNewPurchaseOrder")
            .then((res) => res.json())
            .then((data) => setPurchaseOrderList(data.reverse()));
    }, [purchaseOrderList]);

    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Purchase Order List</h1>
            <div className="overflow-auto rounded-none">
                <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
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
                            <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseOrderList.map((purchaseOrder) => (
                            <tr
                                key={purchaseOrder._id}
                                className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="py-3 px-6 pl-10 whitespace-nowrap">
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
                                <td className="py-3 px-6 pr-10 whitespace-nowrap">
                                    <label
                                        for="purchase-order-details-modal"
                                        onClick={() =>
                                            setSinglePurchaseOrderDetail(purchaseOrder)
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
    );
};

export default PurchaseOrderList;