import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Plug from '../Assets/icons/Plug.png'

const NotFoundPage = () => {
    return (
        <div>
            <div>
                <div className='text-center'>
                    <h1 className='text-8xl text-[#39498E] font-extrabold'>404</h1>
                    <p className='text-red-600 text-xl'>Page Not Found</p>
                </div>
                <div>
                    <img className='mx-auto' src={Plug} alt="" />
                </div>
                <div className='text-center'>
                    <p className='font-medium text-blue-500'>We're sorry the page your requested could not be found <br /> please go back to homepage</p>
                    <div className='flex  justify-center'>
                        <Link className='flex items-center border border-blue-600 px-3 py-2 mt-5 rounded-sm text-blue-600 gap-2' to='/home'>
                            <div><AiOutlineHome /></div>
                            <div>GO HOME</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;