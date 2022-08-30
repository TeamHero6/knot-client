import React from 'react';

const AdminPanelDashboard = () => {
    return (
        <div>
            <div className='text-blue-500 mb-5 ml-5'><samp className='text-lg font-bold '>Knot</samp> - Cloud Business Management Valuable Customer</div>
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Company Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" class="py-3 px-6">
                                CEO Email
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Company Logo
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="py-4 px-6">
                                Sliver
                            </td>
                            <td class="py-4 px-6">
                                Laptop
                            </td>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AdminPanelDashboard;