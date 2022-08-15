import React from 'react';

const VendorDetailsModal = ({singleVendorDetails}) => {
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
            <input type="checkbox" id="item-details-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="item-details-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-purple-500 font-bold'>Vendor Details</h1>
                    <h3 class="font-bold text-lg">{companyName}</h3>
                    <h3 class="font-medium">{address}</h3>
                    <h3 class="font-medium">{contactPerson}</h3>
                    <h3 class="font-medium">{mobile}</h3>
                    <h3 class="font-medium">{email}</h3>
                    <hr className='mb-2' />
                    <h1 className='text-purple-500 font-bold'>Company Account Info</h1>
                    <h3 class="font-medium">{bankName}</h3>
                    <h3 class="font-medium">{accountHolder}</h3>
                    <h3 class="font-medium">{accountNo}</h3>
                    <h3 class="font-medium">{branchName}</h3>
                </div>
            </div>
        </div>
    );
};

export default VendorDetailsModal;