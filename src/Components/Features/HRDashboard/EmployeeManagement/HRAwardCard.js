import React from 'react';
import dates from '../../../../Assets/icons/schedule.png'
import trophy from '../../../../Assets/icons/trophy.png'
import profile from '../../../../Assets/icons/profile_user.png'
import feed from '../../../../Assets/icons/marketing.png'

const HRAwardCard = (props) => {
    const { AwardDate, awardTitle, successMessage, name } = props.award
    return (
        <div class="card w-80 bg-base-100 shadow-xl">
            <img className='w-24 mx-auto my-3' src={trophy} alt="" />
            <h1 className='text-2xl text-orange-500 text-center font-medium'>Congratulations</h1>
            <p className='text-center opacity-50 mb-4'>{awardTitle}</p>

            <div className=' mx-5 my-3'>
                <p className='flex items-center  '> <img width={20} src={dates} className="mr-2" alt="" /> Date : {AwardDate}</p>
                <p className='flex items-center '> <img width={20} src={profile} className="mr-2" alt="" /> Name : {name}</p>
                <p className='flex items-center '> <img width={20} src={feed} className="mr-2" alt="" /> Feedback : {successMessage}</p>
            </div>
        </div>
    );
};

export default HRAwardCard;