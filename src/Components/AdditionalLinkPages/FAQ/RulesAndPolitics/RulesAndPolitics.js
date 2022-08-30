import React, { useState } from "react";

const RulesAndPolitics = () => {
    const [search, searchTerm] = useState("");
    const rules = [
        {
            id: 1,
            Ques: "Employee background check",
            Ans: "If you have a company and you are an employee in that company then you can use our feature. Otherwise we take steps for break the rules.",
        },
        {
            id: 2,
            Ques: "Monitoring",
            Ans: "We observe that you are the original account owner or not.",
        },
        {
            id: 3,
            Ques: "Not allow multiple device",
            Ans: "We have not allowed multiple devices.If you have one account then you can use only one device.",
        },
        {
            id: 4,
            Ques: "Dont share account with another people",
            Ans: " If you share your account with multiple people then we suspended your account.",
        },
        {
            id: 5,
            Ques: "To access this service you have to pay",
            Ans: "If you want to access our all features you must have a payment account.",
        },
        {
            id: 6,
            Ques: "Spamming and Illegal Activities",
            Ans: "This website spamming and illegal activities are not allowed. If you do spamming and illegal activities we will take steps for break the rules.",
        },
        {
            id: 7,
            Ques: "Third Party Applications",
            Ans: "There do not allow duplication our websites. Without our permission it's not right to duplicate our website.",
        },
        {
            id: 8,
            Ques: "Free and Payments",
            Ans: "You can read our blogs, read about-us page and see our services. When you pay then you use our most interesting feature sales , marketing, finance , live chat,human resource , user dashboard, task management. ",
        },
    ];
    return (
        <div className="w-full px-6">
            <div className="flex justify-end">
                <input
                    type="text"
                    className="w-64 py-1 px-3 outline-none border-[0.5px] rounded-md text-gray-400"
                    placeholder="Search Your Question"
                    onChange={(e) => searchTerm(e.target.value)}
                />
            </div>
            {rules
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
        </div>
    );
};

export default RulesAndPolitics;
