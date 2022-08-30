import React, { useEffect, useState } from "react";
import AdminBlogCard from "../../AdminPanel/Blog/AdminBlogCard";
import BlogCard from "../../Shared/BlogCard/BlogCard";
import Navbar from "../../Shared/Navbar/Navbar";

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/newBlog')
            .then((res) => res.json())
            .then((data) => setBlog(data.reverse()));
    }, [blog]);

    // const [posts, setposts] = useState([]);
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts/")
    //         .then((res) => res.json())
    //         .then((result) => setposts(result));
    // }, []);
    // console.log(posts);
    return (
        <div>
            <Navbar />
            <div>
                <h2 className="text-4xl my-6 ml-20 font-semibold">Our Blogs</h2>
            </div>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-4 px-2">
                {posts.map((post) => (
                    <BlogCard {...{ title: post.title, body: post.body }} />
                ))}
            </div> */}

            <div>
                {
                    blog.map(blog => <AdminBlogCard
                        blog={blog}
                    ></AdminBlogCard>)
                }



                
            </div>
        </div>
    );
};

export default Blog;
