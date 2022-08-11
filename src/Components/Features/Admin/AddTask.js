import DateMomentUtils from "@date-io/moment";
import {
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from "moment";
import React, { useState } from "react";

const AddTask = () => {
    const [selectedDate, handleDateChange] = useState(new Date());

    const handleTask = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const employeeEmail = e.target.employeeEmail.value;
        const department = e.target.department.value;
        const taskTitle = e.target.taskTitle.value;
        const taskDescription = e.target.taskDescription.value;
        const deadline = moment(selectedDate).format(
            "DD/MM/YYYY hh:mm a",
            true
        );
        const result = {
            name,
            employeeEmail,
            department,
            taskTitle,
            taskDescription,
            deadline,
        };
        console.log(result);
    };

    // fetch(
    //     "https://knot-business-solution-server.herokuapp.com/addNewTask",
    //     {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(NewTask),
    //     }
    // )
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
    return (
        <div>
            <form
                className="w-full mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto"
                onSubmit={handleTask}
            >
                <div className="flex flex-col lg:flex-row md:gap-5 w-full">
                    <input
                        className="py-2 pl-3 w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    <input
                        className="py-2 pl-3 w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                        type="text"
                        name="employeeEmail"
                        placeholder="Employee email"
                    />
                </div>
                <div className="flex flex-col lg:flex-row md:gap-5 w-full">
                    <input
                        className="py-2 pl-3 w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                        type="text"
                        name="department"
                        placeholder="Department"
                    />
                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                        <KeyboardDateTimePicker
                            className="py-2 pl-3 w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                            label="Pick a Deadline"
                            variant="inline"
                            ampm={true}
                            disablePast
                            format="yyyy/MM/dd HH:mm"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <input
                    className="py-2 pl-3 w-full  my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    type="text"
                    name="taskTitle"
                    placeholder="Task Title"
                />
                <textarea
                    className="py-2 pl-3 w-full  my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    type="text"
                    name="taskDescription"
                    placeholder="Task Description"
                />

                <input
                    className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                    type="submit"
                    value="ADD TASK"
                />
            </form>
        </div>
    );
};

export default AddTask;
