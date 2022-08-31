import React, { useEffect, useState } from 'react';

const Newsletter = () => {
    const [newsletter, setNewsletter] = useState([]);

    useEffect(() => {
        fetch('https://knot-business-solution-server.herokuapp.com/newsletterMail')
            .then((res) => res.json())
            .then((data) => setNewsletter(data.reverse()));
    }, [newsletter]);

    // console.log(blog);
    return (
        <div>
            <p className='text-xl text-blue-500 font-bold mb-5'>Subscribe User:</p>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6 font-bold text-base text-blue-500">
                                User Email
                            </th>
                            <th scope="col" class="py-3 px-6">
                                
                            </th>
                            <th scope="col" class="py-3 px-6">
                                
                            </th>
                            <th scope="col" class="py-3 px-6">
                               
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {newsletter?.map((mail) => (
                            <tr
                                key={mail._id}
                                className="hover:shadow-md hover:bg-cyan-100 duration-300 cursor-pointer border-b border-cyan-100"
                            >
                                <th className="py-3 px-6 whitespace-nowrap">
                                    {mail.email}
                                </th>
                                
                                <td class="py-4 px-6">
                                    
                                </td>
                                <td class="py-4 px-6">
                                    
                                </td>
                                <td class="py-4 px-6">
                                    
                                </td>

                            </tr>

                        ))}


                        {/* </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Newsletter;