import React, { useEffect, useState } from "react";
import ItemDetailsModal from "../Items/ItemDetailsModal";

const SalesDashboard = () => {
    const [vendorList, setVendorList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    const [itemList, setItemList] = useState([]);
    const [singleItemDetail, setSingleItemDetail] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/addProduct")
            .then((res) => res.json())
            .then((data) => setItemList(data.reverse()));
    }, [itemList]);

    useEffect(() => {
        fetch("http://localhost:5000/addNewVendor")
            .then((res) => res.json())
            .then((data) => setVendorList(data.reverse()));
    }, [vendorList]);

    useEffect(() => {
        fetch("http://localhost:5000/addCustomer")
            .then((res) => res.json())
            .then((data) => setCustomerList(data.reverse()));
    }, [customerList]);

    return (
        <div>
            <section className="flex justify-center	gap-5">
                <div className="card w-72 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title "></h2>
                        <p>Total Order</p>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-lg">
                            {customerList?.length}
                        </h2>
                        <p>Happy Customer</p>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-lg">
                            {vendorList?.length}
                        </h2>
                        <p>Total Vendor</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="overflow-auto rounded-none mx-auto">
                    <table className="shadow-2xl border-2 border-cyan-300 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            {/* <thead className=' border-b border-cyan-100'> */}
                            <tr>
                                <th className="py-3 text-left px-3 pl-10 whitespace-nowrap">
                                    Product
                                </th>
                                <th className="py-3 text-left px-3 whitespace-nowrap">
                                    Purchase Amount
                                </th>
                                <th className="py-3 text-left px-3 whitespace-nowrap">
                                    Sales Amount
                                </th>
                                <th className="py-3 text-left px-3 whitespace-nowrap">
                                    Vendor
                                </th>
                                <th className="py-3 text-left px-3 pr-10 whitespace-nowrap">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemList.slice(0, 5).map((item) => (
                                <tr
                                    key={item._id}
                                    className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 px-1 pl-10 whitespace-nowrap">
                                        {item.productName}
                                    </td>
                                    <td className="py-3 px-3 whitespace-nowrap text-center">
                                        {item.purchaseAmount} $
                                    </td>
                                    <td className="py-3 px-3 whitespace-nowrap text-center">
                                        {item.salesAmountValue} $
                                    </td>
                                    <td className="py-3 px-3 whitespace-nowrap">
                                        {item.vendorName}
                                    </td>
                                    <td className="py-3 px-3 pr-1 whitespace-nowrap">
                                        <label
                                            for="item-details-modal"
                                            onClick={() =>
                                                setSingleItemDetail(item)
                                            }
                                        >
                                            <span className="underline hover:text-blue-500 hover:font-medium">
                                                Details
                                            </span>
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <ItemDetailsModal
                singleItemDetail={singleItemDetail}
            ></ItemDetailsModal>
        </div>
    );
};

export default SalesDashboard;
