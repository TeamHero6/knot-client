import React from "react";

const AwardTable = ({ award }) => {
    return (
        <div className="w-full">
            <p className="my-2 px-2">All Meetings</p>
            <div class="overflow-x-auto">
                <table class="table w-full ">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Team Member Name</th>
                            <th>Type of Award</th>
                            <th>Leader Feedback</th>
                            <th>Save Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {award.map((aw) => (
                            <>
                                <tr>
                                    <td>{aw.awardDate}</td>
                                    <td>{aw.name}</td>
                                    <td>{aw.awardType}</td>
                                    <td>You are hardworking person</td>
                                    <td>Edit</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AwardTable;
