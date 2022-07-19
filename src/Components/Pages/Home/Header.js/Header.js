import React from "react";
import FeaturedApp from "../FeaturedApp/FeaturedApp";

const Header = () => {
    return (
        <div>
            <div className="w-[100%] md:w-[80%] lg:w-[70%] mx-auto mb-32 px-2 md:px-0">
                <h1 className="text-2xl md:text-5xl mt-20 font-semibold">
                    Your Life's Work, Powered By Our Life's Work
                </h1>
                <p className="text-xm md:text-xl px-8 mt-3">
                    Unique and powerful suite of software to run your entire
                    business, brought to you by a company with the long term
                    vision to transform the way you work.
                </p>
            </div>
            <FeaturedApp />
        </div>
    );
};

export default Header;
