import React from "react";

const TaskDetailsModalUI = ({ singleTask, setSingleTask }) => {
    console.log(singleTask);
    return (
        <div>
            <input type="checkbox" id="taskDetails" className="modal-toggle" />
            <label for="taskDetails" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <h3 className="text-lg font-bold">
                        Congratulations random Internet user!
                    </h3>
                    <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                    </p>
                </label>
            </label>
        </div>
    );
};

export default TaskDetailsModalUI;
