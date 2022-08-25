import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import PurchaseOrderList from "./PurchaseOrderList";
import PurchaseOrderModal from "./PurchaseOrderModal";

const PurchaseOrder = () => {
    const [addNewPurchaseOrder, setAddNewPurchaseOrder] = useState(false);
    const [vendorList, setVendorList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [unitPrice, setUnitPrice] = useState(0);
    const [orderQuantity, setOrderQuantity] = useState(1);
    const [vat, setVat] = useState();
    const [totalAmount, setTotalAmount] = useState(0);
    const [singlePurchaseOrderDetail, setSinglePurchaseOrderDetail] = useState(
        {}
    );

    useEffect(() => {
        fetch("http://localhost:5000/addNewVendor")
            .then((res) => res.json())
            .then((data) => setVendorList(data.reverse()));
    }, [vendorList]);

    useEffect(() => {
        fetch("http://localhost:5000/addProduct")
            .then((res) => res.json())
            .then((data) => setProductList(data.reverse()));
    }, [productList]);

    const handleUnitPrice = (e) => {
        setUnitPrice(e.target.value);
    };

    const handleQuantity = (e) => {
        setOrderQuantity(e.target.value);
    };

    const handleVat = (e) => {
        const vat = e.target.value;
        setVat(vat);
        const totalPrice =
            parseInt(unitPrice) * parseInt(orderQuantity) + parseInt(vat);
        setTotalAmount(totalPrice);
    };

    const handleSetPurchaseOrder = (e) => {
        e.preventDefault();
        const orderDate = e.target.orderDate.value;
        const orderNo = e.target.orderNo.value;
        const productName = e.target.productName.value;
        const productCode = e.target.productCode.value;
        const vendorName = e.target.vendorName.value;

        const newPurchaseOrder = {
            orderDate,
            orderNo,
            productName,
            productCode,
            vendorName,
            orderQuantity,
            unitPrice,
            vat,
            totalAmount,
        };
        // console.log(newOrder);
        fetch("http://localhost:5000/addNewPurchaseOrder", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newPurchaseOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                    setTotalAmount(0);
                    e.target.vendorName.value = "Select Vendor";
                    e.target.productName.value = "Select Product";
                }
            });
    };
    return (
        <div>
            <div>
                <button
                    onClick={() => setAddNewPurchaseOrder(!addNewPurchaseOrder)}
                    className="flex items-center gap-2 bg-green-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm"
                >
                    <IoIosAddCircleOutline className="text-2xl" />
                    New Purchase Order
                </button>{" "}
                <br />
            </div>
            {addNewPurchaseOrder ? (
                <div>
                    <div className="w-3/5 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
                        <form onSubmit={handleSetPurchaseOrder}>
                            <div>
                                <h1 className="font-bold text-center text-purple-800 mb-2 text-lg">
                                    Purchase Order Info
                                </h1>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="orderDate"
                                    >
                                        Date :
                                    </label>
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="date"
                                        name="orderDate"
                                        id=""
                                        placeholder=""
                                    />
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="orderNo"
                                    >
                                        Order No. :
                                    </label>
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="number"
                                        name="orderNo"
                                        id=""
                                        required
                                        placeholder=""
                                    />
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="productName"
                                    >
                                        Product Name:
                                    </label>
                                    <br />
                                    <select
                                        required
                                        name="productName"
                                        id=""
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                    >
                                        <option selected disabled>
                                            Select Product
                                        </option>
                                        {productList.map((product) => (
                                            <option
                                                key={product._id}
                                                value={product.productName}
                                            >
                                                {product.productName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="productCode"
                                    >
                                        Product Code:
                                    </label>
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="productCode"
                                        id=""
                                        placeholder=""
                                        required
                                    />
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="vendorName"
                                    >
                                        Vendor Name:
                                    </label>
                                    <select
                                        required
                                        name="vendorName"
                                        id=""
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                    >
                                        <option selected disabled>
                                            Select Vendor
                                        </option>
                                        {vendorList.map((vendor) => (
                                            <option
                                                key={vendor._id}
                                                value={vendor.companyName}
                                            >
                                                {vendor.companyName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="productQuantity"
                                    >
                                        Product Quantity:
                                    </label>
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="number"
                                        onChange={handleQuantity}
                                        name="productQuantity"
                                        id=""
                                        placeholder=""
                                        required
                                    />
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="unitPrice"
                                    >
                                        Unit Price:
                                    </label>
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="number"
                                        name="unitPrice"
                                        onChange={handleUnitPrice}
                                        id=""
                                        placeholder=""
                                        required
                                    />
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="vat"
                                    >
                                        Vat/Tax:
                                    </label>
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="number"
                                        name="vat"
                                        onBlur={handleVat}
                                        id=""
                                        placeholder=""
                                        required
                                    />
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-44"
                                        htmlFor="name"
                                    >
                                        Total Amount:
                                    </label>
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        value={totalAmount}
                                        type="number"
                                        name="totalAmount"
                                        id=""
                                        placeholder=""
                                        required
                                    />
                                    <br />
                                </div>
                            </div>
                            <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                >
                                    <AiFillSave />
                                    Set Purchase Order
                                </button>
                                <br />
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                ""
            )}
            <PurchaseOrderList
                setSinglePurchaseOrderDetail={setSinglePurchaseOrderDetail}
            ></PurchaseOrderList>
            <PurchaseOrderModal
                singlePurchaseOrderDetail={singlePurchaseOrderDetail}
            ></PurchaseOrderModal>
        </div>
    );
};

export default PurchaseOrder;
