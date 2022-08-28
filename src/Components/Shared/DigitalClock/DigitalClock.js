import React, { useState } from 'react';

const DigitalClock = () => {
    const [updatedTime, setUpdatedTime] = useState('');

    const latestTime = () => {
        let currentTime = new Date().toLocaleTimeString();
        setUpdatedTime(currentTime);
    }

    setInterval(latestTime, 1000);
    return (
        <div>
            <p className='whitespace-nowrap'>{updatedTime}</p>
        </div>
    );
};

export default DigitalClock;