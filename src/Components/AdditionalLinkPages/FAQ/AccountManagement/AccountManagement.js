import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const AccountManagement = () => {
    const [search, searchTerm] = useState("");
    const faq = useSelector((state) => state.faq);
    const { account } = faq;
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="w-full px-6">
                <div className="flex justify-end">
                    <input
                        type="text"
                        className="w-64 py-1 px-3 outline-none border-[0.5px] rounded-md text-gray-400"
                        placeholder="Search Your Question"
                        onChange={(e) => searchTerm(e.target.value)}
                    />
                </div>
                {account
                    .filter((f) => {
                        if (search === "") {
                            return f;
                        } else if (f.Ques.includes(search)) {
                            return f;
                        }
                        return false;
                    })
                    .map((f) => {
                        return (
                            <div
                                key={f.id}
                                className="mb-4 text-sm border-b-[0.5px] pb-4 border-gray-400"
                            >
                                <p className="font-semibold py-1">
                                    Q: {f.Ques}
                                </p>
                                <p>{f.Ans}</p>
                            </div>
                        );
                    })}
            </div>
        </motion.section>
    );
};

export default AccountManagement;
