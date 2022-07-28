import React from "react";

const BlogCard = ({ title, body }) => {
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/400/arch" alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>{body}</p>
                    <div class="card-actions justify-end">
                        <button class="btn bg-cyan-400 border-0">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
