import React from "react";

const MeetingTable = ({ meetings, refetch }) => {
    return (
        <div className="w-full">
            <p className="my-2 px-2">All Meetings</p>
            <div class="overflow-x-auto">
                <table class="table w-full ">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Host Name</th>
                            <th>Guest Name</th>
                            <th>View All invited</th>
                            <th>Special Note</th>
                            <th>Meeting Status</th>
                            <th>Meeting Link</th>
                            <th>Save Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>fjhfjdf</td>
                            <td>fjhfjdf</td>
                            <td>fjhfjdf</td>
                            <td>fjhfjdf</td>
                            <td>fjhfjdf</td>
                            <td>fjhfjdf</td>
                            <td>fjhfjdf</td>
                            <td>fjhfjdf</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MeetingTable;
