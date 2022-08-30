import React from 'react';
import MorePagesNavBar from '../../../Shared/MorePagesNavBar/MorePagesNavBar';
import Promotion from '../Promotion/Promotion';

const HumanResourceMore = () => {
    return (
        <div>
            <MorePagesNavBar></MorePagesNavBar>
            <Promotion></Promotion>
            <section className="text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Human Resource Management</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">
                                Leave Request
                            </h3>
                            <p className="mt-1 text-gray-500">
                                When a user requests for leave an HR can accept or reject this request. And finally click the save button The information will be stored in the database.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Management
                            </h3>
                            <p className="mt-1 text-gray-500">When a team management gives a warning to an employee this warning will show here.
                                <br />
                                And when a team management gives an award to an employee this award information will show here.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">
                            Performance 
                            </h3>
                            <p className="mt-1 text-gray-500">
                            Here is a promotion and transfer form. After submitting those forms with valid information those data will show on the below sections employee promotion database table and employee transfer database.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                            Payrolls 
                            </h3>
                            <p className="mt-1 text-gray-500"> There is a button called ‘Add payroll’ . After clicking this button a form will appear. Submitting this form will show in the below table.  
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">
                            Employee Details 
                            </h3>
                            <p className="mt-1 text-gray-500">
                            There is a button called ‘Add Employee‘. After clicking this button a form will appear. Submitting this form will show in the below table. 
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                            Vacancy  
                            </h3>
                            <p className="mt-1 text-gray-500"> There is a button called ‘Add Vacancy‘ . After clicking this button a form will appear. Submitting this form will show in the below section.   
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">
                            Joining  
                            </h3>
                            <p className="mt-1 text-gray-500">
                            There is a button called ‘Add Joining’ . After clicking this button a form will appear. Submitting this form will show in the below section.  
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                            </h3>
                            <p className="mt-1 text-gray-500">   
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HumanResourceMore;