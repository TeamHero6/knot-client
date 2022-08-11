import React from "react";

const FilterCard = ({ user, setEmployeeEmail, setEmployeeName }) => {
    const { img, email, name } = user;
    const handleSelectUser = () => {
        setEmployeeEmail(email);
        setEmployeeName(name);
    };
    return (
        <div
            className="w-full flex hover:bg-custom-gray rounded p-1"
            onClick={handleSelectUser}
        >
            <div className="mx-2">
                <img
                    src={
                        img
                            ? img
                            : "https://pipilikasoft.com/wp-content/uploads/2018/08/demo.jpg"
                    }
                    alt=""
                    className="w-8 h-8 rounded-full"
                />
            </div>
            <div className="flex flex-col cursor-pointer">
                <span>{name}</span>
                <small className="text-xs">{email}</small>
            </div>
        </div>
    );
};

export default FilterCard;
