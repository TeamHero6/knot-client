import React from 'react';
import Award from './Award';
import Meeting from './Meeting';
import Warming from './Warming';

const UserManagement = () => {
    return (
        <div className='w-full mx-auto'>
            <Meeting></Meeting>
            <Warming></Warming>
            <Award></Award>
        </div>
    );
};

export default UserManagement;