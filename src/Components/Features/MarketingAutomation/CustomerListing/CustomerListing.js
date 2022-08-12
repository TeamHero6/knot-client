import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Shared/Loader/Loader";

const CustomerListing = () => {
    const { data: newsletterMail, isLoading } = useQuery({
        queryKey: "newsletterMail",
        queryFn: () =>
            fetch(
                "https://knot-business-solution-server.herokuapp.com/newsletterMail"
            ).then((res) => res.json()),
    });

    if (isLoading) {
        return <Loader></Loader>;
    }
    return (
        <div>
            <h1 className="text-center text-3xl my-2">Customer Collection</h1>
            <div className="mx-5 mt-3">
                <div className="overflow-x-auto">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    SL.
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    E-MAIL
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {newsletterMail?.map((mail, index) => (
                                <tr
                                    key={mail._id}
                                    className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                                >
                                    <th className="py-3 px-6 whitespace-nowrap">
                                        {index + 1}
                                    </th>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {mail.email}
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

export default CustomerListing;
