import React from "react";
import Swal from "sweetalert2";

const WarningModalDaisyUI = ({ setWarningModal, warningRefetch }) => {
    const handleWarning = (e) => {
        e.preventDefault();
        const warningDate = e.target.date.value;
        const warningReason = e.target.reason.value;
        const type = e.target.type.value;
        const warningFor = e.target.email.value;
        const warningDetails = { warningDate, warningReason, type, warningFor };
        console.log(warningDetails);
        fetch("http://localhost:5000/createWarning", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(warningDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    e.target.reset();
                    warningRefetch();
                    Swal.fire("Good job!", "Warning is created", "success");
                    setWarningModal(false);
                }
            });
    };
    return (
        <div>
            <input type="checkbox" id="warning" class="modal-toggle" />
            <label for="warning" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <label for="warning" class="absolute right-3 top-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            class="bi bi-x"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </label>
                    <div className="flex justify-start items-center my-2 md:my-4">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                class="bi bi-exclamation-triangle text-red-400 mr-2"
                                viewBox="0 0 16 16"
                            >
                                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                            </svg>
                        </div>
                        <h1 className="text-red-400">Add a Warning</h1>
                    </div>
                    <div>
                        <form
                            className="flex flex-col"
                            onSubmit={handleWarning}
                        >
                            <input
                                type="date"
                                className="py-2 pl-3 lg:max-w-lg my-2 border text-sm border-gray-300 bg-slate-50 rounded-md outline-none"
                                name="date"
                                id="date"
                            />
                            <input
                                type="email"
                                className="py-2 pl-3 lg:max-w-lg my-2 border text-sm border-gray-300 bg-slate-50 rounded-md outline-none"
                                name="email"
                                placeholder="Employee"
                            />
                            <select
                                name="type"
                                className="py-2 pl-3 w-full my-2 border text-sm border-gray-30 rounded-md outline-none"
                            >
                                <option value="light">Light</option>
                                <option value="medium" className="bg-red-300">
                                    Medium
                                </option>
                                <option value="high" className="bg-red-400">
                                    High
                                </option>
                            </select>
                            <textarea
                                type="text"
                                placeholder="Reason"
                                className="py-2 pl-3 w-full my-2 border text-sm border-gray-300 bg-slate-50 rounded-md outline-none"
                                name="reason"
                            />

                            <input
                                type="submit"
                                value="Submit"
                                className="py-2 pl-3 w-full my-2 border text-sm border-red-300 text-white bg-red-400 rounded-md outline-none"
                            />
                        </form>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default WarningModalDaisyUI;
