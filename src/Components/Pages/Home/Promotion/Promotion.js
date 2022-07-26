import React from "react";
import howToWork from "../../../../Assets/images/how-to-work.png";

const Promotion = () => {
    return (
        <div className="my-24 mb-40">
            <h1 className="text-center text-xl md:text-2xl tracking-wider">
                Adjustable Software That Gets Your Business Organized.
            </h1>
            <hr className=" w-1/2 md:w-1/3 mx-auto mt-1" />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div>
                    <img
                        className="w-[360px] lg:w-[420px]"
                        src={howToWork}
                        alt=""
                    />
                </div>
                <div className="lg:w-1/4 md:w-1/3 ml-4 sm:ml-0">
                    <div>
                        <h3 className="text-xl font-medium lg:mt-6">
                            Adjustable & Accessible
                        </h3>
                        <p className="text-sm">
                            KNOT is adjustable for any business you have. Also, it is accessible from any of your favorite devices and any of your favorite places.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium mt-4">
                            All facilities. One place.
                        </h3>
                        <p className="text-sm">
                            Everything wants for your dream business solution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
