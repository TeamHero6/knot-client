import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AllLedgerList = () => {
    const [cashBookList, setCashBookList] = useState([]);
    const [bankBookList, setBankBookList] = useState([]);
    const loggerInfo = useSelector(state => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`http://localhost:5000/cashBook/${companyName}`)
            .then((res) => res.json())
            .then((data) => setCashBookList(data.reverse()));
    }, [cashBookList, companyName]);

    // console.log(cashBookList, companyName);

    useEffect(() => {
        fetch(`http://localhost:5000/bankBook/${companyName}`)
            .then((res) => res.json())
            .then((data) => setBankBookList(data.reverse()));
    }, [bankBookList, companyName]);

    // console.log(bankBookList, companyName);

    return (
        <div>
            <div className="w-full">
                <div className="flex gap-5"></div>
                <h1 className="font-semibold text-xl ml-5">Cash Book</h1>
                <div className="w-full mt-5 mb-5 h-80 overflow-auto">
                    <table class="shadow-2xl border-2 border-cyan-300 w-full text-base overflow-hidden ">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                    Data
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Voucher No
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Expense Head
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Expense Type
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {cashBookList.map((cashBook) => (
                                <tr
                                    key={cashBook._id}
                                    className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                        {cashBook.date}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {cashBook.voucherNo}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {cashBook.expenseHead}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {cashBook.expenseType}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {cashBook.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h1 className="font-semibold text-xl ml-5">Bank Book</h1>
                <div className="w-full h-80 mt-5 mb-5 overflow-y-auto">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-full h-10 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                    Data
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Voucher No
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Expense Head
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Expense Type
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bankBookList.map((bankBook) => (
                                <tr
                                    key={bankBook._id}
                                    className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                        {bankBook.date}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {bankBook.voucherNo}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {bankBook.expenseHead}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {bankBook.expenseType}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {bankBook.amount}
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

export default AllLedgerList;
