import React, { useEffect, useState } from "react";

const Warming = () => {
    const [warnings, setWarnings] = useState([]);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/warnings")
            .then((res) => res.json())
            .then((data) => setWarnings(data));
    }, []);

    return (
        <div className="my-10">
            <h1 className='text-2xl text-center font-bold mt-5'>Team Members Warning Database</h1>
            <div class="overflow-x-auto">
                <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                    <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                        <tr>
<<<<<<< HEAD
                            <th className="py-3 text-left px-6 whitespace-nowrap">Warning Date</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Name</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Warning Type</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Reason For Warning</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            warnings?.map(warning =>
                                <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                    <td className="py-3 px-6 whitespace-nowrap">{warning.warningDate}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">Name</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{warning.type}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{warning.warningReason}</td>
                                </tr>
                            )
                        }
=======
                            <th>Warning Date</th>
                            <th>Team Member Name</th>
                            <th>Reason of Warning</th>
                            <th>
                                Special Note <br />
                                Team Member
                            </th>
                            <th>Warning Type</th>
                            <th>Team Member Feedback</th>
                            <th>Save Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {warnings?.map((warning) => (
                            <tr>
                                <th>{warning.warningDate}</th>
                                <td>Name</td>
                                <td>{warning.warningReason}</td>
                                <td>special</td>
                                <td>{warning.type}</td>
                                <td>Feedback</td>
                                <td>change</td>
                            </tr>
                        ))}
>>>>>>> 88606e86582b97aa66f1228b0bec652f645cb951
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Warming;
