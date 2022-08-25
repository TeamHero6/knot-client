import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSave, AiOutlineEye, AiTwotoneDelete } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const HrVacancy = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const [carcular, setCarcular] = useState([]);
    const [short, setShort] = useState([]);
    const [shows, setShows] = useState(false);
    const [modal, setmodal] = useState({});
    const [applican, setapplican] = useState({});



    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/applicant")
            .then((res) => res.json())
            .then((data) => setShort(data));
    }, [short]);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/vacancy")
            .then((res) => res.json())
            .then((data) => setCarcular(data));
    }, [carcular]);

    const handaldelete = (id) => {
        const url = `https://knot-business-solution-server.herokuapp.com/vacancy/${id}`;
        fetch(url, { method: "DELETE" })
            .then((res) => res.json())
            .then((data) => {
                toast.warning("Delete carcular");
            });
    };
    const deleteap = (id) => {
        const url = `https://knot-business-solution-server.herokuapp.com/applicant/${id}`;
        fetch(url, { method: "DELETE" })
            .then((res) => res.json())
            .then((data) => {
                toast.warning("Delete applicant");
            });
    };

    const onSubmit = (data) => {
        fetch("https://knot-business-solution-server.herokuapp.com/vacancy", {
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
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <section className="lg:w-7/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto">
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
                                    <textarea
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("About_the_job")}
                                        id=""
                                        placeholder="About the job"
                                    />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <textarea
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Skill_required:")}
                                        id=""
                                        placeholder="Skill required:"
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
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Number_openings")}
                                        id=""
                                        placeholder="Number of openings"
                                    />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Job_Publish_Date")}
                                        id=""
                                        placeholder="Job Publish Date"
                                    />
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Last_Date_Apply")}
                                        id=""
                                        placeholder="Last Date for Apply:"
                                    />
                                </div>

                                <div className="lg:flex justify-between md:flex pt-2">
                                    <button
                                        className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                        type="subimt"
                                    >
                                        <AiFillSave />
                                        Save
                                    </button>
                                </div>
                            </section>
                        </form>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className="my-5">
                <h3 className="text-[#0182be] text-2xl">Circular</h3>
                <div className="mx-auto w-full rounded-lg my-3 ">
                    <div class="rounded-none w-full mx-auto ">
                        <table class="shadow-2xl border-2 border-cyan-300 w-full mx-auto my-12 text-base overflow-hidden">
                            <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                                <tr>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        Position
                                    </th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        Number of openings
                                    </th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        Last Date for Apply
                                    </th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        View
                                    </th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {carcular.map((c) => (
                                    <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                        <td className="py-3 px-6 whitespace-nowrap">
                                            {c.Position}
                                        </td>
                                        <td className="py-3 px-6 whitespace-nowrap">
                                            {c.Number_openings}
                                        </td>
                                        <td className="py-3 px-6 whitespace-nowrap">
                                            {c.Last_Date_Apply}
                                        </td>

                                        <td className="text-[#0182be]  text-center">
                                            <label
                                                for={c._id}
                                                onClick={() => setmodal(c)}
                                                class="modal-button text-center"
                                            >
                                                <AiOutlineEye className="text-2xl "></AiOutlineEye>
                                            </label>
                                        </td>
                                        <td className="text-red-700 text-center">
                                            <button
                                                onClick={() =>
                                                    handaldelete(c._id)
                                                }
                                            >
                                                {" "}
                                                <AiTwotoneDelete></AiTwotoneDelete>{" "}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <input
                            required
                            type="checkbox"
                            id={modal._id}
                            class="modal-toggle"
                        />
                        <div class="modal">
                            <div class="modal-box">
                                <div>
                                    <div>
                                        <h1 className="text-xl border-b-2 border-yellow-500 capitalize mb-3">
                                            Details info
                                        </h1>
                                        <div>
                                            <p>
                                                <span className="font-medium capitalize">
                                                    {" "}
                                                    Position:{" "}
                                                </span>
                                                {modal.Position}
                                            </p>
                                            <p>
                                                <span className="font-medium capitalize">
                                                    Number of openings:{" "}
                                                </span>
                                                {modal.Number_openings}
                                            </p>
                                            <p>
                                                <span className="font-medium capitalize">
                                                    Last Date Apply:{" "}
                                                </span>
                                                {modal.Last_Date_Apply}
                                            </p>
                                            <p>
                                                <span className="font-medium capitalize">
                                                    Salary Range:{" "}
                                                </span>
                                                {modal.Salary_Range}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-action">
                                    <label
                                        for={modal._id}
                                        class="btn btn-warning"
                                    >
                                        Cancel
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HrVacancy;