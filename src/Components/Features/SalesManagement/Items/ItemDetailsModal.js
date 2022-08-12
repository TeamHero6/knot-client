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
            <input type="checkbox" id="item-details-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="item-details-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{productName}
                        <span className='font-medium text-sm'> (Id: {productId})</span>
                    </h3>
                    <h3 class="font-medium">{productTitle}</h3>
                    <hr className='mb-2' />
                    <h3 class="font-medium">{flavour} Flavour</h3>
                    <h3 class="font-medium">{color} Color</h3>
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