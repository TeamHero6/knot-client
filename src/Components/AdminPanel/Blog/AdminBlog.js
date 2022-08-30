import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { AiFillSave } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
import AdminBlogCard from './AdminBlogCard';

const AdminBlog = () => {
    const [show, setShow] = useState(false);
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/newBlog')
            .then((res) => res.json())
            .then((data) => setBlog(data.reverse()));
    }, [blog]);
    // console.log(blog);

    const handleBlog = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const title = e.target.title.value;
        const article = e.target.article.value;

        const newBlog = {
            date,
            title,
            article,
        };
        console.log(newBlog);
        fetch(
            "http://localhost:5000/newBlog",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newBlog),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                }
            });
    };
    return (
        <div>
            <div>
                <button
                    onClick={() => setShow(!show)}
                    className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                >
                    <IoIosAddCircleOutline className="text-2xl" />
                    Add Blog
                </button>{" "}
            </div>
            {show ? (
                <div className="mt-6 bg-white py-8 rounded-sm w-3/4 mx-auto mb-5">
                    <form className='w-3/4 mx-auto' onSubmit={handleBlog}>
                        <h1 className='font-bold mb-4'>New Blog</h1>
                        <input type="hidden" name="date" id="" value={moment().format('ll')} />
                        <input type="text" name='title' id="username-success" class="bg-green-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-green-100 dark:focus:ring-blue-500 outline-none" placeholder="Blog Title"></input>
                        <br />
                        <textarea id="message" name='article' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-green-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Write your article..."></textarea>
                        <div className="flex justify-center mt-2"> <br />
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                            >
                                <AiFillSave />
                                Save
                            </button>{" "}
                            <br />
                        </div>
                    </form>
                </div>
            ) : (
                ""
            )}

            {
                blog.map(blog => <AdminBlogCard
                    blog={blog}
                ></AdminBlogCard>)
            }
        </div>
    );
};

export default AdminBlog;