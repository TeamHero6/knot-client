import React, { useState } from "react";

const CompanySettings = () => {
    const [passcode, setPassCode] = useState();
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [customError, setCustomError] = useState("");

    const passCodeGenerate = () => {
        const pass = Math.floor(Math.random() * 100000) + 1;
        setPassCode(pass);
    };

    const handleEmployee = () => {
        if (passcode && employeeEmail !== "") {
            setCustomError("");
            const employee = {
                email: employeeEmail,
                passcode: passcode,
            };
            fetch(
                "https://knot-business-solution-server.herokuapp.com/createNewEmployee",
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(employee),
                }
            )
                .then((res) => res.json())
                .then((data) => console.log(data));
        } else {
            setCustomError("Please Fill all field carefully");
        }
    };
    return (
        <div>
            <section className="w-full flex justify-center">
                <div className="max-w-[564px] bg-white shadow-md p-3 rounded-md">
                    <div>
                        <p className="flex items-center text-gray-400 text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-info-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <span className="ml-1">
                                Give access to your employees
                            </span>
                        </p>
                    </div>
                    {/*Header*/}
                    <section className="my-3">
                        <input
                            type="email"
                            className="w-full border-2 border-gray-100 rounded-tl rounded-bl focus:outline-none px-2 text-gray-400"
                            placeholder="Put Employees Email"
                            onChange={(e) => setEmployeeEmail(e.target.value)}
                        />
                    </section>
                    <div className="my-3 flex">
                        <p className="w-full border-2 border-gray-100 rounded-tl rounded-bl focus:outline-none px-2 text-gray-400">
                            {passcode}
                        </p>
                        <button
                            className="bg-gray-200 p-1 rounded-tr rounded-br"
                            onClick={passCodeGenerate}
                        >
                            Generate
                        </button>
                    </div>
                    <p className="my-3 text-sm text-red-500">{customError}</p>
                    <button
                        className="w-full bg-cyan-400 text-white rounded p-1"
                        onClick={handleEmployee}
                    >
                        Add Employee
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CompanySettings;
