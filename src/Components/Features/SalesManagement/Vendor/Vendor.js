import React, { useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import VendorDetailsModal from "./VendorDetailsModal";
import VendorList from "./VendorList";
import { useSelector } from "react-redux";

const Vendor = () => {
    const [addNewVendor, setNewVendor] = useState(false);
    const [singleVendorDetail, setSingleVendorDetail] = useState({});
    const loggerInfo = useSelector(state => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    const handleAddVendor = (e) => {
        e.preventDefault();
        const company = e.target.company.value;
        const address = e.target.address.value;
        const contactPerson = e.target.contactPerson.value;
        const mobile = e.target.mobile.value;
        const email = e.target.email.value;
        const bankName = e.target.bankName.value;
        const accountHolder = e.target.accountHolder.value;
        const accountNo = e.target.accountNo.value;
        const branchName = e.target.branchName.value;

        const vendor = {
            company,
            address,
            contactPerson,
            mobile,
            email,
            bankName,
            accountHolder,
            accountNo,
            branchName,
            companyName
        };

        console.log(vendor);

        fetch(
            "https://knot-business-solution-server.herokuapp.com/addNewVendor",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(vendor),
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
                    onClick={() => setNewVendor(!addNewVendor)}
                    className="flex items-center gap-2 bg-green-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm"
                >
                    <IoIosAddCircleOutline className="text-2xl" />
                    Add New Vendor
                </button>{" "}
                <br />
            </div>
            {addNewVendor ? (
                <div>
                    <div className="md:w-3/5 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
                        <form onSubmit={handleAddVendor}>
                            {/* ----- Vendor Details ----- */}
                            <div>
                                <h1 className="font-bold text-center text-purple-800 mb-2 text-lg">
                                    Vendor Details
                                </h1>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-40"
                                        htmlFor="name"
                                    >
                                        Company Name:{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="company"
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
                                        Address:{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="address"
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
                                        Contact Person:{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="contactPerson"
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
                                        Mobile:{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="number"
                                        name="mobile"
                                        id=""
                                        placeholder=""
                                    />{" "}
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-40"
                                        htmlFor="name"
                                    >
                                        Email:{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="email"
                                        name="email"
                                        id=""
                                        placeholder=""
                                    />{" "}
                                    <br />
                                </div>
                            </div>{" "}
                            <br />
                            {/* ----- Vendor Account Details ----- */}
                            <div>
                                <h1 className="font-bold text-center text-purple-800 mb-2 text-lg">
                                    Vendor Account Details
                                </h1>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-40"
                                        htmlFor="name"
                                    >
                                        Bank Name:{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="bankName"
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
                                        Account Holder:{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="accountHolder"
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
                                        Account No:{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="accountNo"
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
                                        Branch Name:{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="branchName"
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
                                    Add Vendor
                                </button>{" "}
                                <br />
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                ""
            )}
            <VendorList
                setSingleVendorDetail={setSingleVendorDetail}
            ></VendorList>
            <VendorDetailsModal
                singleVendorDetails={singleVendorDetail}
            ></VendorDetailsModal>
        </div>
    );
};

export default Vendor;
