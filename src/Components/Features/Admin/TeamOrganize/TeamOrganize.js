import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loader from "../../../Shared/Loader/Loader";
import AwardTable from "./AllTables/AwardTable/AwardTable";
import MeetingTable from "./AllTables/MeetingTable/MeetingTable";
import WarningTable from "./AllTables/WarningTable/WarningTable";
import AwardModal from "./AwardModal/AwardModal";
import MeetingModal from "./MeetingModal/MeetingModal";
import WarningModal from "./WarningModal/WarningModal";

const TeamOrganize = () => {
    const [modalName, setModalName] = useState("createMeeting");
    const [meetings, setMettings] = useState([]);
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
        <div>
            <div className="flex justify-evenly">
                <button
                    className="bg-[#EEEEEE] px-3 py-1 rounded-md"
                    onClick={() => setModalName("createMeeting")}
                >
                    Create Meeting
                </button>
                <button
                    className="bg-[#EEEEEE] px-3 py-1 rounded-md"
                    onClick={() => setModalName("warningModal")}
                >
                    Warning
                </button>
                <button
                    className="bg-[#EEEEEE] px-3 py-1 rounded-md"
                    onClick={() => setModalName("awardModal")}
                >
                    Award
                </button>
            </div>
            {/*Meeting, Warning, Award Button*/}
            <section className="w-[100%] mt-12">
                {modalName === "createMeeting" && (
                    <MeetingModal {...{ refetch: meetingRefetch }} />
                )}
                {modalName === "warningModal" && (
                    <WarningModal {...{ refetch: warningRefetch }} />
                )}
                {modalName === "awardModal" && (
                    <AwardModal {...{ refetch: awardRefetch }} />
                )}
                {/*Meeting Modal*/}
            </section>
            {/*All Form*/}

            <section className="mt-8">
                <div>
                    {modalName == "createMeeting" && (
                        <MeetingTable {...{ meetings: meetingData }} />
                    )}
                </div>{" "}
                {/*Meeting table*/}
                <div>
                    {modalName === "warningModal" && (
                        <WarningTable {...{ warnings: warningData }} />
                    )}
                </div>
                {/*Warning table*/}
                <div>
                    {modalName === "awardModal" && (
                        <AwardTable {...{ award: awardData, awardLoading }} />
                    )}
                </div>
                {/*Award table*/}
            </section>
            {/*All Tables*/}
        </div>
    );
};

export default TeamOrganize;
