import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserLogin = () => {
    const [secretCode, setSecretCode] = useState("");
    const navigate = useNavigate();
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { email } = loggerInfo;

    const liveAuth = () => {
        const info = { secretCode, email };
        fetch("http://localhost:5000/checkEmployee", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => {
                const { role, message, loggerInfo } = data;
                if (!role) {
                    Swal.fire("Sorry!", `${message}`, "success");
                }
                navigate("/chat/hrchat");
            });
    };

    return (
        <div class="flex h-[90vh] w-full items-center justify-center">
            <div class="rounded-md bg-cyan-400 px-4 py-5 sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div class="flex flex-col">
                    <label for="secret" class="text-gray-200">
                        Type your Secret Code
                    </label>
                    <input
                        id="secret"
                        type="text"
                        class="rounded-sm border-b-2 border-white bg-transparent px-2 text-white outline-none"
                        onChange={(e) => setSecretCode(e.target.value)}
                    />
                </div>
                <button
                    class="w-full border-2 border-white mt-2 py-1 rounded-xl text-white"
                    onClick={liveAuth}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default UserLogin;
