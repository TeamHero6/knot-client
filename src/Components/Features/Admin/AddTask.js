import { format } from "date-fns";
import React, { useState } from "react";

const AddTask = () => {
    const [isPickDate, setPickDate] = useState(false);
    const [today, setToday] = useState(new Date());

    const handleNewTask = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const employeeID = e.target.employeeID.value;
        const department = e.target.department.value;
        const designation = e.target.designation.value;
        const task = e.target.task.value;
        const assignBy = e.target.assignBy.value;
        const assignerEmployeeID = e.target.assignerEmployeeID.value;
        const AssignerDepartment = e.target.AssignerDepartment.value;
        const AssignerDesignation = e.target.AssignerDesignation.value;
        const DueDate = format(today, "PP");
        const NewTask = {
            name,
            department,
            employeeID,
            designation,
            task,
            assignBy,
            assignerEmployeeID,
            AssignerDepartment,
            AssignerDesignation,
            DueDate,
        };

        fetch("https://sheltered-cliffs-60290.herokuapp.com/addNewTask", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(NewTask),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };
    return (
        <div>
            <form onSubmit={handleNewTask}>
                <h1 className="text-2xl">Task Details</h1>
                <input
                    type="text"
                    placeholder="Name"
                    class="input w-full max-w-xs m-1"
                    name="name"
                />
                <input
                    type="text"
                    placeholder="Employee ID"
                    class="input w-full max-w-xs m-1"
                    name="employeeID"
                />
                <input
                    type="text"
                    placeholder="Department"
                    class="input w-full max-w-xs m-1"
                    name="department"
                />
                <input
                    type="text"
                    placeholder="Designation"
                    class="input w-full max-w-xs m-1"
                    name="designation"
                />
                <input
                    type="text"
                    placeholder="Task"
                    class="input w-full max-w-xs m-1"
                    name="task"
                />
                <h1 className="text-2xl">Assign Task</h1>
                <input
                    type="text"
                    placeholder="Dept. Head"
                    class="input w-full max-w-xs m-1"
                />
                <input
                    type="text"
                    placeholder="assignBy"
                    class="input w-full max-w-xs m-1"
                    name="assignBy"
                />
                <input
                    type="text"
                    placeholder="assignerEmployeeID"
                    class="input w-full max-w-xs m-1"
                    name="assignerEmployeeID"
                />
                <input
                    type="text"
                    placeholder="AssignerDepartment"
                    class="input w-full max-w-xs m-1"
                    name="AssignerDepartment"
                />
                <input
                    type="text"
                    placeholder="AssignerDesignation"
                    class="input w-full max-w-xs m-1"
                    name="AssignerDesignation"
                />{" "}
                <br />
                <input type="submit" value="SAVE" className="btn my-2" />
            </form>
        </div>
    );
};

export default AddTask;
