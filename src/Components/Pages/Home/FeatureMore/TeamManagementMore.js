import React from 'react';
import MorePagesNavBar from '../../../Shared/MorePagesNavBar/MorePagesNavBar';
import Promotion from '../Promotion/Promotion';

const TeamManagementMore = () => {
    return (
        <div>
            <MorePagesNavBar></MorePagesNavBar>
            <Promotion></Promotion>
            <section className="text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Explore Team Management</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">
                                Leave Request
                            </h3>
                            <p className="mt-1 text-gray-500">
                                In this feature there is a button called ‘new’. Clicking this button with valid information those data will show in the below request status table.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                User Management
                            </h3>
                            <p className="mt-1 text-gray-500">There you can see meeting, warning, training and award information. In the meeting section you can join in meetings. And clicking the details button you can see the full information in a modal.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamManagementMore;