import React, { useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import ItemDetailsModal from "./ItemDetailsModal";
import ItemsList from "./ItemsList";

const Items = () => {
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const [addNewItem, setAddNewItem] = useState(false);
    const [salesAmountValue, setSalesAmountValue] = useState(0);
    const [purchaseAmount, setPurchaseAmount] = useState();
    const [revenue, setRevenue] = useState(0);
    const [tax, setTax] = useState(0);
    const [singleItemDetail, setSingleItemDetail] = useState({});

    const { companyName } = loggerInfo;

    const handlePurchaseAmount = (event) => {
        setPurchaseAmount(event.target.value);
    };
    const handleRevenue = (event) => {
        setRevenue(event.target.value);
    };
    const handleTax = (event) => {
        const taxInput = event.target.value;
        setTax(taxInput);
        const totalAmount =
            parseInt(purchaseAmount) +
            (parseInt(purchaseAmount) * parseInt(revenue)) / 100 +
            parseInt(taxInput);
        setSalesAmountValue(totalAmount);
    };
    const handleAddProduct = (e) => {
        e.preventDefault();
        const productName = e.target.productName.value;
        const productId = e.target.productId.value;
        const productTitle = e.target.productTitle.value;
        const flavour = e.target.flavour.value;
        const color = e.target.color.value;
        const vendorName = e.target.vendorName.value;

        const product = {
            productName,
            productId,
            productTitle,
            flavour,
            color,
            purchaseAmount,
            revenue,
            tax,
            salesAmountValue,
            vendorName,
            companyName
        };

        fetch(
            "http://localhost:5000/addNewProduct",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(product),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                    setPurchaseAmount("");
                    setSalesAmountValue("");
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
                    Add New Item
                </button>{" "}
                <br />
            </div>
            {addNewItem ? (
                <div>
                    <div className="md:w-3/5 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
                        <form onSubmit={handleAddProduct}>
                            {/* ----- Product Details */}
                            <div>
                                <h1 className="font-bold text-center text-purple-800 mb-2 text-lg">
                                    Product Details
                                </h1>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-40"
                                        htmlFor="name"
                                    >
                                        Product name :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="productName"
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
                                        Product id :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="productId"
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
                                        Product title :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="productTitle"
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
                                        Flavour :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="flavour"
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
                                        Color :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="color"
                                        id=""
                                        placeholder=""
                                    />{" "}
                                    <br />
                                </div>
                            </div>
                            {/* ----- Sales Info */}
                            <div>
                                <h1 className="font-bold text-center text-purple-800 mb-2 text-lg mt-4">
                                    Sales Info
                                </h1>
                                <div className="flex items-center gap-4 text-center">
                                    <div className="">
                                        <input
                                            onChange={handlePurchaseAmount}
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="number"
                                            name="purchaseAmount"
                                            id=""
                                            placeholder=""
                                            required
                                        />{" "}
                                        <br />
                                        <label
                                            className="font-bold w-40 whitespace-nowrap"
                                            htmlFor="name"
                                        >
                                            Purchase amount
                                        </label>{" "}
                                        <br />
                                    </div>
                                    <div className="">
                                        <input
                                            onChange={handleRevenue}
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="number"
                                            name="revenue"
                                            id=""
                                            placeholder=""
                                            required
                                        />{" "}
                                        <br />
                                        <label
                                            className="font-bold w-40 whitespace-nowrap"
                                            htmlFor="name"
                                        >
                                            Revenue(in %)
                                        </label>{" "}
                                        <br />
                                    </div>
                                    <div className="">
                                        <input
                                            onBlur={handleTax}
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="number"
                                            name="tax"
                                            id=""
                                            placeholder=""
                                            required
                                        />{" "}
                                        <br />
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Tax
                                        </label>{" "}
                                        <br />
                                    </div>
                                    <div className="">
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none appearance-none"
                                            type="number"
                                            name="salesAmount"
                                            id=""
                                            placeholder=""
                                            value={salesAmountValue}
                                            required
                                        />{" "}
                                        <br />
                                        <label
                                            className="font-bold w-40"
                                            htmlFor="name"
                                        >
                                            Sales amount
                                        </label>{" "}
                                        <br />
                                    </div>
                                </div>
                            </div>
                            {/* ----- Purchase Information */}
                            <div>
                                <h1 className="font-bold text-center text-purple-800 mb-2 text-lg mt-4">
                                    Purchase information
                                </h1>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-40"
                                        htmlFor="name"
                                    >
                                        Purchase price :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="number"
                                        name="purchasePrice"
                                        value={purchaseAmount}
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
                                        Vendor name :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="vendorName"
                                        id=""
                                        placeholder=""
                                        required
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
                                    Add Item
                                </button>{" "}
                                <br />
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                ""
            )}
            <ItemsList setSingleItemDetail={setSingleItemDetail}></ItemsList>
            <ItemDetailsModal
                singleItemDetail={singleItemDetail}
            ></ItemDetailsModal>
        </div>
    );
};

export default Items;
