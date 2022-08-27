import React from 'react';
import bashundhara from '../../../../Assets/clientLogo/bashundhara-group-logo.png';
import beximco from '../../../../Assets/clientLogo/beximco-logo.png';
import jamuna from '../../../../Assets/clientLogo/jamuna-group.png';
import navana from '../../../../Assets/clientLogo/navana-group-logo.jpg';
import asiaGroup from '../../../../Assets/clientLogo/asia-group-logo.png';
import monarchMart from '../../../../Assets/clientLogo/monarch-mart-logo-2.png';
import squareGroup from '../../../../Assets/clientLogo/square-logo.jpg';

const Client = () => {
    return (
        <div className='md:min-h-[50vh] pt-12 md:mt-24'>
            <div className='text-center'>
                <h1 className='text-4xl md:text-5xl font-medium'>Our Valuable Client</h1>
                <p className='text-lg text-gray-400 md:text-black mt-2 md:mt-4'>
                    Rated by thousands of Clients all over the world
                </p>
            </div>
            <div className='flex gap-4 md:gap-12 justify-center flex-wrap mt-4 md:mt-12'>
                <img className='w-1/4 md:w-1/12' src={bashundhara} alt="" />
                <img className='w-1/4 md:w-1/12' src={beximco} alt="" />
                <img className='w-1/4 md:w-1/12' src={jamuna} alt="" />
                <img className='w-1/4 md:w-1/12' src={navana} alt="" />
                <img className='w-1/4 md:w-1/12' src={asiaGroup} alt="" />
                <img className='w-1/4 md:w-1/12' src={monarchMart} alt="" />
                <img className='w-1/4 md:w-1/12' src={squareGroup} alt="" />
            </div>
        </div>
    );
};

export default Client;