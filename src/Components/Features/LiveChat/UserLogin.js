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
        console.log(loginUser);

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
        <div class="flex h-screen w-full items-center justify-center">
            <div class="rounded-md bg-cyan-400 px-4 py-5 sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div class="flex flex-col">
                    <label for="secret" class="text-gray-200">Type your Secret Code</label>
                    <input id="secret" type="text" class="rounded-sm border-b-2 border-white bg-transparent px-2 text-white outline-none" />
                </div>
                <button class="w-full border-2 border-white mt-2 py-1 rounded-xl text-white">Login</button>
            </div>
        </div>
    );
};

export default UserLogin;
