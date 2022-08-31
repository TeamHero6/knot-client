import React from 'react';
import MorePagesNavBar from '../../../Shared/MorePagesNavBar/MorePagesNavBar';
import Promotion from '../Promotion/Promotion';

const MarketingAutomationMore = () => {
    return (
        <div>
            <MorePagesNavBar></MorePagesNavBar>
            <Promotion></Promotion>
            <section className="text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">
                                Email Marketing
                            </h3>
                            <p className="mt-1 text-gray-500">
                                In this feature you can search for compose email . also when you click the compose button you can send email. And all emails will show in the below table.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Customer listing
                            </h3>
                            <p className="mt-1 text-gray-500">
                                In this section you can see all customer collection email lists.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MarketingAutomationMore;