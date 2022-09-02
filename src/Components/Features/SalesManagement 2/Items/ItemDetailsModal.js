import React from 'react';

const ItemDetailsModal = ({ singleItemDetail }) => {
    const { productName,
        productId,
        productTitle,
        flavour,
        color,
        purchaseAmount,
        revenue,
        tax,
        salesAmountValue,
        vendorName } = singleItemDetail;
    return (
        <div>
            <input type="checkbox" id="item-details-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="item-details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{productName}
                        <span className='font-medium text-sm'> (Id: {productId})</span>
                    </h3>
                    <h3 className="font-medium">{productTitle}</h3>
                    <hr className='mb-2' />
                    <h3 className="font-medium">{flavour} Flavour</h3>
                    <h3 className="font-medium">{color} Color</h3>
                    <p>Purchase Amount - {purchaseAmount}$</p>
                    <p>Revenue - {revenue}% | Tax - {tax}$</p>
                    <p>Sales Amount - {salesAmountValue}$</p>
                    <p className='font-medium'>Vendor - {vendorName}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailsModal;