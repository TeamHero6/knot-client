import React from 'react';
import MorePagesNavBar from '../../../Shared/MorePagesNavBar/MorePagesNavBar';

const AdminManagementMore = () => {
    return (
        <div>
            <MorePagesNavBar></MorePagesNavBar>
            
            <section class="dark:bg-gray-800 dark:text-gray-100">
                <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p class="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 class="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Admin Management</h2>
                    <p className='text-4xl italic mx-auto text-green-600'>Coming Soon...</p>
                </div>
            </section>
        </div>
    );
};

export default AdminManagementMore;