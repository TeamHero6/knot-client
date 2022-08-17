import React, { useEffect, useState } from 'react';

const PartnerList = ({ setSinglePartnerDetail }) => {
    const [partnerList, setPartnerList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/partner")
            .then((res) => res.json())
            .then((data) => setPartnerList(data.reverse()));
    }, [partnerList]);

    return (
        <div>
            <div >
                <div className='w-2/4'>
                    <h2 className='text-base font-semibold'>Partner Details</h2>
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                    Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Contact Number
                                </th>
                                <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                    Details
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {partnerList.map((partners) => (
                                <tr
                                    key={partners._id}
                                    className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                        {partners.partnerName}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {partners.contactNumber}
                                    </td>
                                    <td className="py-3 px-6 pr-10 whitespace-nowrap">
                                        <label
                                            for="item-details-modal"
                                            onClick={() =>
                                                setSinglePartnerDetail(partners)
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

export default PartnerList;