import React from 'react';
import howToWork from '../../../../Assets/images/how-to-work.png';

const Promotion = () => {
    return (
        <div className='my-12'>
            <h1 className='text-center text-xl'>Watch the video to learn more about the app</h1>
            <hr className='w-1/2 mx-auto mt-1' />
            <div className='flex flex-wrap justify-center gap-4 mt-8'>
                <div>
                    <img className='w-[360px] lg:w-[420px]' src={howToWork} alt="" />
                </div>
                <div className='lg:w-1/4 md:w-1/3 ml-4 sm:ml-0'>
                    <div>
                        <h3 className='text-xl font-medium lg:mt-6'>Partner with KNOT</h3>
                        <p>
                            KNOT partner with top VARs, VR, tech related company and consultants worldwide.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-xl font-medium mt-4'>Developer</h3>
                        <p>
                            KNOT partner with top VARs, VR, tech related company and consultants worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;