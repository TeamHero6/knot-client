import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import ItemDetailsModal from "../Items/ItemDetailsModal";

const SalesDashboard = () => {
    const [vendorList, setVendorList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    const [itemList, setItemList] = useState([]);
    const [singleItemDetail, setSingleItemDetail] = useState({});
    const [purchaseOrderList, setPurchaseOrderList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(
            `https://knot-business-solution-server.herokuapp.com/addProduct/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setItemList(data.reverse()));
    }, [itemList, companyName]);

    useEffect(() => {
        fetch(
            `https://knot-business-solution-server.herokuapp.com/addNewVendor/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setVendorList(data.reverse()));
    }, [vendorList, companyName]);

    useEffect(() => {
        fetch(
            `https://knot-business-solution-server.herokuapp.com/addCustomer/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setCustomerList(data.reverse()));
    }, [companyName]);

    useEffect(() => {
        fetch(
            `https://knot-business-solution-server.herokuapp.com/addNewPurchaseOrder/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setPurchaseOrderList(data.result.reverse()));
    }, [purchaseOrderList, companyName]);

    useEffect(() => {
        fetch(`https://knot-business-solution-server.herokuapp.com/addNewOrder/${companyName}`)
            .then((res) => res.json())
            .then((data) => setOrderList(data.reverse()));
    }, [orderList, companyName]);

    return (
        <div>
            <section className="flex justify-center	gap-5">
                <div className="card w-40 md:w-72 bg-base-100 shadow-xl">
                    <div className="card-body text-center px-0 sm:px-8">
                        <h2 className="font-bold text-lg">{orderList.length}</h2>
                        <p>Total Order</p>
                    </div>
                </div>
                <div className="card w-40 md:w-72 bg-base-100 shadow-xl">
                    <div className="card-body text-center px-0 sm:px-8">
                        <h2 className="font-bold text-lg">
                            {customerList?.length}
                        </h2>
                        <p>Happy Customer</p>
                    </div>
                </div>
                <div className="card w-40 md:w-72 bg-base-100 shadow-xl">
                    <div className="card-body text-center px-0 sm:px-8">
                        <h2 className="font-bold text-lg">
                            {vendorList?.length}
                        </h2>
                        <p>Total Vendor</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="overflow-auto bg-white mt-8 px-5">
                    <table className="shadow-lg border-2 border-cyan-300 w-full mx-auto mb-5 mt-3 text-base overflow-hidden">
                        <caption>
                            <h2 className="text-center text-2xl font-semibold mb-2">
                                All Product Details
                            </h2>
                        </caption>
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left pr-3 pl-6 whitespace-nowrap">
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
                                <th className="py-3 text-left pl-3 pr-6 whitespace-nowrap">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemList?.slice(0, 5).map((item) => (
                                <tr
                                    key={item._id}
                                    className="hover:shadow-md hover:bg-cyan-100 duration-300 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 pr-3 pl-6 whitespace-nowrap">
                                        {item.productName}
                                    </td>
                                    <td className="py-3 px-3 whitespace-nowrap">
                                        {item.purchaseAmount} $
                                    </td>
                                    <td className="py-3 px-3 whitespace-nowrap">
                                        {item.salesAmountValue} $
                                    </td>
                                    <td className="py-3 px-3 whitespace-nowrap">
                                        {item.vendorName}
                                    </td>
                                    <td className="py-3 pl-3 pr-6 whitespace-nowrap">
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
            <section>
                <div className="w-full md:w-1/2 my-6 overflow-auto md:mx-auto bg-white px-6 py-4">
                    <h1 className="text-xl text-center my-2 font-medium">
                        Vendor Vs Due Amount
                    </h1>
                    <BarChart width={500} height={250} data={purchaseOrderList}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="vendorName" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="dueAmount"
                            name="Due Amount"
                            fill={"#CC3333"}
                        ></Bar>
                    </BarChart>
                </div>
            </section>
            <ItemDetailsModal
                singleItemDetail={singleItemDetail}
            ></ItemDetailsModal>
        </div>
    );
};

export default SalesDashboard;
