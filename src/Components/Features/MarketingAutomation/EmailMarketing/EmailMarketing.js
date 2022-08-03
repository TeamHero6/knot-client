import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FaRegEdit } from 'react-icons/fa';
import { TbSend } from 'react-icons/tb';
import SentEmailList from './SentEmailList';

const EmailMarketing = () => {
    const [compose, setCompose] = useState(false);

    const handleEmailForm = (e) => {
        e.preventDefault();
        const emailTo = e.target.emailTo.value;
        const emailSubject = e.target.emailSubject.value;
        const emailDescription = e.target.emailDescription.value;
        const emailToSend = { emailTo, emailSubject, emailDescription }
        console.log(emailToSend)

        fetch('http://localhost:5000/sentEmail', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(emailToSend)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    e.target.reset();
                }
            })
    };
    return (
        <div className='mx-5 mt-3'>
            <div className='flex justify-between items-center'>
                <div class="form-control min-w-[400px] border rounded-3xl bg-[#EEEEEE] border-[#0182BE]">
                    <div class="input-group ">
                        <button class="btn btn-ghost text-2xl">
                            <BiSearchAlt></BiSearchAlt>
                        </button>
                        <input className='text-xl w-full bg-[#EEEEEE] mr-4' type="text" placeholder="Search Here" class="input" />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <div className='text-xl'>
                        <p>Total Sent Mail: 12</p>
                        <p>Total Subscribe: 06</p>
                    </div>
                    <div>
                        <button onClick={() => setCompose(!compose)} className='btn btn-outline flex justify-center items-center text-xl py-2 px-4 bg-[#EEEEEE]'>
                            <FaRegEdit />
                            <p>Compose</p>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {
                    compose ?
                        <div className='mt-8 z-50 border rounded-lg'>
                            <form onSubmit={handleEmailForm}>
                                <input className='px-4 z-10 py-2 border-b w-full' type="text" value={'New Mail'} />
                                <br />
                                <input className='px-4 py-2 border-b w-full' type="email" name="emailTo" placeholder='To' required />
                                <br />
                                <input className='px-4 py-2 border-b w-full' type="text" name="emailSubject" placeholder='Subject' required />
                                <br />
                                <textarea className='px-4 py-2  w-full' name="emailDescription" placeholder='...' id="" cols="50" rows="5" required></textarea>
                                <button className='btn btn-outline btn-sm px-4 mx-4 mb-4' type='submit'>
                                    <div className='flex items-center gap-1'>
                                        <TbSend />
                                        <p>Send</p>
                                    </div>
                                </button>
                            </form>
                        </div>
                        : ''
                }
            </div>
            <SentEmailList></SentEmailList>
        </div>
    );
};

export default EmailMarketing;