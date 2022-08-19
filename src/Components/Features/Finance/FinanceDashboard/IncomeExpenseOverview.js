import React from 'react';

const IncomeExpenseOverview = () => {
    return (
        <div>
                    <div>
                        <h2 className='text-base font-semibold'>Income Overview</h2>

                        <div >
                            <div className='flex items-center py-3 justify-around'>
                                <div>
                                    <p>Total Sales Amount</p>
                                    <p className='text-xl text-blue-500 font-bold'>$ <span>1500</span> </p>
                                </div>
                                <div>
                                    <p>Total Sales</p>
                                    <p className='text-green-500'>1256<small>/pcs</small></p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <h2 className='text-base font-semibold'>Expense Overview</h2>

                        <div className='flex justify-around'>
                            <div className='flex items-center py-3 justify-around'>
                                <div className='text-3xl text-blue-500'>
                                </div>
                                <div>
                                    <p>Direct Expense</p>
                                    <p className='text-xl text-red-500 font-bold'>$ <span>500</span> </p>
                                </div>
                            </div>
                            <div className='flex items-center py-3 justify-around'>
                                <div className='text-3xl text-blue-500'>
                                </div>
                                <div>
                                    <p>Employee Salary</p>
                                    <p className='text-xl text-red-500 font-bold'>$ <span>500</span> </p>
                                </div>
                            </div>
                            <div className='flex items-center py-3 justify-around'>
                                <div className='text-3xl text-blue-500'>
                                </div>
                                <div>
                                    <p>Total Expense</p>
                                    <p className='text-xl text-red-500 font-bold'>$ <span>1000</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <div className='flex items-center py-3 justify-around'>
                                <div className='text-3xl text-blue-500'>
                                </div>
                                <div>
                                    <p>Net Profit</p>
                                    <p className='text-2xl text-green-800 font-bold'>$ <span>500</span> </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
    );
};

export default IncomeExpenseOverview;