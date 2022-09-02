import React from "react";
import homePageCircleIcon from "../../../../Assets/images/homePageCircleIcon.png";
import knotIntroThumbnail from "../../../../Assets/images/introVideoThumb.png";

const Promotion = () => {
    return (
        <div className="my-12 md:my-20">
            <div className="md:flex justify-center md:gap-4 md:mx-20 lg:mx-32">
                <div className="md:w-1/2 p-8">
                    <img className="w-full" src={homePageCircleIcon} alt="" />
                </div>
                <div className="md:ml-4 md:w-1/2 p-8 md:my-auto text-center">
                    <div>
                        <h3 className="text-4xl font-medium">
                            One Stop Business Solution
                        </h3>
                        <p className="text-lg mt-2 text-gray-400">
                            Adjustable for any business. Accessible from any of
                            your favorite devices and any of your favorite
                            places.
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
