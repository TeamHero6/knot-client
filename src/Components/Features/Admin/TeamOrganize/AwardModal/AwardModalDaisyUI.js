import React from "react";
import Swal from "sweetalert2";

const AwardModalDaisyUI = () => {
    const handleWarning = (e) => {
        e.preventDefault();
        const warningDate = e.target.date.value;
        const warningReason = e.target.reason.value;
        const type = e.target.type.value;
        const warningFor = e.target.email.value;
        const warningDetails = { warningDate, warningReason, type, warningFor };
        console.log(warningDetails);
        fetch(
            "https://knot-business-solution-server.herokuapp.com/createWarning",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(warningDetails),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    e.target.reset();
                    Swal.fire("Good job!", "Warning is created", "success");
                }
            });
    };
    return (
        <div>
            <input type="checkbox" id="award" class="modal-toggle" />
            <label for="award" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <label for="award" class="absolute right-3 top-3">
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
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-exclamation-triangle text-amber-400 mr-2"
                                viewBox="0 0 16 16"
                            >
                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                            </svg>
                        </div>
                        <h1 className="text-amber-400">Add Award</h1>
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
                                type="text"
                                className="py-2 pl-3 lg:max-w-lg my-2 border text-sm border-gray-300 bg-slate-50 rounded-md outline-none"
                                name="email"
                                placeholder="Choose an Employee"
                            />
                            <select
                                name="type"
                                className="py-2 pl-3 w-full my-2 border text-sm border-gray-30 rounded-md outline-none"
                            >
                                <option value="light">
                                    Employee of the month
                                </option>
                                <option value="medium" className="bg-red-300">
                                    Best Team Member of the Month
                                </option>
                            </select>

                            <input
                                type="submit"
                                value="Submit"
                                className="py-2 pl-3 w-full my-2 border text-sm border-amber-300 text-white bg-amber-400 rounded-md outline-none"
                            />
                        </form>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default AwardModalDaisyUI;
