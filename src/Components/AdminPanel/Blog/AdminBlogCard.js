import React from 'react';

const AdminBlogCard = (props) => {
    const { date, title, article } = props.blog
    return (
        <div className='bg-white px-5 py-2 my-2'>
            <div>
                <div>
                    <h1 className='font-bold text-xl'>{title}</h1>
                </div>
                <p>{article}</p>
            </div>
            <div className='text-right'>
                <small className='text-gray-400'>Publish Date: {date}</small>
            </div>
        </div>
    );
};

export default AdminBlogCard;