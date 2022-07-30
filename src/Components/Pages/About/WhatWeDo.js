import React from "react";
import handleBusiness from "../../../Assets/images/undraw_engineering_team_re_fvat.svg";

const WhatWeDo = () => {
    return (
        <section className="md:flex md:justify-center md:align-center w-full h-auto md:px-8 lg:px-12 mt-12">
            <div className="text-left w-[100%] flex flex-col justify-center  md:w-1/2 px-4">
                <h2 className="text-4xl font-bold tracking-wide mb-4">
                    We Handle All Your Problem Business
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias alias odio, molestiae, cum dolore consequatur
                    nihil natus itaque suscipit id excepturi in accusamus veniam
                    quam magnam. Officiis perspiciatis velit provident, a
                    laborum autem ab iste possimus sapiente cumque perferendis
                    ex quidem quam tenetur pariatur, rem sint vitae. Sed
                    distinctio nihil voluptatem perspiciatis ipsum et error unde
                    maxime architecto, minus eius aut, sint accusantium veniam
                    ipsa. Autem impedit ab cupiditate quidem quae quia veniam
                    similique quam molestiae quos, harum dolores a assumenda aut
                    expedita, iste iusto voluptas reprehenderit inventore
                </p>
            </div>
            <div className="w-[100%] md:w-1/2 mt-6 md:mt-0">
                <img src={handleBusiness} className="w-full" alt="" />
            </div>
        </section>
    );
};

export default WhatWeDo;
