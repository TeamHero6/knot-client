import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { AiFillSave } from 'react-icons/ai';

const Bill = () => {
    const [purchaseOrderList, setPurchaseOrderList] = useState([]);
    const [paidAmount, setPaidAmount] = useState();
    const [dueAmount, setDueAmount] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/addNewPurchaseOrder")
            .then((res) => res.json())
            .then((data) => setPurchaseOrderList(data.reverse()));
    }, [purchaseOrderList]);

    const handlePaidAmount = (event) => {
        const paid = event.target.value;
        console.log(paid)
        setPaidAmount(paid);
    };
    const handleDueAmount = e => {
        const due = e.target.value;
        console.log(due)
        setDueAmount(due);
    };

    const handleSaveBill = () => {
        // const order = {

        // }
    }

    return (
        <div>
            <h1 className='text-center text-2xl font-semibold mt-2'>Orders Bill</h1>
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
                            Vendor
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Total Amount
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Paid Amount
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Due Amount
                        </th>
                        <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                            Save Bill
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
                                {purchaseOrder.vendorName}
                            </td>
                            <td className="py-3 px-6 whitespace-nowrap">
                                ${purchaseOrder.totalAmount}
                            </td>
                            <td className="py-3 px-6 whitespace-nowrap">
                                <input
                                    value={paidAmount}
                                    onChange={handlePaidAmount}
                                    className='py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="number" name="paidAmount" id="" required />
                            </td>
                            <td className="py-3 px-6 whitespace-nowrap">
                                <input
                                    defaultValue={dueAmount}
                                    onChange={handleDueAmount}
                                    className='py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="number" name="dueAmount" id="" required />
                            </td>
                            <td className="py-3 px-6 pr-10 whitespace-nowrap">
                                <button
                                    onClick={handleSaveBill}
                                    className='flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm'>
                                    <AiFillSave />Save Bill
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Bill;