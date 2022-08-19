import React from 'react';

const VendorDetailsModal = ({ singleVendorDetails }) => {
    const {
        companyName,
        address,
        contactPerson,
        mobile,
        email,
        bankName,
        accountHolder,
        accountNo,
        branchName
    } = singleVendorDetails
    return (
        <div>
            <input type="checkbox" id="item-details-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="item-details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-purple-500 font-bold'>Vendor Details</h1>
                    <h3 className="font-bold text-lg">{companyName}</h3>
                    <h3 className="font-medium">{address}</h3>
                    <h3 className="font-medium">{contactPerson}</h3>
                    <h3 className="font-medium">{mobile}</h3>
                    <h3 className="font-medium">{email}</h3>
                    <hr className='mb-2' />
                    <h1 className='text-purple-500 font-bold'>Company Account Info</h1>
                    <h3 className="font-medium">{bankName}</h3>
                    <h3 className="font-medium">{accountHolder}</h3>
                    <h3 className="font-medium">{accountNo}</h3>
                    <h3 className="font-medium">{branchName}</h3>
                </div>
            </div>
        </div>
    );
};

export default VendorDetailsModal;