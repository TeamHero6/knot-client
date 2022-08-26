import React, { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useSelector } from "react-redux";

const SalesReport = () => {
    const [orderList, setOrderList] = useState([]);
    const loggerInfo = useSelector(state => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`http://localhost:5000/addNewOrder/${companyName}`)
            .then((res) => res.json())
            .then((data) => setOrderList(data.reverse()));
    }, [orderList, companyName]);
    // console.log(orderList);
    return (
        <div>
            <h2 className="text-base font-semibold pb-4">Sales Report</h2>
            <div className="grid grid-cols-2 gap-5">
                <AreaChart
                    width={600}
                    height={250}
                    data={orderList}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#82ca9d"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#82ca9d"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#4363ff"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#4363ff"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="orderDate" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="totalAmount"
                        stroke="#82cb9d"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                    <Area
                        type="monotone"
                        dataKey="unitPrice"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    />
                    <Area
                        type="monotone"
                        dataKey="quantity"
                        stroke="#4363ff"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    />
                </AreaChart>
            </div>
        </div>
    );
};

export default SalesReport;
