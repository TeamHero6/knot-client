import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FaRegEdit } from 'react-icons/fa';

const EmailMarketing = () => {
    return (
        <div className='mx-5 mt-3'>
            <div className='flex justify-between items-center'>
                <div class="form-control min-w-[400px] border rounded-3xl bg-[#EEEEEE] border-[#0182BE]">
                    <div class="input-group ">
                        <button class="btn btn-ghost text-2xl">
                            <BiSearchAlt></BiSearchAlt>
                        </button>
                        <input className='text-xl w-full mr-4 bg-[#EEEEEE]' type="text" placeholder="Search Here" class="input" />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <div className='text-xl'>
                        <p>Total Sent Mail: 12</p>
                        <p>Total Subscribe: 06</p>
                    </div>
                    <div>
                        <button className='btn btn-outline flex justify-center items-center text-xl py-2 px-4 bg-[#EEEEEE]'>
                            <FaRegEdit />
                            <p>Compose</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailMarketing;