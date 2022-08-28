import React from 'react';
import accessible from '../../../../Assets/images/accessibleAnywhere.png';

const AccessibleAnywhere = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-medium md:text-5xl md:font-semibold'>Accessible Anywhere</h1>
            <h1 className='mb-4 md:mt-4 text-center text-lg text-gray-400 md:text-black'>
                Load Knot on the go, at the office, or at home. Supported on all your favorite devices.
            </h1>
            <div className='md:ml-20'>
                <img className='mx-auto w-5/6' src={accessible} alt="" />
            </div>
        </div>
    );
};

export default AccessibleAnywhere;