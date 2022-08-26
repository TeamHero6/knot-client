import React from 'react';
import accessible from '../../../../Assets/images/accessibleAnywhere.png';

const AccessibleAnywhere = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-semibold mt-8'>Accessible Anywhere</h1>
            <h1 className='my-4 text-center text-lg'>
                Load Knot on the go, at the office, or at home. Supported on all your favorite devices.
            </h1>
            <div className='ml-20'>
                <img className='mx-auto' src={accessible} alt="" />
            </div>
        </div>
    );
};

export default AccessibleAnywhere;