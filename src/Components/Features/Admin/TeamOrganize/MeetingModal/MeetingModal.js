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
        fetch("https://sheltered-cliffs-60290.herokuapp.com/createNewMeeting", {
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
                    refetch();
                    e.target.reset();
                }
            });
    };
    return (
        <div className="w-full bg-[#EEEEEE] rounded-lg lg:w-[50%] mx-auto p-3 px-6">
            <form className="flex flex-col" onSubmit={handleCreateMeeting}>
                <input
                    type="date"
                    className="bg-transparent my-2"
                    name="date"
                />
                <input
                    type="text"
                    placeholder="Meeting Topic"
                    className="my-2 p-1 px-3 rounded-md"
                    name="meetingTopic"
                />
                <input
                    type="text"
                    placeholder="Meeting Host"
                    className="my-2 p-1 px-3 rounded-md"
                    name="meetingHost"
                />
                <input
                    type="text"
                    placeholder="Meeting Guest"
                    className="my-2 p-1 px-3 rounded-md"
                    name="meetingGuest"
                />
                <input
                    type="text"
                    placeholder="Meeting With"
                    className="my-2 p-1 px-3 rounded-md"
                    name="meetingWith"
                />
                <input
                    type="text"
                    placeholder="Meeting Link"
                    className="my-2 p-1 px-3 rounded-md"
                    name="meetingLink"
                />
                <input
                    type="submit"
                    value="Submit"
                    className="px-4 py-2 rounded-full bg-white my-2"
                />
            </form>
        </div>
    );
};

export default MeetingModal;
