import React from "react";

const WarningTable = () => {
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
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WarningTable;
