import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ItemsList = ({ setSingleItemDetail }) => {
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const [itemList, setItemList] = useState([]);

    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`http://localhost:5000/addProduct/${companyName}`)
            .then((res) => res.json())
            .then((data) => setItemList(data.reverse()));
    }, [itemList, companyName]);

    return (
        <div className="mb-8">
            <div className="bg-white px-6 pt-4">
                <h1 className="text-center text-2xl font-bold">
                    All Items List
                </h1>
                <div className="overflow-auto rounded-none">
                    <table className="shadow-lg border-2 border-cyan-300 w-full mx-auto mt-2 mb-6 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                    Product
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Purchase Amount
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Sales Amount
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Vendor
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemList.map((item) => (
                                <tr
                                    key={item._id}
                                    className="hover:shadow-md hover:bg-cyan-100 duration-500 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                        {item.productName}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {item.purchaseAmount} $
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {item.salesAmountValue} $
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {item.vendorName}
                                    </td>
                                    <td className="py-3 px-6 pr-10 whitespace-nowrap">
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
            </div>
        </div>
    );
};

export default ItemsList;
