import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log("Clicked");
    };
    return (
        <section className="flex justify-center items-center w-full flex-1 text-center px-20 bg-gray-100 h-[100vh]">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                <div className="w-3/5 p-5">
                    <div className="text-left font-bold">
                        <span className="text-cyan-400">Knot</span>Company
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-cyan-400">
                            Sign in to Account
                        </h2>
                        <div className="border-2 w-10 border-cyan-400 inline-block"></div>
                        <div className="flex justify-center items-center my-2">
                            <a
                                href="facebook.com"
                                target={"_blank"}
                                className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-cyan-400 hover:text-white duration-400 transition-all"
                            >
                                <FaFacebookF className="text-sm" />
                            </a>
                            <a
                                href="Twitter"
                                target={"_blank"}
                                className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-cyan-400 hover:text-white duration-400 transition-all"
                            >
                                <FaGoogle className="text-sm" />
                            </a>
                            <a
                                href="facebook.com"
                                target={"_blank"}
                                className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-cyan-400 hover:text-white duration-400 transition-all"
                            >
                                <FaFacebookF className="text-sm" />
                            </a>
                        </div>{" "}
                        {/* Social Login section */}
                        <p className="text-gray-400 my-3">
                            or use your email account
                        </p>
                        <div>
                            <form
                                className="w-64 mx-auto"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <section>
                                    <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl">
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
                                        {errors.email?.type === "required" && (
                                            <span className="w-full text-left text-red-400 text-sm">
                                                {errors?.email.message}
                                            </span>
                                        )}
                                        {errors.email?.type === "pattern" && (
                                            <span className="w-full text-left text-red-400 text-sm">
                                                {errors?.email.message}
                                            </span>
                                        )}
                                    </h1>
                                </section>
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
                                <div></div>
                                <input
                                    type="submit"
                                    value="LOGIN"
                                    className="border-2 mt-3 border-cyan-400 rounded-full px-12 py-2 hover:bg-cyan-400 hover:text-white duration-500 transition-all"
                                />
                            </form>
                        </div>
                        {/*Input Field*/}
                    </div>
                </div>{" "}
                {/*Sign in section */}
                <div className="bg-cyan-400 w-2/5 p-5 text-white rounded-tr-2xl rounded-br-2xl md:py-36 md:px-12">
                    <h2 className="font-bold text-3xl mb-2">Hello, Friend!</h2>
                    <div className="border-2 w-10 border-white inline-block"></div>
                    <p className="mb-4">
                        Fill up personal information and start journey with us.
                    </p>
                    <Link
                        to="/signup"
                        className="border-2 border-white rounded-full px-12 py-2 hover:bg-white hover:text-cyan-400 duration-500 transition-all"
                    >
                        Sign Up
                    </Link>
                </div>{" "}
                {/*Sign up section */}
            </div>
        </section>
    );
};

export default Login;
