import React, { useState } from 'react';
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import AllLedgerList from './AllLedgerList';


const AllLedger = () => {
    const [cashBook, setCashBook] = useState(false);
    const [bankBook, setBankBook] = useState(false);


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
        };

        console.log(CashBook);
        fetch(
            "http://localhost:5000/cashBook",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(CashBook),
            }
        )
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

        };
        // console.log(BankBook);
        fetch(
            "http://localhost:5000/bankBook",
            {
                method: "POST", 
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(BankBook),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                }
            });
    };
    return (
        <div>
            <div>
                <div className='flex gap-5'>
                    <div>
                        <button
                            onClick={() => setCashBook(!cashBook)}
                            className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                        >
                            <IoIosAddCircleOutline className="text-2xl" />
                            Cash Book
                        </button>{" "}
                        <br />
                    </div>

                    <div>
                        <button
                            onClick={() => setBankBook(!bankBook)}
                            className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                        >
                            <IoIosAddCircleOutline className="text-2xl" />
                            Bank Book
                        </button>{" "}
                        <br />
                    </div>

                </div>
                {cashBook ? (
                    <div>
                        <div className="md:w-3/6 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8 ">
                            <form onSubmit={handleAddCashBook}>

                                <div>
                                    <h1 className="font-bold text-center text-blue-500 mb-2 text-lg">
                                        Cash Book
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
                                            Expense Type :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="text"
                                            name="expenseType"
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

                <div className='flex gap-5'>
                </div>
                {bankBook ? (
                    <div>
                        <div className="md:w-3/6 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
                            <form onSubmit={handleAddBankBook}>

                                <div>
                                    <h1 className="font-bold text-center text-blue-500 mb-2 text-lg">
                                        Bank Book
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
                                            Expense Type :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="text"
                                            name="expenseType"
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
                <AllLedgerList/>
            </div>
        </div>
    );
};

export default AllLedger;