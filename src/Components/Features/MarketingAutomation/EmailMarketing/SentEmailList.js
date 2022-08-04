import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaRegStar } from 'react-icons/fa';

const SentEmailList = () => {

    const [emailList, setEmailList] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-cliffs-60290.herokuapp.com/sentEmail')
            .then(res => res.json())
            .then(data => setEmailList(data))
    }, []);

    return (
        <div class="overflow-x-auto w-full my-16">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <th>Company</th>
                        <th>Campaign</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        emailList.map(email => <tr key={email._id}>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div>
                                        <div>KNOT</div>
                                    </div>
                                </div>
                            </td>
                            <td className='font-semibold'>
                                {email.emailSubject}
                            </td>
                            <td>
                                {email.emailDescription}
                            </td>
                            <td><RiDeleteBin5Line className='text-xl text-red-500' /> </td>
                            <td><FaRegStar className='text-xl' /> </td>
                            <th>
                                <button class="btn btn-outline btn-xs">Done</button>
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default SentEmailList;