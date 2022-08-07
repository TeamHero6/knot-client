import React, { useEffect, useState } from "react";

const Warming = () => {
    const [warnings, setWarnings] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/warnings")
            .then((res) => res.json())
            .then((data) => setWarnings(data));
    }, []);

    return (
        <div className="my-10">
            <h1 className="text-xl mb-3">Team Members Warning Database</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
<<<<<<< HEAD
                            <th>Warning Date</th>
                            <th>Team Member Name</th>
                            <th>Reason of Warning</th>
                            <th>
                                Special Note <br />
                                Team Member
                            </th>
                            <th>Warning Type</th>
                            <th>Team Member Feedback</th>
                            <th>Save Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {warnings?.map((warning) => (
                            <tr>
                                <th>{warning.warningDate}</th>
                                <td>Name</td>
                                <td>{warning.warningReason}</td>
                                <td>special</td>
                                <td>{warning.type}</td>
                                <td>Feedback</td>
                                <td>change</td>
                            </tr>
                        ))}
=======
                            <th>Date</th>
                            <th>Name</th>
                            <th>Warning Type</th>
                            <th>Reason of Warning</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            warnings?.map(warning =>
                                <tr>
                                    <th>{warning.warningDate}</th>
                                    <td>Name</td>
                                    <td>{warning.type}</td>
                                    <td>{warning.warningReason}</td>
                                </tr>
                            )
                        }
>>>>>>> 968b9fbbac261c932cdad216b506b7eca7842b7b
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Warming;
