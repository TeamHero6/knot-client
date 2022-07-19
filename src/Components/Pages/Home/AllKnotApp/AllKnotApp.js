import React from 'react';

const AllKnotApp = () => {
    return (
        <div>
            <h2 className='text-center text-2xl font-medium my-12'>ALL KNOT APP</h2>
            <div>
                {/*------- Finance Tracking Tool --------*/}
                <section>
                    <h1 className='font-bold'>Finance Tracking Tool</h1>
                </section>
                {/*------- Sales Management --------*/}
                <section>
                    <h1 className='font-bold'>Sales Management</h1>
                </section>
                {/*------- Marketing Automation --------*/}
                <section>
                    <h1 className='font-bold'>Marketing Automation</h1>
                </section>
                {/*------- Live Chatting --------*/}
                <section>
                    <h1 className='font-bold'>Live Chatting</h1>
                </section>
                {/*------- Task Management --------*/}
                <section>
                    <h1 className='font-bold'>Task Management</h1>
                </section>
            </div>
        </div>
    );
};

export default AllKnotApp;