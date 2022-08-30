import { motion } from "framer-motion";
import React, { useState } from "react";

const SafetyAndSecurity = () => {
    const [search, searchTerm] = useState("");
    const safetyAndSecurity = [
        {
            id: 1,
            Ques: "Is another user can report my account ?",
            Ans: "No , another user can not report your account. But if you breaks rules we will suspend your account.",
        },
        {
            id: 2,
            Ques: "What we have used to secure your account?",
            Ans: "yes, we have used JWT to secure your account",
        },
        {
            id: 3,
            Ques: "Have your personal information secure?",
            Ans: "Yes, your personal information is secure . We don't share your information with other people. Your information is secure in our database.",
        },
        {
            id: 4,
            Ques: "Is this website have data ownership?",
            Ans: "Yes , this website have data ownership.",
        },
        {
            id: 5,
            Ques: "How to secure a CEO account?",
            Ans: "Yes your CEO account is secure. Because another account doesn't access your information. We have created different databases for different users. Thais why your CEO account is secure.",
        },
        {
            id: 6,
            Ques: "How to secure a manager account?",
            Ans: "Yes, your manager account is secure. If you have a manager account, you don’t have access to CEO features.",
        },
        {
            id: 7,
            Ques: "How to secure an employee account?",
            Ans: "Yes, your employee account is secure. If you have an employee account, you don’t have access to  CEO and manager features.",
        },
        {
            id: 8,
            Ques: "Is this website committed to secure others data?",
            Ans: "Yes , we are committed to secure your information. We don't share your information with other people.",
        },
    ];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full px-6"
        >
            <div className="flex justify-end">
                <input
                    type="text"
                    className="w-64 py-1 px-3 outline-none border-[0.5px] rounded-md text-gray-400"
                    placeholder="Search Your Question"
                    onChange={(e) => searchTerm(e.target.value)}
                />
            </div>
            {safetyAndSecurity
                ?.filter((f) => {
                    if (search === "") {
                        return f;
                    } else if (f.Ques.includes(search)) {
                        return f;
                    }
                })
                .map((f) => {
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
        </motion.div>
    );
};

export default SafetyAndSecurity;
