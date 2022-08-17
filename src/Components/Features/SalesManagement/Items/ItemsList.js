import React, { useEffect, useState } from "react";

const ItemsList = ({ setSingleItemDetail }) => {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/addProduct")
            .then((res) => res.json())
            .then((data) => setItemList(data.reverse()));
    }, [itemList]);

    return (
        <div>
            <h1 className="text-center text-2xl font-bold">All Items List</h1>
            <div class="overflow-auto rounded-none">
                <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        {/* <thead className=' border-b border-cyan-100'> */}
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
                                className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
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
    );
};

export default ItemsList;
