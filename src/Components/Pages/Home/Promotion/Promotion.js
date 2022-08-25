import React from "react";
import homePageCircleIcon from "../../../../Assets/images/homePageCircleIcon.svg";
// import howToWork from "../../../../Assets/images/how-to-work.png";
import knotIntroThumbnail from "../../../../Assets/images/introVideoThumb.png";

const Promotion = () => {
    return (
        <div className="my-24 mb-40">
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 mx-32">
                <div className="w-1/2 p-8">
                    <img
                        className="w-full"
                        src={homePageCircleIcon}
                        alt=""
                    />
                </div>
                <div className="ml-4 sm:ml-0 w-1/2 p-8 my-auto text-center">
                    <div>
                        <h3 className="text-4xl">
                            One Stop Business Solution
                        </h3>
                        <p className="text-lg mt-2 text-gray-400">
                            Adjustable for any business. Accessible from any of your favorite devices and any of your favorite places.
                        </p>
                    </div>
                    <div className="mt-6">
                        <img src={knotIntroThumbnail} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
