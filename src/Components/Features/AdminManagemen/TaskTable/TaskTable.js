import React from "react";

const TaskTable = ({ task }) => {
    return (
        <tr>
            <td>2/7/2022</td>
            <td>{task.Name}</td>
            <td>{task.EmployeeID}</td>
            <td>{task.Department}</td>
            <td>{task.Task}</td>
            <td>25/07/2022</td>
            <td>Running</td>
            <td>Edit</td>
        </tr>
    );
};

export default TaskTable;
