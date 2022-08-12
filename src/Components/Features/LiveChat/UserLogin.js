import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserInfo from "./hooks/useUserInfo";

const UserLogin = () => {
    const [userInfo] = useUserInfo();
    console.log(userInfo);

    const handelLoginUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const employeeID = event.target.employeeID.value;

        const loginUser = { name, employeeID };

        fetch("http://localhost:5000/loginuser", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(loginUser),
        })
            .then((res) => res.json())
            .then((data) => {
                navigete("/chat/hrchat");
                event.target.reset();
            });
    };

    const navigete = useNavigate();

    return (
        <div>
            <form
                onSubmit={handelLoginUser}
                className="lg:w-6/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-10 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto"
            >
                <label className="font-bold text-purple-800" htmlFor="name">
                    Login
                </label>{" "}
                <br />
                <div className=" gap-5">
                    <input
                        className="py-2 pl-3 w-8/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                        type="text"
                        name="name"
                        id=""
                        placeholder="User Name"
                        required
                    />
                    <br />
                    <input
                        className="py-2 pl-3 w-8/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                        type="text"
                        name="employeeID"
                        id=""
                        placeholder="Employee ID"
                        required
                    />
                </div>
                <div className="pt-2">
                    <button className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm">
                        <Link to="/chat/hrchat"></Link>Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserLogin;
