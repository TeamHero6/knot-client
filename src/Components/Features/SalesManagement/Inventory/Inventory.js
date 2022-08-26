import React, { useState, useEffect } from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

const Inventory = () => {
    const [productList, setProductList] = useState([]);
    const [quantitySum, setQuantitySum] = useState(0);

    useEffect(() => {
        fetch(
            "http://localhost:5000/addNewPurchaseOrder"
        )
            .then((res) => res.json())
            .then((data) => {
                const { result, quantitySum } = data;
                setProductList(result);
                setQuantitySum(quantitySum);
            });
    }, [productList]);

    return (
        <div>
            <div className="bg-white px-8 pb-6 pt-4 my-6">
                <table className="shadow-lg border-2 border-cyan-300 w-full mx-auto text-base overflow-hidden">
                    <caption>
                        <h1 className="text-center text-2xl font-semibold mb-3">
                            Inventory
                        </h1>
                    </caption>
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Product
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Product Code
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Quantity
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Unit Price($)
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Vendor
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product) => (
                            <tr
                                key={product._id}
                                className="hover:shadow-md hover:bg-cyan-100 duration-300 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {product.productName}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {product.productCode}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {product.orderQuantity}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {product.unitPrice}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {product.vendorName}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <h1>{quantitySum}</h1>
                </table>
            </div>
            <div className="bg-white w-2/3 mx-auto px-2 py-6 my-6">
                <h1 className="text-center text-2xl font-semibold mb-4">Product Quantity</h1>
                <AreaChart width={730} height={250} data={productList}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="productName" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="orderQuantity" name='Quantity' stroke="#06B6D4" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Inventory;