import React from 'react';
import useHRChat from './hooks/useHRChat';
import useUserInfo from './hooks/useUserInfo';
import './LiveChat.css'

const HR = () => {


    const handleHRChat = event => {
        event.preventDefault()
        const chat = event.target.chat.value

        const hrchat = { chat }

        console.log(hrchat);

        fetch('http://localhost:5000/hrchat', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(hrchat)
        })
            .then(res => res.json())
            .then((data) => {
                event.target.reset()
            })
    }

    const [hrChat] = useHRChat()
    console.log(hrChat);
    const [userInfo] = useUserInfo()
    console.log(userInfo);

    return (
        <div>
            <section className='chatBox lg:w-9/12  mx-auto bg-white shadow-gray-300 border shadow-sm rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto'>
                <div className='flex gap-8'>
                    <div className='groupName'>
                        <h2 className='text-purple-700'>My Profile</h2>
                        <br /><br /><br />
                        <h2 className='text-purple-700'>Group Members</h2>
                        <table class="table chatTable mt-5 w-full">
                            <tbody className='text-black  bg-cyan-500 border-b border-cyan-100'>
                                {
                                    userInfo.map(userInfo => <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                        <td className="py-3 px-6 whitespace-normal">{userInfo?.name}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className='chat'>
                        <table class="table chatTable w-full">
                            <thead className='text-purple-700     bg-cyan-500 border-b border-cyan-100'>
                                <tr>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">HR Conversation Group</th>
                                </tr>
                            </thead>
                            <tbody className='text-black  bg-cyan-500 border-b border-cyan-100'>
                                {
                                    hrChat.map(HRchat => <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                        <td className="py-3 px-6 whitespace-normal">{HRchat?.chat}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        <form onSubmit={handleHRChat} className='chatField flex inset-x-0 bottom-0 gap-5'>
                            <input className='py-2 pl-3 w-10/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="text" name="chat" id="" placeholder='Type a message' />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default HR;