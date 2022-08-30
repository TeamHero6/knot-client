import React, { useState } from "react";
import { useSelector } from "react-redux";

const AccountManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const faq = useSelector((state) => state.faq);
    const { account } = faq;
    console.log(faq);
    return (
        <section>
            <div className="w-full px-6">
                {account.map((f) => {
                    return (
                        <div
                            key={f.id}
                            className="mb-4 text-sm border-b-[0.5px] pb-4 border-gray-400"
                        >
                            <p className="font-semibold py-1">Q: {f.Ques}</p>
                            <p>{f.Ans}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AccountManagement;
