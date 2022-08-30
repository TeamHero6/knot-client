import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Bill = () => {
    const [purchaseOrderList, setPurchaseOrderList] = useState([]);
    const [paidAmount, setPaidAmount] = useState("");
    const [dueAmount, setDueAmount] = useState("");
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(
            `http://localhost:5000/addNewPurchaseOrder/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setPurchaseOrderList(data.result.reverse()));
    }, [purchaseOrderList, companyName]);

    const handlePaidAmount = (event) => {
        const paid = event.target.value;
        setPaidAmount(paid);
    };
    const handleDueAmount = (e) => {
        const due = e.target.value;
        setDueAmount(due);
    };

    const handleSaveBill = (id) => {
        const amount = {
            paidAmount,
            dueAmount,
        };

        if (paidAmount && dueAmount) {
            const url = `http://localhost:5000/addNewPurchaseOrder/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(amount),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data) {
                        toast.success("Successfully updated your payment info");
                    }
                });
        } else {
            toast.error("Please Input Paid amount and Due amount.");
        }
    };

    return (
        <div>
            <div className="bg-white px-2 py-2 overflow-auto">
                <h1 className="text-center text-2xl font-semibold mt-2">
                    Orders Bill
                </h1>
                <table className="shadow-lg border-2 border-cyan-300 min-w-1/2 mx-auto my-4 text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Date
                            </th>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Order No.
                            </th>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Vendor Name
                            </th>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Total Amount($)
                            </th>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Paid Amount($)
                            </th>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Due Amount($)
                            </th>
                            <th className="py-1 sm:py-2 md:py-3 text-left px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                Save Bill
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseOrderList.map((purchaseOrder) => (
                            <tr
                                key={purchaseOrder._id}
                                className="hover:shadow-md hover:bg-cyan-100 duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    {purchaseOrder.orderDate}
                                </td>
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    {purchaseOrder.orderNo}
                                </td>
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    {purchaseOrder.vendorName}
                                </td>
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    {purchaseOrder.totalAmount}
                                </td>
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    <input
                                        defaultValue={purchaseOrder?.paidAmount}
                                        onChange={handlePaidAmount}
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="number"
                                        name="paidAmount"
                                        id=""
                                        required
                                    />
                                </td>
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    <input
                                        defaultValue={purchaseOrder?.dueAmount}
                                        onChange={handleDueAmount}
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="number"
                                        name="dueAmount"
                                        id=""
                                        required
                                    />
                                </td>
                                <td className="py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 lg:px-6 whitespace-nowrap">
                                    <button
                                        onClick={() =>
                                            handleSaveBill(purchaseOrder._id)
                                        }
                                        className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                    >
                                        <AiFillSave />
                                        Save Bill
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-full md:w-1/2 my-6 mx-auto bg-white px-6 py-4 overflow-auto">
                <h1 className="text-xl text-center my-2 font-medium">
                    Vendor Vs Total Amount
                </h1>
                <BarChart width={500} height={250} data={purchaseOrderList}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="vendorName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="totalAmount"
                        name="Total Amount"
                        fill={"#48bb78"}
                    ></Bar>
                </BarChart>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Bill;
