import React, { useEffect, useState } from "react";
import BlogCard from "../../Shared/BlogCard/BlogCard";
import Navbar from "../../Shared/Navbar/Navbar";

const Blog = () => {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then((res) => res.json())
            .then((result) => setposts(result));
    }, []);
    return (
        <div>
            <Navbar />
            <div>
                <h2 className="text-4xl my-6 ml-20 font-semibold">Blogs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 px-2">
                {posts.map((post) => (
                    <BlogCard {...{ title: post.title, body: post.body }} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
