import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import Loader from "../../../Shared/Loader/Loader";
import HRCircularCard from "./HRCircularCard";

const HrVacancy = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    // const [carcular, setCarcular] = useState([]);
    const [short, setShort] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/applicant")
            .then((res) => res.json())
            .then((data) => setShort(data));
    }, [short]);

    const { data: carcular, isLoading } = useQuery(["circuler"], () =>
        fetch(
            "http://localhost:5000/vacancy"
        ).then((res) => res.json())
    );

    // useEffect(() => {
    //     fetch()
    //         .then((res) => res.json())
    //         .then((data) => setCarcular(data));
    // }, [carcular]);

    const onSubmit = (data) => {
        fetch("http://localhost:5000/vacancy", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((inserted) => {
                if (inserted.insertedId) {
                    reset();
                    toast.success("add Vacancy");
                }
            });
    };

    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className="ml-5">
            <div>
                <button
                    onClick={() => setShow(!show)}
                    className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                >
                    <IoIosAddCircleOutline className="text-2xl" />
                    Add Vacancy
                </button>{" "}
                {show ? (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ opacity: 0 }}
                        className=""
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <section className="lg:w-7/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto">
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-52"
                                        htmlFor="name"
                                    >
                                        Publish Date:{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="date"
                                        {...register("Job_Publish_Date")}
                                        id=""
                                        placeholder="Job Publish Date"
                                    />
                                    <br />
                                </div>
                                <div className="md:flex items-center">
                                    <label
                                        className="font-bold w-52"
                                        htmlFor="name"
                                    >
                                        Last Apply Date:{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="date"
                                        {...register("Last_Date_Apply")}
                                        id=""
                                        placeholder="Last Date for Apply:"
                                    />
                                    <br />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Job_Title")}
                                        id=""
                                        placeholder="Job Title"
                                    />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Location")}
                                        id=""
                                        placeholder="Location"
                                    />
                                    <input
                                        className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Position")}
                                        id=""
                                        placeholder="Position"
                                    />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Salary_Range")}
                                        id=""
                                        placeholder="Salary Range"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Number_openings")}
                                        id=""
                                        placeholder="Number of openings"
                                    />
                                </div>

                                <div className="flex flex-row gap-5">
                                    <textarea
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("About_the_job")}
                                        id=""
                                        placeholder="About the job"
                                    />
                                </div>

                                <div className="flex justify-center mt-2">
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                    >
                                        <AiFillSave />
                                        Save
                                    </button>{" "}
                                    <br />
                                </div>
                            </section>
                        </form>
                    </motion.div>
                ) : (
                    ""
                )}
            </div>
            <div className="my-5">
                <h3 className="text-[#0182be] text-2xl">Circular</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {carcular.slice(0, 20).map((circular) => (
                        <HRCircularCard circular={circular}></HRCircularCard>
                    ))}
                </div>
            
        </div>
    );
};

export default HrVacancy;
