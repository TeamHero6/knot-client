import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Puff } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../../firebase.init";
import { loginAction } from "../../../../Redux/Authentication/authAction";
import Navbar from "../../../Shared/Navbar/Navbar";

const BusinessLogin = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [signInWithEmailAndPassword, user, Eloading, error] =
        useSignInWithEmailAndPassword(auth);
    const [customError, setCustomError] = useState("");
    const [loadingMessage, setLoadingMessage] = useState("");
    const [employeeWantLogin, setEmployeeWantLogin] = useState(false);

    const dispatch = useDispatch();

    let location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        setLoadingMessage("Please Wait...");
        setCustomError("");
        const email = data.email;
        const role = data.userRole;
        const password = data.password;
        const signInDetails = { email, role };

        if (role === "Employee") {
            setCustomError("");
            const secretCode = data?.secretCode;
            const info = { email, secretCode };
            console.log(info);
            fetch(
                "https://knot-business-solution-server.herokuapp.com/checkEmployee",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(info),
                }
            )
                .then((res) => res.json())
                .then(async (data) => {
                    const role = data?.role;
                    const message = data?.message;
                    if (role) {
                        setCustomError("");
                        await signInWithEmailAndPassword(email, password);
                        setLoadingMessage("");
                        navigate(from, { replace: true });
                    } else {
                        setCustomError("");
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${message}`,
                            footer: `Please Contact with your manager.`,
                        });
                    }
                });
        }

        if ((role === "Manager") | (role === "CEO")) {
            setCustomError("");
            //check isRole
            fetch(
                "https://knot-business-solution-server.herokuapp.com/isRole",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(signInDetails),
                }
            )
                .then((res) => res.json())
                .then(async (data) => {
                    const { role, loggerInfo, token } = data;
                    if (role) {
                        dispatch(loginAction(loggerInfo));
                        localStorage.setItem("accessToken", token);
                        await signInWithEmailAndPassword(email, password);
                        setLoadingMessage("");
                    } else {
                        setLoadingMessage("");
                        setCustomError(
                            "You account have an issue! contact us."
                        );
                    }
                });
        }
    };

    //handle Employee || purpose for secret code input field
    const handleEmployee = (e) => {
        if (e.target.value !== "Employee") {
            setEmployeeWantLogin(false);
        }
        if (e.target.value === "Employee") {
            setEmployeeWantLogin(true);
        }
    };

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <Navbar />
            <section className="flex justify-center items-center w-full px-3 flex-1 text-center md:px-20 bg-gray-100 min-h-screen">
                <div className="bg-white rounded-2xl shadow-2xl md:flex w-[100%] md:w-3/4 lg:w-2/3 max-w-4xl">
                    <div className="w-full lg:w-3/5 p-5">
                        <div className="text-left font-bold">
                            <span className="text-cyan-400">Knot</span>Company
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-cyan-400">
                                Sign in to Account
                            </h2>
                            <div className="border-2 w-10 border-cyan-400 inline-block"></div>
                            <p className="text-gray-400 my-3">
                                or use your email account
                            </p>
                            <div>
                                <form
                                    className="w-64 mx-auto"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <FaRegEnvelope className=" m-2 text-gray-400" />
                                            <input
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Email is required",
                                                    },
                                                    pattern: {
                                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                        message:
                                                            "Provide a Valid Email",
                                                    },
                                                })}
                                                type="email"
                                                placeholder="Email"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="email"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.email?.type ===
                                                "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.email.message}
                                                </span>
                                            )}
                                            {errors.email?.type ===
                                                "pattern" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.email.message}
                                                </span>
                                            )}
                                        </h1>
                                    </section>
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <select
                                                className="text-gray-400 bg-transparent w-full outline-none"
                                                {...register("userRole", {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Your Role is Required",
                                                    },
                                                })}
                                                onChange={handleEmployee}
                                            >
                                                <option value="">
                                                    Select Your Role
                                                </option>
                                                <option value="CEO">CEO</option>
                                                <option value="Manager">
                                                    Manager
                                                </option>
                                                <option value="Employee">
                                                    Employee
                                                </option>
                                            </select>
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.userRole?.type ===
                                                "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.userRole.message}
                                                </span>
                                            )}
                                        </h1>
                                    </section>
                                    {/*Choose your role*/}
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                            <MdLockOutline className=" m-2 text-gray-400" />
                                            <input
                                                {...register("password", {
                                                    minLength: {
                                                        value: 6,
                                                        message:
                                                            "password should be minimum 8 characters",
                                                    },
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Password is Required",
                                                    },
                                                })}
                                                type="password"
                                                placeholder="Password"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="password"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.password?.type ===
                                                "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.password.message}
                                                </span>
                                            )}
                                            {errors.password?.type ===
                                                "minLength" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.password.message}
                                                </span>
                                            )}
                                        </h1>
                                    </section>
                                    {/*Password Field*/}
                                    {employeeWantLogin && (
                                        <section>
                                            <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                                <MdLockOutline className=" m-2 text-gray-400" />
                                                <input
                                                    {...register("secretCode", {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                "Secret Code is Required",
                                                        },
                                                    })}
                                                    type="text"
                                                    placeholder="Secret Code"
                                                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                    id="password"
                                                />
                                            </div>
                                            <h1 className="text-left ml-2">
                                                {errors.secretCode?.type ===
                                                    "required" && (
                                                    <span className="w-full text-left text-red-400 text-sm">
                                                        {
                                                            errors?.secretCode
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </h1>
                                        </section>
                                    )}
                                    <div className="text-left ml2 w-full text-red-400 text-sm mt-2">
                                        {customError}
                                    </div>
                                    {Eloading ? (
                                        <div className="flex items-center justify-center w-full mt-3">
                                            <button className="border-2 border-cyan-400 rounded-full px-12 py-2 flex items-center justify-center">
                                                <Puff
                                                    height="20"
                                                    width="20"
                                                    radius="9"
                                                    color="black"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle
                                                    wrapperClass
                                                />
                                                <span className="ml-2">
                                                    {loadingMessage}
                                                </span>
                                            </button>
                                        </div>
                                    ) : (
                                        <input
                                            type="submit"
                                            value="LOGIN"
                                            className="border-2 mt-3 border-cyan-400 rounded-full px-12 py-2 hover:bg-cyan-400 hover:text-white duration-500 transition-all"
                                        />
                                    )}
                                </form>
                                <p className="mt-3 md:hidden">
                                    New to Knot ?{" "}
                                    <Link
                                        to="/signup"
                                        className="text-cyan-400"
                                    >
                                        Sign Up
                                    </Link>{" "}
                                </p>
                            </div>
                            {/*Input Field*/}
                        </div>
                    </div>{" "}
                    {/*Sign in section */}
                    <div className="hidden md:block bg-cyan-400 lg:w-2/5 p-5 text-white rounded-tr-2xl rounded-br-2xl md:py-36 md:px-4 lg:px-12">
                        <h2 className="font-bold text-3xl mb-2">
                            Hello, Friend!
                        </h2>
                        <div className="border-2 w-10 border-white inline-block"></div>
                        <p className="mb-4">
                            Fill up personal information and start journey with
                            us.
                        </p>
                        <Link
                            to="/BusinessSignUp"
                            className="border-2 border-white rounded-full md:px-3 lg:px-12 py-2 hover:bg-white hover:text-cyan-400 duration-500 transition-all"
                        >
                            Sign Up
                        </Link>
                    </div>{" "}
                    {/*Sign up section */}
                </div>
            </section>
        </div>
    );
};

export default BusinessLogin;
