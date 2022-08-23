import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loader from "../../../Shared/Loader/Loader";
import MeetingCard from "./AllTables/MeetingTable/MeetingCards/MeetingCard";
import AwardCard from "./AwardModal/AwardCard";
import AwardModalDaisyUI from "./AwardModal/AwardModalDaisyUI";
import MeetingModalDaisyUI from "./MeetingModal/MeetingModalDaisyUI";
import WarningCard from "./WarningModal/WarningCard";
import WarningModalDaisyUI from "./WarningModal/WarningModalDaisyUI";

const TeamOrganize = () => {
    const [meetingModal, setMeetingModal] = useState(false);
    const [warningModal, setWarningModal] = useState(false);
    const [awardModal, setAwardModal] = useState(false);
    const [dropDownFilter, setDropDownFilter] = useState("allMettings");

    // handler for drop down filter
    const handleDropDownFilter = (e) => {
        setDropDownFilter(e.target.value);
    };
    const {
        isLoading: meetingLoading,
        data: meetingData,
        refetch: meetingRefetch,
    } = useQuery(["meetings"], () =>
        fetch(
            "https://knot-business-solution-server.herokuapp.com/meetings"
        ).then((res) => res.json())
    );
    //Fetch Warning Data
    const {
        isLoading: warningLoading,
        data: warningData,
        refetch: warningRefetch,
    } = useQuery(["warnings"], () =>
        fetch(
            "https://knot-business-solution-server.herokuapp.com/warnings"
        ).then((res) => res.json())
    );
    const {
        isLoading: awardLoading,
        data: awardData,
        refetch: awardRefetch,
    } = useQuery(["award"], () =>
        fetch("https://knot-business-solution-server.herokuapp.com/award").then(
            (res) => res.json()
        )
    );
    if (meetingLoading || warningLoading || awardLoading) {
        return <Loader />;
    }

    return (
        <div className="bg-white">
            <section className="w-full py-4 px-2  md:flex md:justify-between md:items-center">
                <section className="flex flex-col md:flex-row">
                    <label
                        for="my-modal-4"
                        class="btn modal-button flex items-center gap-2 bg-white text-green-400 border-green-400 font-bold rounded  hover:bg-green-400 hover:text-white hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm my-2 mx-2 md:my-0"
                        onClick={() => setMeetingModal(true)}
                    >
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="16"
                                height="16"
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
                        </span>
                        Creating Meeting
                    </label>
                    {/*Award button*/}
                    <label
                        for="warning"
                        class="btn modal-button flex items-center gap-2 bg-white text-red-400 border-red-400 font-bold rounded  hover:bg-red-400 hover:text-white hover:border-red-400  hover:shadow-red-200 hover:shadow-sm my-2 mx-2 md:my-0"
                        onClick={() => setWarningModal(true)}
                    >
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-exclamation-triangle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                            </svg>
                        </span>
                        Add a Warning
                    </label>
                    <label
                        for="award"
                        class="btn modal-button flex items-center gap-2 bg-white text-amber-400 border-amber-400 font-bold rounded  hover:bg-amber-400 hover:text-white hover:border-amber-400  hover:shadow-amber-200 hover:shadow-sm my-2 mx-2 md:my-0"
                        onClick={() => setAwardModal(true)}
                    >
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-award"
                                viewBox="0 0 16 16"
                            >
                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                            </svg>
                        </span>
                        Add a Award
                    </label>
                </section>
                {/*modal*/}
                <section className="">
                    {meetingModal && (
                        <MeetingModalDaisyUI
                            {...{ setMeetingModal, meetingRefetch }}
                        />
                    )}
                    {warningModal && (
                        <WarningModalDaisyUI
                            {...{ setWarningModal, warningRefetch }}
                        />
                    )}
                    {awardModal && (
                        <AwardModalDaisyUI
                            {...{ setAwardModal, awardRefetch }}
                        />
                    )}
                </section>
                {/*Filtering UI*/}
                <div className="mx-2">
                    <input
                        type="text"
                        className="border-[1px] rounded-md w-64 px-2 py-1 md:mx-2 outline-none"
                        placeholder="Filter by name"
                    />
                    <select
                        name="meet-warn-award-filter"
                        id=""
                        className="mt-2"
                        onChange={handleDropDownFilter}
                    >
                        <option value="allMettings">All Meetings</option>
                        <option value="allWarning">All Warning</option>
                        <option value="allAward">All Award</option>
                    </select>
                </div>
            </section>
            {/*All meetings*/}
            <hr />
            {dropDownFilter === "allMettings" && (
                <section className="grid grid-cols-1 md:grid-cols-3 gap-y-5 lg:grid-cols-4 py-3 mt-8">
                    {meetingData.map((meeting) => (
                        <MeetingCard {...{ meeting }} />
                    ))}
                </section>
            )}
            {dropDownFilter === "allWarning" && (
                <section className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-4 lg:grid-cols-4 py-3 mt-8">
                    {warningData.map((warning) => (
                        <WarningCard {...{ warning }} />
                    ))}
                </section>
            )}
            {dropDownFilter === "allAward" && (
                <section className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-4 lg:grid-cols-4 py-3 mt-8">
                    {awardData.map((award) => (
                        <AwardCard {...{ award }} />
                    ))}
                </section>
            )}
        </div>
    );
};

export default TeamOrganize;
