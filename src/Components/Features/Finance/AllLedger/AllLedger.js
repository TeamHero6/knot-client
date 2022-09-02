import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import AllLedgerList from "./AllLedgerList";
import { useSelector } from "react-redux";

const AllLedger = () => {
    const [cashBook, setCashBook] = useState(false);
    const [bankBook, setBankBook] = useState(false);
    const loggerInfo = useSelector(state => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    const handleAddCashBook = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const voucherNo = e.target.voucherNo.value;
        const expenseHead = e.target.expenseHead.value;
        const amount = e.target.amount.value;
        const expenseType = e.target.expenseType.value;

        const CashBook = {
            date,
            voucherNo,
            expenseHead,
            amount,
            expenseType,
            companyName,
        };

        console.log(CashBook);
        fetch("http://localhost:5000/cashBook", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(CashBook),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                }
            });
    };

    const handleAddBankBook = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const voucherNo = e.target.voucherNo.value;
        const expenseHead = e.target.expenseHead.value;
        const amount = e.target.amount.value;
        const expenseType = e.target.expenseType.value;

        const BankBook = {
            date,
            voucherNo,
            expenseHead,
            amount,
            expenseType,
            companyName,
        };
        // console.log(BankBook);
        fetch("http://localhost:5000/bankBook", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(BankBook),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                }
            });
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                <div className="flex gap-5">
                    <div>
                        <button
                            onClick={() => setCashBook(!cashBook)}
                            className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                        >
                            <IoIosAddCircleOutline className="text-2xl" />
                            Direct Expense
                        </button>{" "}
                        <br />
                    </div>

                    <div>
                        <button
                            onClick={() => setBankBook(!bankBook)}
                            className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                        >
                            <IoIosAddCircleOutline className="text-2xl" />
                            Admin Expense
                        </button>{" "}
                        <br />
                    </div>
                </div>
                {cashBook ? (
                    <div className="">
                        <div className="lg:w-3/6 md:w-3/4 mx-auto bg-white shadow-gray-300 border shadow-md rounded px-5 py-5 my-5">
                            <form onSubmit={handleAddCashBook}>
                                <div>
                                    <h1 className="font-bold text-center text-blue-500 mb-2 text-lg">
                                        Direct Expense
                                    </h1>
                                    <div className="md:flex items-center">
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Date :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="date"
                                            name="date"
                                            id=""
                                            placeholder=""
                                            required
                                        />{" "}
                                        <br />
                                    </div>

                                    <div className="md:flex items-center">
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Voucher No :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="text"
                                            name="voucherNo"
                                            id=""
                                            placeholder="Voucher No"
                                            required
                                        />{" "}
                                        <br />
                                    </div>
                                    <div className="md:flex items-center">
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Ledger Type :{" "}
                                        </label>{" "}
                                        <br />
                                        <select
                                            name="expenseType"
                                            id=""
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        >
                                            <option value="" selected disabled>
                                                Select type
                                            </option>
                                            <option value="Cash Book">
                                                Cash Book
                                            </option>
                                            <option value="Bank Book">
                                                Bank Book
                                            </option>
                                        </select>
                                        <br />
                                    </div>
                                    <div className="md:flex items-center">
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Expense Head :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="text"
                                            name="expenseHead"
                                            id=""
                                            placeholder="Expense Head"
                                        />{" "}
                                        <br />
                                    </div>
                                    <div className="md:flex items-center">
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Amount :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="number"
                                            name="amount"
                                            id=""
                                            placeholder="Amount"
                                        />{" "}
                                        <br />
                                    </div>
                                </div>

                                <div className="flex justify-center mt-2">
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                    >
                                        <AiFillSave />
                                        Save
                                    </button>{" "}
                                    <br />
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    ""
                )}


                {bankBook ? (
                    <div>
                        <div className="lg:w-3/6 md:w-3/4 mx-auto bg-white shadow-gray-300 border shadow-md rounded px-5 py-5 my-5">
                            <form onSubmit={handleAddBankBook}>
                                <div>
                                    <h1 className="font-bold text-center text-blue-500 text-lg">
                                        Admin Expense
                                    </h1>
                                    <div className="md:flex items-center">
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Date :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="date"
                                            name="date"
                                            id=""
                                            placeholder=""
                                            required
                                        />{" "}
                                        <br />
                                    </div>

                                    <div className="md:flex items-center">
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Voucher No :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="text"
                                            name="voucherNo"
                                            id=""
                                            placeholder="Voucher No"
                                            required
                                        />{" "}
                                        <br />
                                    </div>

                                    <div className="md:flex items-center">
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Ledger Type :{" "}
                                        </label>{" "}
                                        <br />
                                        <select
                                            name="expenseType"
                                            id=""
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        >
                                            <option value="" selected disabled>
                                                Select type
                                            </option>
                                            <option value="Cash Book">
                                                Cash Book
                                            </option>
                                            <option value="Bank Book">
                                                Bank Book
                                            </option>
                                        </select>
                                        <br />
                                    </div>
                                    <div className="md:flex items-center">
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Expense Head :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="text"
                                            name="expenseHead"
                                            id=""
                                            placeholder="Expense Head"
                                        />{" "}
                                        <br />
                                    </div>
                                    <div className="md:flex items-center">
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Amount :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="number"
                                            name="amount"
                                            id=""
                                            placeholder="Amount"
                                        />{" "}
                                        <br />
                                    </div>
                                </div>

                                <div className="flex justify-center mt-2">
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                    >
                                        <AiFillSave />
                                        Save
                                    </button>{" "}
                                    <br />
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div>
                <AllLedgerList />
            </div>
        </motion.div>
    );
};

export default AllLedger;
