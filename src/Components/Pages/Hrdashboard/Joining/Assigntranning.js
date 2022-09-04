import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSave } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { toast } from "react-toastify";

const Assigntranning = () => {
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);
    const [Trainnig, setTrainnig] = useState([]);
    // const [employinfo, setEmployinfo] = useState({});
    useEffect(() => {
        fetch("http://localhost:5000/Trainnig")
            .then((res) => res.json())
            .then((data) => setTrainnig(data));
    }, [Trainnig]);

    const onSubmit = (data) => {
        fetch("http://localhost:5000/Trainnig", {
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
                    toast.success("Trainnig Assign");
                }
            });
    };
    return (
        <div>
            <button
                onClick={() => setShow(!show)}
                for="my-drawer"
                className="flex  border-transparent items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover: shadow-blue-300 hover: shadow-sm"
            >
                <span>
                    <BiPlus></BiPlus>
                </span>
                <span className="capitalize"> Assign Tranning</span>
            </button>

            {show ? (
                <div className="py-20">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className="lg:w-11/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto">
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Applicant_Name")}
                                    id=""
                                    placeholder="Applicant Name"
                                />

                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Depertment")}
                                    id=""
                                    placeholder="Depertment"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Tranning_Duration")}
                                    id=""
                                    placeholder="Tranning Duration"
                                />
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Designation")}
                                    id=""
                                    placeholder="Designation"
                                />
                            </div>

                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Taining_Location")}
                                    id=""
                                    placeholder="Taining Location"
                                />
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="date"
                                    {...register("Start_Time")}
                                    id=""
                                    placeholder="Start Date & Time"
                                />
                            </div>

                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="date"
                                    {...register("End_Time")}
                                    id=""
                                    placeholder="End Date & Time"
                                />
                            </div>

                            <h2 className="text-xl font-bold my-2">
                                Trainer Details
                            </h2>
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("name")}
                                    id=""
                                    placeholder="Name"
                                />
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("T_depertment")}
                                    id=""
                                    placeholder="Depertment"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("t_Designation")}
                                    id=""
                                    placeholder="Designation"
                                />
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="number"
                                    {...register("Contact_Number")}
                                    id=""
                                    placeholder="Contact Number"
                                />
                            </div>

                            <div className="lg:flex justify-between md:flex pt-2">
                                <button
                                    className="flex  border-transparent items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover: shadow-blue-300 hover: shadow-sm"
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

            <div className="mx-auto w-full rounded-lg my-5 ">
                <div className="overflow-auto  rounded-none">
                    <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Applicant Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Department
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Trainer Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Trainnig.map((t) => (
                                <tr className="hover:shadow-md hover:bg-cyan-100  duration-500 cursor-pointer border-b border-cyan-100">
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {t.Applicant_Name}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {t.Depertment}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <button>Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Assigntranning;
