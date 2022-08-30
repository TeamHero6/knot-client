import React from 'react';

const BlogPageCard = (props) => {
    const { date, title, article } = props.blog
    return (
        <div >
            <div className="w-11/12 mx-auto bg-slate-50 py-5 px-5 my-5 rounded-sm shadow-sm shadow-slate-300">
                <p className='font-bold text-xl'>{title}</p>
                <p>{article}</p>
                <p className='italic text-right'>Publish Date: <span className='text-gray-400'>{date}</span></p>
            </div>
        </div>
    );
};

export default BlogPageCard;