import React from "react";
import Swal from "sweetalert2";

const MeetingModal = ({ refetch }) => {
    const handleCreateMeeting = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const meetingTopic = e.target.meetingTopic.value;
        const meetingHost = e.target.meetingHost.value;
        const meetingGuest = e.target.meetingGuest.value;
        const meetingWith = e.target.meetingWith.value;
        const meetingLink = e.target.meetingLink.value;
        const newMeeting = {
            date,
            meetingTopic,
            meetingHost,
            meetingGuest,
            meetingWith,
            meetingLink,
        };
        fetch(
            "http://localhost:5000/createNewMeeting",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newMeeting),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire(
                        "Good job!",
                        "Your meeting is now ready",
                        "success"
                    );
                    refetch();
                    e.target.reset();
                }
            });
    };
    return (
        <div className="w-full bg-white rounded-lg lg:w-[35%] drop-shadow-lg mx-auto p-3 px-6">
            <form className="flex flex-col" onSubmit={handleCreateMeeting}>
                <input
                    type="date"
                    className="py-2 pl-3 w-full my-2 border border-gray-300 bg-slate-50 rounded-md outline-none"
                    name="date"
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
                    placeholder="Meeting Guest"
                    className="py-2 pl-3 w-full my-2 border border-gray-300 bg-slate-50 rounded-md outline-none"
                    name="meetingGuest"
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
                    className="py-2 pl-3 w-full my-2 border border-green-300 bg-transparent rounded-md outline-none hover:bg-green-400 hover:text-white transition duration-500"
                />
            </form>
        </div>
    );
};

export default MeetingModal;
