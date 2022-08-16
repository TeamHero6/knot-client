import React, { useEffect, useState } from "react";
import { ComposedChart,Line,Area,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Scatter,
    ResponsiveContainer, } from "recharts";

const Hrtable = () => {
    const data = [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590,
        },
        {
          name: 'Page C',
          uv: 1397,
          pv: 1098,
          amt: 989,
          cnt: 350,
        },
        {
          name: 'Page D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
          cnt: 480,
        },
        {
          name: 'Page E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
          cnt: 460,
        },
        {
          name: 'Page F',
          uv: 1400,
          pv: 680,
          amt: 1700,
          cnt: 380,
        },
      ];
    const [details, setDetails] = useState([]);
    
    const [employinfo, setEmployinfo] = useState({});
    useEffect(() => {
        fetch("http://localhost:5000/employeedetails")
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, [details]);

    return (
        <div className="mx-auto w-4/5 rounded-lg my-5 ">
            <div>
            
        <ComposedChart
          width={500}
          height={400}
          data={details}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="Department" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Salary" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Salary" stroke="#ff7300" />
        </ComposedChart>
            </div>
            <div class="rounded-none">
                <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Name
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Phone
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Email
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Blood
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Department
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map(d=> 
                            <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                            <td className="py-3 px-6 whitespace-nowrap">
                                {d.Employee_Name}
                            </td>
                            <td className="py-3 px-6 whitespace-nowrap">
                                {d.phone}
                            </td>
                            <td className="py-3 px-6 whitespace-nowrap">
                                {d.Email}
                            </td>
                            <td className="py-3 px-6 whitespace-nowrap">
                                {d.Blood_Group}
                            </td>
                            <td className="py-3 px-6 whitespace-nowrap">
                                {d.Department}
                            </td>
                            <td className="text-[#0182be]">
                            <label
                                                for={d._id}
                                                onClick={() =>
                                                    setEmployinfo(d)
                                                }
                                                class="modal-button"
                                            >
                                                Details
                                            </label>
                            </td>
                        </tr>)
                        }
                        
                    </tbody>
                </table>
                <input
                        type="checkbox"
                        id={employinfo._id}
                        class="modal-toggle"
                    />
                    <div class="modal">
                        <div class="modal-box">
                            <div>
                                <div>
                                    <h1 className="text-xl border-b-2 border-yellow-500 capitalize mb-3">
                                        Details info
                                    </h1>
                                    <div>
                                        <p>
                                            <span className="font-medium capitalize">
                                            Employee Name:
                                            </span>
                                            {employinfo.Employee_Name}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Employee ID:
                                            </span>
                                            {employinfo.Employee_id}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                            Company Email:
                                            </span>
                                            {employinfo.Company_Email}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                            Joining Date:
                                            </span>
                                            {employinfo.Joining_Date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-action">
                                <label for={employinfo._id} class="btn btn-warning">
                                    Cancel
                                </label>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Hrtable;