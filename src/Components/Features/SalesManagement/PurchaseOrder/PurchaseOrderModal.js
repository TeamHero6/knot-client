import React from 'react';

const PurchaseOrderModal = ({ singlePurchaseOrderDetail }) => {
    const {
        orderDate,
        productName,
        productCode,
        orderQuantity,
        orderNo,
        unitPrice,
        vat,
        totalAmount,
        vendorName } = singlePurchaseOrderDetail;
    return (
        <div>
            <input type="checkbox" id="purchase-order-details-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="purchase-order-details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{productName}
                        {" "} Order
                        <span className='font-medium text-sm'> (Id: {productCode})</span>
                    </h3>
                    <hr className='mb-2' />
                    <h3 className="font-medium">Order Date: {orderDate}</h3>
                    <h3 className="font-medium">Order Number: {orderNo}</h3>
                    <p className='text-sm'>Order Quantity - {orderQuantity}$</p>
                    <p className='text-sm'>Unit Price - {unitPrice}$</p>
                    <p className='text-sm'>Vat - {vat}$</p>
                    <p className='text-sm'>Total Amount - {totalAmount}$</p>
                    <p className='font-medium'>Vendor - {vendorName}</p>
                </div>
            </div>
        </div>
    );
};

export default PurchaseOrderModal;