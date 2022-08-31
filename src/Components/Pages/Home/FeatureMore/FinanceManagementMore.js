import React from 'react';
import MorePagesNavBar from '../../../Shared/MorePagesNavBar/MorePagesNavBar';
import Promotion from '../Promotion/Promotion';

const FinanceManagementMore = () => {
    return (
        <div>
            <MorePagesNavBar></MorePagesNavBar>
            <Promotion></Promotion>
            <section className="text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Finance Management</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">
                            Dashboard 
                            </h3>
                            <p className="mt-1 text-gray-500">
                            In dashboard there is income overview, expense overview and sales report. And in the below section there is partner list and company share.

                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                            Add Expense
                            </h3>
                            <p className="mt-1 text-gray-500">Direct and Admin Expense input system and show database into Direct and Admin Expense table.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">
                            Payrolls  
                            </h3>
                            <p className="mt-1 text-gray-500">
                            There is a  button called ‘add payroll’. Clicking this button a form will appear. Submitting this form those informations will show in the table.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                            Partners  
                            </h3>
                            <p className="mt-1 text-gray-500">  In this section there is a new partner button. Submitting this button will show in the below table. And there also have an invest chart,  invest amount and company share charts. 

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FinanceManagementMore;