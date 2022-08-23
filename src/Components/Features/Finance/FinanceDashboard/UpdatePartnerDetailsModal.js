import React from 'react';

const UpdatePartnerDetailsModal = ({ singlePartnerDetail }) => {
    const { partnerName,
        contactNumber,
        address,
        email,
        UpdateInvest,
        _id
    } = singlePartnerDetail;
    return (
        <div>
            <div className='flex justify-between mt-5'>
                <div>
                    <h3 className='font-bold'>{partnerName} </h3>
                    <span className='text-gray-400'>Invest Date: {UpdateInvest?.date}</span>
                </div>
            </div>
            <hr className='mb-2' />
            <h3>Contact Number: {contactNumber}</h3>
            <h3>Address: {address}</h3>
            <p>Email: {email}$</p>
            <p>Invest Amount: {UpdateInvest?.Amount}</p>
            <p>Share: {UpdateInvest?.share}<small>(%)</small></p>
        </div>
    );
};

export default UpdatePartnerDetailsModal;