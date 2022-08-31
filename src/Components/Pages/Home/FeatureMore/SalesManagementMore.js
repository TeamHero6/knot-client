import React from 'react';
import MorePagesNavBar from '../../../Shared/MorePagesNavBar/MorePagesNavBar';
import Promotion from '../Promotion/Promotion';

const SalesManagementMore = () => {
    return (
        <div>
            <MorePagesNavBar></MorePagesNavBar>
            <Promotion></Promotion>
            <section className=" text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Sales Management</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">
                                Dashboard
                            </h3>
                            <p className="mt-1 text-gray-500">
                                In this feature there have total order , happy customer and total vendor number. After this there is an all product details table. And vendor vs due amount chart.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Items
                            </h3>
                            <p className="mt-1 text-gray-500">
                                There is a  button called "add new item". Clicking this button a form will appear. Submitting this form those informations will show in the table.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Customer
                            </h3>
                            <p className="mt-1 text-gray-500">
                                There is a  button called "add new customer". Clicking this button a form will appear. Submitting this form those informations will show in the table.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Sales Order
                            </h3>
                            <p className="mt-1 text-gray-500">
                                There is a  button called "add new order". Clicking this button a form will appear. Submitting this form those informations will show in the table.If you want you can delete those information.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Return
                            </h3>
                            <p className="mt-1 text-gray-500">
                                There is a table with returned order information.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Vendor
                            </h3>
                            <p className="mt-1 text-gray-500">
                                There is a  button called "add new vendor". Clicking this button a form will appear. Submitting this form those informations will show in the table.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Purchase Order
                            </h3>
                            <p className="mt-1 text-gray-500">
                                There is a  button called "new purchase order". Clicking this button a form will appear. Submitting this form those informations will show in the table.After that there also have vendor vs total price and product vs unit price charts.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Bill
                            </h3>
                            <p className="mt-1 text-gray-500">
                                In this feature there is order bill information and vendor vs total amount chart.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                Inventory
                            </h3>
                            <p className="mt-1 text-gray-500">
                                In this feature there is inventory information and product quantity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SalesManagementMore;