import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import SalesOrderList from "./SalesOrderList";

const SalesOrder = () => {
    const [addNewOrder, setAddNewOrder] = useState(false);
    const [vendorList, setVendorList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [unitPrice, setUnitPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(
            `http://localhost:5000/addNewVendor/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setVendorList(data.reverse()));
    }, [vendorList, companyName]);

    useEffect(() => {
        fetch(
            `http://localhost:5000/addCustomer/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setCustomerList(data.reverse()));
    }, [customerList, companyName]);

    useEffect(() => {
        fetch(
            `http://localhost:5000/addProduct/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setProductList(data.reverse()));
    }, [productList, companyName]);

    const handleUnitPrice = (e) => {
        setUnitPrice(e.target.value);
    };

    const handleQuantity = (e) => {
        const quantity = e.target.value;
        const total = parseInt(unitPrice) * parseInt(quantity);
        setQuantity(quantity);
        setTotalAmount(total);
    };

    const handleSetOrder = (e) => {
        e.preventDefault();
        const customerName = e.target.customerName.value;
        const customerEmail = e.target.customerEmail.value;
        const mobileNo = e.target.mobileNo.value;
        const customerAddress = e.target.customerAddress.value;
        const orderDate = e.target.orderDate.value;
        const paymentType = e.target.paymentType.value;
        const productName = e.target.productName.value;
        const productCode = e.target.productCode.value;
        const vendorName = e.target.vendorName.value;

        const newOrder = {
            customerName,
            customerEmail,
            mobileNo,
            customerAddress,
            orderDate,
            paymentType,
            productName,
            productCode,
            unitPrice,
            quantity,
            totalAmount,
            vendorName,
            companyName,
        };
        console.log(newOrder);
        fetch(
            "http://localhost:5000/addNewOrder",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newOrder),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                    setTotalAmount(0);
                }
            });
    };

    return (
        <div>
            <div>
                <button
                    onClick={() => setAddNewOrder(!addNewOrder)}
                    className="flex items-center gap-2 bg-green-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm"
                >
                    <IoIosAddCircleOutline className="text-2xl" />
                    Add New Order
                </button>{" "}
                <br />
            </div>
            {addNewOrder ? (
                <div>
                    <div className="w-10/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
                        <form onSubmit={handleSetOrder}>
                            <div className="grid grid-cols-4">
                                {/* ----- Customer Info */}
                                <div className="col-span-3">
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
                                        <select
                                            required
                                            name="customerName"
                                            id=""
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        >
                                            <option value="" selected disabled>
                                                Select Customer
                                            </option>
                                            {customerList.map((customer) => (
                                                <option
                                                    key={customer._id}
                                                    value={
                                                        customer.customerName
                                                    }
                                                >
                                                    {customer.customerName}
                                                </option>
                                            ))}
                                        </select>
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
                                            required
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
                                            Mobile No. :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="number"
                                            name="mobileNo"
                                            id=""
                                            required
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
                                            required
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
                                            Order Date :{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="date"
                                            name="orderDate"
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
                                            Payment Type :{" "}
                                        </label>{" "}
                                        <br />
                                        <select
                                            name="paymentType"
                                            id=""
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        >
                                            <option value="" selected disabled>
                                                Select type
                                            </option>
                                            <option value="Cash on Delivery">
                                                Cash on Delivery
                                            </option>
                                            <option value="Online Payment">
                                                Online Payment
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4 text-center">
                                            <div className="">
                                                <label
                                                    className="font-bold w-40 whitespace-nowrap"
                                                    htmlFor="name"
                                                >
                                                    Product Name
                                                </label>{" "}
                                                <br />
                                                <select
                                                    required
                                                    name="productName"
                                                    id=""
                                                    className="py-1 pl-3 w-32 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                                >
                                                    <option
                                                        value=""
                                                        selected
                                                        disabled
                                                    >
                                                        Select Product
                                                    </option>
                                                    {productList.map(
                                                        (product) => (
                                                            <option
                                                                key={
                                                                    product._id
                                                                }
                                                                value={
                                                                    product.productName
                                                                }
                                                            >
                                                                {
                                                                    product.productName
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div className="">
                                                <label
                                                    className="font-bold w-40 whitespace-nowrap"
                                                    htmlFor="name"
                                                >
                                                    Product Code
                                                </label>{" "}
                                                <br />
                                                <input
                                                    className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                                    type="text"
                                                    name="productCode"
                                                    id=""
                                                    placeholder=""
                                                    required
                                                />{" "}
                                                <br />
                                            </div>
                                            <div className="">
                                                <label
                                                    className="font-bold w-40"
                                                    htmlFor="name"
                                                >
                                                    Unit Price
                                                </label>{" "}
                                                <br />
                                                <input
                                                    className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                                    type="number"
                                                    name="unitPrice"
                                                    onChange={handleUnitPrice}
                                                    id=""
                                                    placeholder=""
                                                    required
                                                />{" "}
                                                <br />
                                            </div>
                                            <div className="">
                                                <label
                                                    className="font-bold w-40"
                                                    htmlFor="name"
                                                >
                                                    Quantity
                                                </label>{" "}
                                                <br />
                                                <input
                                                    className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                                    type="number"
                                                    onBlur={handleQuantity}
                                                    name="quantity"
                                                    id=""
                                                    placeholder=""
                                                    required
                                                />{" "}
                                                <br />
                                            </div>
                                            <div className="">
                                                <label
                                                    className="font-bold w-40"
                                                    htmlFor="name"
                                                >
                                                    Total
                                                </label>{" "}
                                                <br />
                                                <input
                                                    className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none appearance-none"
                                                    value={totalAmount}
                                                    type="number"
                                                    name="totalAmount"
                                                    id=""
                                                    placeholder=""
                                                    required
                                                />{" "}
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ----- Vendor Info */}
                                <div className="col-span-1 mx-4">
                                    <h1 className="font-bold text-center text-purple-800 mb-2 text-lg">
                                        Enlisted Vendor
                                    </h1>
                                    <label
                                        className="font-bold whitespace-nowrap block text-center"
                                        htmlFor="name"
                                    >
                                        Vendor Name
                                    </label>
                                    <select
                                        required
                                        name="vendorName"
                                        id=""
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                    >
                                        <option value="" selected disabled>
                                            Select Vendor
                                        </option>
                                        {vendorList.map((vendor) => (
                                            <option
                                                key={vendor._id}
                                                value={vendor.company}
                                            >
                                                {vendor.company}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                >
                                    <AiFillSave />
                                    Set Order
                                </button>{" "}
                                <br />
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                ""
            )}
            <SalesOrderList></SalesOrderList>
        </div>
    );
};

export default SalesOrder;
