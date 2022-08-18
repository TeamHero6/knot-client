import React from "react";
import Swal from "sweetalert2";

const MeetingModalDaisyUI = ({ setMeetingModal, meetingRefetch }) => {
    const handleCreateMeeting = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const meetingTopic = e.target.meetingTopic.value;
        const meetingHost = e.target.meetingHost.value;
        const meetingWith = e.target.meetingWith.value;
        const meetingLink = e.target.meetingLink.value;
        const newMeeting = {
            date,
            meetingTopic,
            meetingHost,
            meetingWith,
            meetingLink,
        };
        console.log(newMeeting);
        fetch("http://localhost:5000/createNewMeeting", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newMeeting),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire(
                        "Good job!",
                        "Your meeting is now ready",
                        "success"
                    );
                    e.target.reset();
                    meetingRefetch();
                    setMeetingModal(false);
                }
            });
    };
    return (
        <div>
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <div>
                        <label for="my-modal-4" class="absolute right-3 top-3">
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
                    </div>
                    <div className="flex justify-start items-center my-4">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="48"
                                height="24"
                                viewBox="0 0 48 48"
                                style={{ fill: "#000000" }}
                            >
                                <rect
                                    width="16"
                                    height="16"
                                    x="12"
                                    y="16"
                                    fill="#fff"
                                    transform="rotate(-90 20 24)"
                                ></rect>
                                <polygon
                                    fill="#1e88e5"
                                    points="3,17 3,31 8,32 13,31 13,17 8,16"
                                ></polygon>
                                <path
                                    fill="#4caf50"
                                    d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"
                                ></path>
                                <path
                                    fill="#fbc02d"
                                    d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"
                                ></path>
                                <path
                                    fill="#1565c0"
                                    d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"
                                ></path>
                                <polygon
                                    fill="#e53935"
                                    points="13,7 13,17 3,17"
                                ></polygon>
                                <polygon
                                    fill="#2e7d32"
                                    points="38,24 37,32.45 27,24 37,15.55"
                                ></polygon>
                                <path
                                    fill="#4caf50"
                                    d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"
                                ></path>
                            </svg>
                        </div>
                        <h1>Create a new meeting</h1>
                    </div>
                    <div>
                        <form
                            className="flex flex-col"
                            onSubmit={handleCreateMeeting}
                        >
                            <input
                                type="datetime-local"
                                className="py-2 pl-3 lg:max-w-lg my-2 border border-gray-300 bg-slate-50 rounded-md outline-none"
                                name="date"
                                id="date"
                            />
                            <input
                                type="text"
                                placeholder="Meeting Topic"
                                className="py-2 pl-3 w-full my-2 border border-gray-300 bg-slate-50 rounded-md outline-none"
                                name="meetingTopic"
                            />
                            <input
                                type="text"
                                placeholder="Meeting Host"
                                className="py-2 pl-3 w-full my-2 border border-gray-300 bg-slate-50 rounded-md outline-none"
                                name="meetingHost"
                            />
                            <input
                                type="text"
                                placeholder="Meeting With"
                                className="py-2 pl-3 w-full my-2 border border-gray-300 bg-slate-50 rounded-md outline-none"
                                name="meetingWith"
                            />
                            <input
                                type="text"
                                placeholder="Meeting Link"
                                className="py-2 pl-3 w-full my-2 border border-gray-300 bg-slate-50 rounded-md outline-none"
                                name="meetingLink"
                            />
                            <input
                                type="submit"
                                value="Submit"
                                className="py-2 pl-3 w-full my-2 border border-green-300 bg-green-400 text-white rounded-md outline-none  transition duration-500"
                            />
                        </form>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default MeetingModalDaisyUI;
