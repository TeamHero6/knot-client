import React from 'react';

const PricingCard = () => {
    return (
        <div>
            <div>
                <p className='text-4xl font-medium text-center mt-5'>One Stop Business Solution</p>
                <p className='text-lg mt-2 text-gray-400 text-center mb-5'>Adjustable for any business. <br /> Accessible from any of your favorite devices and any of your favorite places.</p>
            </div>
            <div className='flex justify-center gap-5'>
                <div>
                    <div class="shadow-lg rounded-2xl w-64 bg-gradient-to-r bg-white p-4">
                        <div class="flex text-gray-700  items-center justify-between">
                            <p class="text-4xl font-medium mb-4">
                                Free
                            </p>
                            <p class="text-3xl font-bold flex flex-col">
                                $00
                                <span class="font-thin text-right text-sm">
                                    month
                                </span>
                            </p>
                        </div>
                        <p class="text-gray-700 text-md mt-4">
                            Plan include :
                        </p>
                        <ul class="text-sm text-gray-700 w-full mt-6 mb-6">
                            <li class="mb-3 flex items-center ">
                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="gray" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Create Demo Account
                            </li>
                            <li class="mb-3 flex items-center ">
                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="gray" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                7 Days Free Trail
                            </li>
                            <li class="mb-3 flex items-center ">
                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="gray" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Finance & Sale Tools Free Test
                            </li>
                            <li class="mb-3 flex items-center ">
                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="gray" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                24/7 Support
                            </li>
                        </ul>
                        <button type="button" class="w-full px-3 py-3 text-sm shadow rounded-lg text-white bg-cyan-500 ">
                            Choose plan
                        </button>
                    </div>
                </div>
                <div>
                    <div class="shadow-lg rounded-2xl w-64 bg-cyan-500 dark:bg-gray-800 p-4">
                        <div class="flex text-white  items-center justify-between">
                            <p class="text-4xl font-medium mb-4">
                                Pro
                            </p>
                            <p class="text-3xl font-bold flex flex-col">
                                $99
                                <span class="font-thin text-right text-sm">
                                    month
                                </span>
                            </p>
                        </div>
                        <p class="text-white text-md mt-4">
                            Plan include :
                        </p>
                        <ul class="text-sm text-white text-left w-full mt-6 mb-6">
                            <li class="mb-3 flex items-center ">
                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Access All Tools
                            </li>
                            <li class="mb-3 flex items-center ">
                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                24/7 Support Service
                            </li>
                            <li class="mb-3 flex items-center ">
                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Service For  One Company
                            </li>
                            <li class="mb-3 flex items-center ">
                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Data Backup
                            </li>
                            <li class="mb-3 flex items-center ">
                                <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Free use for update Feature
                            </li>
                        </ul>
                        <button type="button" class="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 hover:text-gray-800 bg-white hover:bg-gray-100 ">
                            Choose plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;