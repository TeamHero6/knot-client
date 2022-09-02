import React from "react";
import { AiFillSave } from "react-icons/ai";

const PartnerDetailsModal = ({ singlePartnerDetail }) => {
    const { partnerName, contactNumber, address, email, UpdateInvest, _id } =
        singlePartnerDetail;

    const handleAddInvest = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const Amount = e.target.Amount.value;
        const share = e.target.share.value;

        const UpdateInvest = {
            date,
            Amount,
            share,
        };
        console.log(UpdateInvest);
        const url = `https://knot-business-solution-server.herokuapp.com/partner/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(UpdateInvest),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("success", data);
                e.target.reset();
            });
    };
    return (
        <div>
            <input
                type="checkbox"
                id="item-details-modal"
                class="modal-toggle"
            />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label
                        for="item-details-modal"
                        class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <div>
                        <div>
                            <form onSubmit={handleAddInvest}>
                                <div className="flex justify-between mt-5">
                                    <div>
                                        <h3 className="font-bold">
                                            {partnerName}{" "}
                                        </h3>
                                        <span className="text-gray-400">
                                            Invest Date: {UpdateInvest?.date}
                                        </span>
                                    </div>
                                </div>
                                <hr className="mb-2" />
                                <h3>Contact Number: {contactNumber}</h3>
                                <h3>Address: {address}</h3>
                                <p>Email: {email}$</p>
                                <p>Invest Amount: {UpdateInvest?.Amount}</p>
                                <p>
                                    Share: {UpdateInvest?.share}
                                    <small>(%)</small>
                                </p>
                                <h2 className="font-medium text-blue-500">
                                    Invest Details
                                </h2>
                                <div className="flex gap-3">
                                    <div className="md:flex items-center">
                                        <br />
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="date"
                                            name="date"
                                            id=""
                                            placeholder=""
                                            required
                                        />{" "}
                                    </div>
                                    <div className="md:flex items-center">
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="number"
                                            name="Amount"
                                            id=""
                                            placeholder="Invest Amount"
                                            required
                                        />{" "}
                                    </div>
                                    <div className="md:flex items-center">
                                        <input
                                            className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                            type="number"
                                            name="share"
                                            id=""
                                            placeholder="Share Percent"
                                        />{" "}
                                    </div>
                                </div>
                                <div className="flex justify-center mt-2">
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 bg-green-500 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-green-500 hover:outline-1 hover:border hover:border-green-500 hover: shadow-blue-300 hover: shadow-sm"
                                    >
                                        <AiFillSave />
                                        Update
                                    </button>{" "}
                                    <br />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerDetailsModal;
