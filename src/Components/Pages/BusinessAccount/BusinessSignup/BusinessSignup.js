import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { MdLockOutline, MdOutlineAddBusiness } from "react-icons/md";
import { Puff } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import logo from "../../../../Assets/logo/KnotLogo.png";
import auth, { storage } from "../../../../firebase.init";
import { authAction } from "../../../../Redux/Auth/authAction";
import Navbar from "../../../Shared/Navbar/Navbar";

const BusinessSignup = () => {
    //Authentications
    const [createUserWithEmailAndPassword, user, Googleloading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    //State for loader
    const [loadingMessage, setLoadingMessage] = useState("");

    //handle signup error
    const [customError, setCustomError] = useState("");
    const [employeeSignUp, setEmployeeSignUp] = useState(false);
    const dispatch = useDispatch();

    let location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        setLoadingMessage("Please Wait...");
        setCustomError("");
        //Variable declare
        const email = data.email;
        const name = data.name;
        const password = data.password;
        const companyName = data.businessName;
        const role = data.userRole;
        const secretCode = data?.secretCode;

        //Sign up for CEO and Manger
        if (role !== "Employee") {
            //Business Logo upload to firebase storage
            const BusinessLogo = await data?.logo[0];
            const logoRef = ref(storage, `logos/${BusinessLogo.name + v4()}`);
            await uploadBytes(logoRef, BusinessLogo).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    //When url is ready
                    if (url) {
                        const userInfo = {
                            name,
                            email,
                            password,
                            companyName,
                            userPhoto: "",
                            role,
                            CompanyLogo: url,
                        };

                        // Send Data to Server
                        fetch("http://localhost:5000/createdUser", {
                            method: "PUT",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(userInfo),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                const token = data?.token;
                                const loggerInfo = data?.loggerInfo;
                                const error = data?.message;
                                if (error) {
                                    setLoadingMessage("");
                                    setCustomError(error);
                                }
                                if (token) {
                                    localStorage.setItem("accessToken", token);
                                    dispatch(authAction(loggerInfo));
                                    createUserWithEmailAndPassword(
                                        email,
                                        password
                                    );
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Your account is now ready",
                                        showConfirmButton: false,
                                        timer: 2000,
                                    });
                                    setLoadingMessage("");
                                    reset();
                                    navigate(from, { replace: true });
                                }
                            });
                    }
                });
            });

            //handle dynamic input field for Employee Sign up

            if (Googleloading) {
                setLoadingMessage("Please Wait...");
            }

            if (user) {
                setLoadingMessage("");
                navigate(from, { replace: true });
            }
        }

        //Sign up for Employee
        if (role === "Employee") {
            const info = { email, secretCode, name };

            fetch("http://localhost:5000/checkEmployee", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(info),
            })
                .then((res) => res.json())
                .then(async (data) => {
                    const { role, message, loggerInfo } = data;
                    if (role) {
                        setLoadingMessage("");
                        await createUserWithEmailAndPassword(email, password);
                        dispatch(authAction(loggerInfo));
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your account is now ready",
                            showConfirmButton: false,
                            timer: 2000,
                        });
                        navigate(from);
                    } else {
                        setLoadingMessage("");
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${message}`,
                            footer: `Please Contact with your manager.`,
                        });
                    }
                });
        }
    };

    const handleEmployeeSignUp = (e) => {
        if (e.target.value !== "Employee") {
            setEmployeeSignUp(false);
        }
        if (e.target.value === "Employee") {
            setEmployeeSignUp(true);
        }
    };
    return (
        <div className="min-h-screen">
            <Navbar />
            <section className="flex justify-center items-center w-full flex-1 text-center px-3 md:px-20 bg-gray-100 min-h-screen">
                <div className="bg-white rounded-2xl shadow-2xl md:flex w-[100%] md:w-3/4 lg:w-2/3 max-w-4xl mt-8 mb-8">
                    <div className="w-full lg:w-3/5 p-5 my-auto">
                        <div className="text-left font-bold">
                            <span>
                                <img src={logo} className="w-20" alt="" />
                            </span>
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-cyan-400">
                                Create an Business account
                            </h2>
                            <div className="border-2 w-10 border-cyan-400 inline-block"></div>
                            <p className="text-gray-400 my-3">
                                Access All Tools 100% Free
                            </p>
                            <div>
                                <form
                                    className="w-64 mx-auto"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <section>
                                        <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl">
                                            <FaRegUser className=" m-2 text-gray-400" />
                                            <input
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Name is required",
                                                    },
                                                })}
                                                type="text"
                                                placeholder="Your Name"
                                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                id="name"
                                            />
                                        </div>
                                        <h1 className="text-left ml-2">
                                            {errors.name?.type ===
                                                "required" && (
                                                <span className="w-full text-left text-red-400 text-sm">
                                                    {errors?.name.message}
                                                </span>
                                            )}
                                        </h1>
                                    </section>{" "}
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
                                    {/*Email Field*/}
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
                                                onChange={handleEmployeeSignUp}
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
                                    </section>{" "}
                                    {/*Company Role*/}
                                    {!employeeSignUp && (
                                        <section>
                                            <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                                <MdOutlineAddBusiness className=" m-2 text-gray-400" />
                                                <input
                                                    {...register(
                                                        "businessName",
                                                        {
                                                            required: {
                                                                value: true,
                                                                message:
                                                                    "Company name is required",
                                                            },
                                                        }
                                                    )}
                                                    type="text"
                                                    placeholder="Your Company Name"
                                                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                                    id="Businessname"
                                                />
                                            </div>
                                            <h1 className="text-left ml-2">
                                                {errors.businessName?.type ===
                                                    "required" && (
                                                    <span className="w-full text-left text-red-400 text-sm">
                                                        {
                                                            errors?.businessName
                                                                .message
                                                        }
                                                    </span>
                                                )}
                                            </h1>
                                        </section>
                                    )}
                                    {/*Company Name Field*/}
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
                                    {!employeeSignUp && (
                                        <section>
                                            <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                                <AiOutlineCloudUpload className=" m-2 text-gray-400" />
                                                <label
                                                    htmlFor="businessLogo"
                                                    className="outline-none h-full text-sm text-gray-400 bg-gray-100"
                                                >
                                                    Upload Company Logo
                                                </label>
                                                <input
                                                    {...register("logo", {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                "Your Businessn Logo is Required",
                                                        },
                                                    })}
                                                    type="file"
                                                    id="businessLogo"
                                                    className="hidden"
                                                />
                                            </div>
                                            <h1 className="text-left ml-2">
                                                {errors.logo?.type ===
                                                    "required" && (
                                                    <span className="w-full text-left text-red-400 text-sm">
                                                        {errors?.logo.message}
                                                    </span>
                                                )}
                                            </h1>
                                        </section>
                                    )}
                                    {employeeSignUp && (
                                        <section>
                                            <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                                                <MdLockOutline className=" m-2 text-gray-400" />
                                                <input
                                                    {...register("secretCode", {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                "secretCode is required",
                                                        },
                                                    })}
                                                    type="text"
                                                    placeholder="Company Secret Code"
                                                    className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
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
                                    {/*Secret Code*/}
                                    <h1 className="text-left ml-2">
                                        <span className="w-full text-left text-red-400 text-sm">
                                            {customError}
                                        </span>
                                    </h1>
                                    {/*handle signup error*/}
                                    {Googleloading || loadingMessage ? (
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
                                            value="SIGN UP"
                                            className="border-2 mt-3 border-cyan-400 rounded-full px-12 py-2 hover:bg-cyan-400 hover:text-white duration-500 transition-all"
                                        />
                                    )}
                                </form>
                                <p className="mt-3 md:hidden">
                                    Already have an Account?{" "}
                                    <Link to="/login" className="text-cyan-400">
                                        Login
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
                            to="/BusinessLogin"
                            className="border-2 border-white rounded-full md:px-3 lg:px-12 py-2 hover:bg-white hover:text-cyan-400 duration-500 transition-all"
                        >
                            Sign in
                        </Link>
                    </div>{" "}
                    {/*Sign up section */}
                </div>
            </section>
        </div>
    );
};

export default BusinessSignup;
