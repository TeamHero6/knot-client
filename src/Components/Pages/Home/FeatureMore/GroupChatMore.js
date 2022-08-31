import React from 'react';
import MorePagesNavBar from '../../../Shared/MorePagesNavBar/MorePagesNavBar';
import Promotion from '../Promotion/Promotion';

const GroupChatMore = () => {
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
                                Login Page
                            </h3>
                            <p className="mt-1 text-gray-500">
                                For login user must need a secret code which was provide their company CEO or Manager.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Group Chat
                            </h3>
                            <p className="mt-1 text-gray-500">Group chat is Department wise real time chat application.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GroupChatMore;