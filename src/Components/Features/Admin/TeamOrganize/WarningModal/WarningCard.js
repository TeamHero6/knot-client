import React from "react";

const WarningCard = ({ warning }) => {
    const { type, warningDate, warningReason, name, photo } = warning;
    console.log(warning);
    return (
        <div className="bg-red-100 border-l-4 border-red-500 py-2 px-4 m-auto rounded-md w-[256px] h-[180px]">
            <div className="flex justify-between text-green-400">
                <div className="flex items-center">
                    <p className="text-gray-600">{name}</p>
                    <button className="bg-red-500 text-white text-[10px] py-1 px-2 rounded-xl ml-2">
                        {type}
                    </button>
                </div>
                <img
                    className="w-7 rounded-full"
                    src={`${
                        photo
                            ? photo
                            : "https://cdn-icons-png.flaticon.com/512/236/236832.png"
                    }`}
                    alt=""
                />
            </div>
            <div className="mt-3">
                <p className="h-24 text-gray-400 overflow-auto">
                    {warningReason}
                </p>
            </div>
            <div>
                <p className="text-right text-xs text-gray-400">
                    {warningDate}
                </p>
            </div>
        </div>
    );
};

export default WarningCard;
