import React, { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillSave } from "react-icons/ai";
import PartnerList from './PartnerList';
import PartnerDetailsModal from './PartnerDetailsModal';
import PartnerInvestChart from './PartnerInvestChart';
import PartnerInvestShareChart from './PartnerInvestShareChart';
import PartnerDetails from '../FinanceDashboard/PartnerDetails';

const Partners = () => {
    const [addNewPartners, setAddNewPartners] = useState(false);
    const [singlePartnerDetail, setSinglePartnerDetail] = useState({});
    const [partnerList, setPartnerList] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/partner")
            .then((res) => res.json())
            .then((data) => setPartnerList(data.reverse()));
    }, [partnerList]);

    const handleAddPartners = (e) => {
        e.preventDefault();
        const partnerName = e.target.partnerName.value;
        const contactNumber = e.target.contactNumber.value;
        const address = e.target.address.value;
        const email = e.target.email.value;

        const Partner = {
            partnerName,
            contactNumber,
            address,
            email,
        };

        fetch(
            "http://localhost:5000/addPartner",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(Partner),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                }
            });
    };
    
    return (
        <div>
            <div className='flex gap-5'>
                <div>
                    <button
                        onClick={() => setAddNewPartners(!addNewPartners)}
                        className="flex items-center gap-2 bg-green-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm"
                    >
                        <IoIosAddCircleOutline className="text-2xl" />
                        New Partner
                    </button>{" "}
                    <br />
                </div>
                
            </div>
            {addNewPartners ? (
                <div>
                    <div className="md:w-3/5 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
                        <form onSubmit={handleAddPartners}>
                            {/* ----- Partner Details */}
                            <div>
                                <h1 className="font-bold text-center text-purple-800 mb-2 text-lg">
                                    Partner Details
                                </h1>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-40"
                                        htmlFor="name"
                                    >
                                        Partner name :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="partnerName"
                                        id=""
                                        placeholder=""
                                        required
                                    />{" "}
                                    <br />
                                </div>

                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-40"
                                        htmlFor="name"
                                    >
                                        Phone Number :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="number"
                                        name="contactNumber"
                                        id=""
                                        placeholder=""
                                        required
                                    />{" "}
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-40"
                                        htmlFor="name"
                                    >
                                        Address :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="text"
                                        name="address"
                                        id=""
                                        placeholder=""
                                    />{" "}
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-40"
                                        htmlFor="name"
                                    >
                                        Email :{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                        type="email"
                                        name="email"
                                        id=""
                                        placeholder=""
                                    />{" "}
                                    <br />
                                </div>
                            </div>


                            <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                >
                                    <AiFillSave />
                                    Save
                                </button>{" "}
                                <br />
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                ""
            )}
            <div className='flex justify-between lg:w-full bg-white shadow-gray-300 border shadow-sm rounded py-6 px-6 mt-5 sm:w-9/12 sm:w-11/12 sm:mx-auto'>
                <PartnerList setSinglePartnerDetail={setSinglePartnerDetail}></PartnerList>
                <PartnerInvestChart />
            </div>
            <div className='flex justify-between lg:w-full bg-white shadow-gray-300 border shadow-sm rounded py-6 px-6 mt-5 md:w-9/12 sm:w-11/12 sm:mx-auto mb-10'>
                <PartnerInvestShareChart />
            </div>
            <PartnerDetailsModal
                singlePartnerDetail={singlePartnerDetail}
            ></PartnerDetailsModal>     
        </div>
    );
};

export default Partners;