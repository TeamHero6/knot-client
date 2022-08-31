import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import EmployeeAccessModal from "./EmployeeAccessModal";

const CompanyDetails = () => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName, companyLogo } = loggerInfo;

    const {
        data: allEmployees,
        isLoading,
        refetch,
    } = useQuery(["allEmployess", "employees"], () =>
        fetch(
            `https://knot-business-solution-server.herokuapp.com/getAllEmployees/${companyName}`
        ).then((res) => res.json())
    );

    if (isLoading) {
        return <p>Loading...</p>;
    }

    // function for remove employee from company
    const deleteEmployeeHandler = (id, name) => {
        // Remove popup
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://knot-business-solution-server.herokuapp.com/removeEmployee/${id}`,
                    {
                        method: "DELETE",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({ companyName }),
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        if (data?.acknowledged) {
                            refetch();
                            Swal.fire(
                                "Removed!",
                                `You removed ${name}`,
                                "success"
                            );
                        }
                    });
            }
        });
    };
    return (
        <div>
            <section className="my-6 px-6 w-full bg-white">
                <section className="flex items-center">
                    <div className="flex flex-auto items-center px-6 md:px-12 py-3">
                        <img
                            src={companyLogo}
                            className="w-6 h-4 mr-3"
                            alt=""
                        />
                        <h3 className="text-2xl font-semibold">
                            {companyName}
                        </h3>
                    </div>
                    <div className="flex-auto">
                        <input
                            type="text"
                            className="border-[0.5px] max-w-64 outline-none px-2 py-1 rounded text-sm text-gray-400"
                            placeholder="Search by Name"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <label
                        for="addEmployee"
                        className="modal-button flex-none md:w-auto mx-6 md:mx-12 flex px-1 md:px-3 py-1 rounded-lg drop-shadow-md items-center border-[0.5px]"
                        onClick={() => setOpen(!open)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        Add New
                    </label>
                </section>
                <hr />
                <section className="w-full mt-3 px-6 overflow-x-auto">
                    <table className="min-w-max w-full table-auto overflow-hidden">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">
                                    Department
                                </th>
                                <th className="py-3 px-6 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {allEmployees
                                ?.filter((em) => {
                                    return em.name
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase());
                                })
                                .map((em) => {
                                    return (
                                        <>
                                            <tr>
                                                <td className="py-3 px-3 text-left whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <img
                                                            className="w-8 h-8 rounded-full"
                                                            src={em?.userPhoto}
                                                            alt=""
                                                        />
                                                        <div className="flex flex-col ml-2">
                                                            <span className="text-sm">
                                                                {em?.name}
                                                            </span>
                                                            <span className="text-xs">
                                                                {em?.email}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                                    {em?.role}
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <div className="flex item-center justify-center">
                                                        <div className="w-4 mr-2 transform hover:text-cyan-400 hover:scale-110">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                />
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className="w-4 mr-2 transform hover:text-green-400 hover:scale-110">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div
                                                            className="w-4 mr-2 transform hover:text-red-400 hover:scale-110"
                                                            onClick={() =>
                                                                deleteEmployeeHandler(
                                                                    em?._id,
                                                                    em?.name
                                                                )
                                                            }
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })}
                        </tbody>
                    </table>
                </section>
            </section>
            {open && (
                <EmployeeAccessModal setOpen={setOpen} refetch={refetch} />
            )}
        </div>
    );
};

export default CompanyDetails;
