import React, { useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import CustomerList from "./CustomerList";

const Customer = () => {
    const [addNewItem, setAddNewItem] = useState(false);
    const loggerInfo = useSelector(state => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    const handleAddCustomer = (e) => {
        e.preventDefault();
        const customerName = e.target.customerName.value;
        const customerEmail = e.target.customerEmail.value;
        const mobileNo = e.target.mobileNo.value;
        const customerAddress = e.target.customerAddress.value;

        const newCustomer = {
            customerName,
            customerEmail,
            mobileNo,
            customerAddress,
            companyName
        };
        console.log(newCustomer);
        fetch(
            "http://localhost:5000/addNewCustomer",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newCustomer),
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
                <button
                    onClick={() => setAddNewItem(!addNewItem)}
                    className="flex items-center gap-2 bg-green-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm"
                >
                    <IoIosAddCircleOutline className="text-2xl" />
                    Add New Customer
                </button>{" "}
                <br />
            </div>
            {addNewItem ? (
                <div>
                    <div className="md:w-3/5 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
                        <form onSubmit={handleAddCustomer}>
                            {/* ----- Customer Details */}
                            <div>
                                <h1 className="font-bold text-center text-purple-800 mb-2 text-lg">
                                    Customer Details
                                </h1>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="name"
                                    >
                                        Customer Name :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="customerName"
                                        id=""
                                        placeholder=""
                                        required
                                    />{" "}
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="name"
                                    >
                                        Customer Email :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="email"
                                        name="customerEmail"
                                        id=""
                                        placeholder=""
                                        required
                                    />{" "}
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="name"
                                    >
                                        Mobile No. :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="number"
                                        name="mobileNo"
                                        id=""
                                        placeholder=""
                                    />{" "}
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="name"
                                    >
                                        Address :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="customerAddress"
                                        id=""
                                        placeholder=""
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
                                    Add Customer
                                </button>{" "}
                                <br />
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                ""
            )}
            <CustomerList></CustomerList>
        </div>
    );
};

export default Customer;
