import React from "react";

const BlogCard = ({ title, body }) => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/400/arch" alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-cyan-400 border-0">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
