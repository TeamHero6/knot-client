import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import PartnerDetailsModal from "./PartnerDetailsModal";
import PartnerInvestChart from "./PartnerInvestChart";
import PartnerInvestShareChart from "./PartnerInvestShareChart";
import PartnerList from "./PartnerList";

const Partners = () => {
    const [addNewPartners, setAddNewPartners] = useState(false);
    const [singlePartnerDetail, setSinglePartnerDetail] = useState({});
    const [partnerList, setPartnerList] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`http://localhost:5000/partner/${companyName}`)
            .then((res) => res.json())
            .then((data) => setPartnerList(data.reverse()));
    }, [partnerList, companyName]);

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
            companyName,
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="flex gap-5">
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
                    <div className="md:w-4/5 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-4 px-6 mb-8">
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
            <div className="bg-white my-4 py-5 px-5 lg:flex lg:justify-between">
                <PartnerList
                    setSinglePartnerDetail={setSinglePartnerDetail}
                ></PartnerList>
                <PartnerInvestChart />
            </div>
            <div className="bg-white my-4 py-5 px-5 lg:flex lg:justify-between">
                <PartnerInvestShareChart />
            </div>
            <PartnerDetailsModal
                singlePartnerDetail={singlePartnerDetail}
            ></PartnerDetailsModal>
        </motion.div>
    );
};

export default Partners;
