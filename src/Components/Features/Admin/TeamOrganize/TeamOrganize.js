import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loader from "../../../Shared/Loader/Loader";
import MeetingTable from "./AllTables/MeetingTable/MeetingTable";
import AwardModal from "./AwardModal/AwardModal";
import MeetingModal from "./MeetingModal/MeetingModal";
import WarningModal from "./WarningModal/WarningModal";

const TeamOrganize = () => {
    const [modalName, setModalName] = useState("createMeeting");

    const { data, isLoading, refetch } = useQuery("meetfdgs", () =>
        fetch("http://localhost:5000/meetings").then((res) => res.json())
    );
    console.log(data);
    if (isLoading) {
        return <Loader />;
    }

    //     useEffect(() => {
    //         fetch("http://localhost:5000/meetings")
    //             .then((res) => res.json())
    //             .then((data) => console.log(data));
    //     }, []);
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
                {modalName === "createMeeting" && <MeetingModal />}
                {modalName === "warningModal" && <WarningModal />}
                {modalName === "awardModal" && <AwardModal />}
                {/*Meeting Modal*/}
            </section>
            {/*All Form*/}

            <section className="mt-8">
                <div>
                    <MeetingTable />
                </div>{" "}
                {/*Meeting table*/}
                <div></div>
                {/*Warning table*/}
                <div></div>
                {/*Award table*/}
            </section>
            {/*All Tables*/}
        </div>
    );
};

export default TeamOrganize;
