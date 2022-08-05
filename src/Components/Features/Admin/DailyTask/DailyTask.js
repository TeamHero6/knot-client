import React, { useEffect, useState } from "react";

const DailyTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/alltasks")
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, []);
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Department</th>
                            <th>Task</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks?.map((task, index) => (
                            <>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{task.name}</td>
                                    <td>{task.employeeID}</td>
                                    <td>{task.department}</td>
                                    <td>{task.task}</td>
                                    <td>{task.DueDate}</td>
                                    <td>
                                        <p>Running</p>
                                    </td>
                                    <td></td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DailyTask;
