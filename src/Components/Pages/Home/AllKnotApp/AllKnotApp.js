import React from 'react';
import './AllKnotApp.css';
import financeIcon from '../../../../Assets/icons/finance.png';
import salesManagementIcon from '../../../../Assets/icons/sales.png';
import marketingAutomationIcon from '../../../../Assets/icons/marketing.png';
import liveChatIcon from '../../../../Assets/icons/chat.png';
import taskManagementIcon from '../../../../Assets/icons/task-management.png';

// Finance Tracking icon -------------------------------     
import financeDashboard from '../../../../Assets/icons/Finance-icon/Dashboard.png';
import ProductDetails from '../../../../Assets/icons/Finance-icon/Product-Details.png';
import financeSales from '../../../../Assets/icons/Finance-icon/sales.png';
import Purchase from '../../../../Assets/icons/Finance-icon/Purchase.png';
import Accountant from '../../../../Assets/icons/Finance-icon/accounted.png';
import financeReport from '../../../../Assets/icons/Finance-icon/report.png';

// Sales Management icon --------------------------------
import bill from '../../../../Assets/icons/Sales-management-icon/bill.png'
import ProductItem from '../../../../Assets/icons/Sales-management-icon/product_item.png'
import salesPerson from '../../../../Assets/icons/Sales-management-icon/Sales-person.png'
import Customer from '../../../../Assets/icons/Sales-management-icon/customer.png'
import SalesOrders from '../../../../Assets/icons/Sales-management-icon/order.png'
import PaymentReceive from '../../../../Assets/icons/Sales-management-icon/payment_receive.png'
import Return from '../../../../Assets/icons/Sales-management-icon/return.png'
import vendor from '../../../../Assets/icons/Sales-management-icon/vendor.png'
import salesProductDetail from '../../../../Assets/icons/Sales-management-icon/Product_Details.png';

// Marketing Automation icon      -----------------------
import EmailMarketing from '../../../../Assets/icons/Marketing-icon/Email-Marketing.png';
import SMS_marketing from '../../../../Assets/icons/Marketing-icon/SMS-Marketing.png';
import CustomerListing from '../../../../Assets/icons/Marketing-icon/Customer-listing.png';
import CustomerSorting from '../../../../Assets/icons/Marketing-icon/Customer-sorting.png';
import marketingBudget from '../../../../Assets/icons/Marketing-icon/Marketing-Budget.png';

// Live Chat icon ----------------------------------
import profile from '../../../../Assets/icons/Live-chat-icon/profile_user.png';
import chat from '../../../../Assets/icons/Live-chat-icon/chat.png';
import group from '../../../../Assets/icons/Live-chat-icon/grouph.png';
import contact from '../../../../Assets/icons/Live-chat-icon/contacts.png';
import setting from '../../../../Assets/icons/Live-chat-icon/settings.png';

// Task Management icon ----------------------------
import taskDashboard from '../../../../Assets/icons/Task-management-icon/Dashboard.png';
import employeeSelfService from '../../../../Assets/icons/Task-management-icon/EmployeeSelfService.png';
import attendance from '../../../../Assets/icons/Task-management-icon/attendance.png';
import recruitment from '../../../../Assets/icons/Task-management-icon/recruitment.png';
import performance from '../../../../Assets/icons/Task-management-icon/Performance.png';
import operation from '../../../../Assets/icons/Task-management-icon/Operation.png';
import payrolls from '../../../../Assets/icons/Task-management-icon/Payrolls.png';

import Navbar from "../../../Shared/Navbar/Navbar";

const AllKnotApp = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="md:mx-16 lg:mx-36 mb-12">
                <h2 className="text-center text-gray-500 font-semibold text-2xl my-12 lg:my-20 tracking-widest md:tracking-wider">
                    ALL KNOT APPS
                    <div className="border-2 border-b-2 w-36 mx-auto mt-1"></div>
                </h2>
                <div className="flex justify-center flex-wrap gap-28">
                    {/*------- Finance Tracking Tool --------*/}
                    <section>
                        <h1 className="text-lg text-gray-400 text-center mb-6 tracking-wider">
                            Finance Tracking Tool
                        </h1>
                        <div title='Finance' className="flex justify-center mb-4">
                            <div>
                                <img src={financeIcon} alt="" />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 mt-4 exceptionalImageSize'>
                            <div title='Dashboard' className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                                <div>
                                    <img className='mx-auto' src={financeDashboard} alt="" />
                                    <p className='lg:hidden'>Dashboard</p>
                                </div>
                            </div>
                            <div title='Product' className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={ProductDetails} alt="" />
                                    <p className='lg:hidden'>Product</p>
                                </div>
                            </div>
                            <div title='Sales' className="flex justify-center border-b-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={financeSales} alt="" />
                                    <p className='lg:hidden'>Sales</p>
                                </div>
                            </div>
                            <div title='Purchase' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={Purchase} alt="" />
                                    <p className='lg:hidden'>Purchase</p>
                                </div>
                            </div>
                            <div title='Accountant' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={Accountant} alt="" />
                                    <p className='lg:hidden'>Accountant</p>
                                </div>
                            </div>
                            <div title='Report' className="flex justify-center p-4">
                                <div>
                                    <img className='mx-auto' src={financeReport} alt="" />
                                    <p className='lg:hidden'>Report</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*------- Sales Management --------*/}
                    <section>
                        <h1 className="text-lg text-gray-400 text-center mb-6 tracking-wider">
                            Sales Management
                        </h1>
                        <div title='Sales' className="flex justify-center">
                            <div>
                                <img src={salesManagementIcon} alt="" />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 mt-4 exceptionalImageSize'>
                            <div title='Bill' className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                                <div>
                                    <img className='mx-auto' src={bill} alt="" />
                                    <p className='lg:hidden'>Bill</p>
                                </div>
                            </div>
                            <div title='Products' className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={ProductItem} alt="" />
                                    <p className='lg:hidden'>Products</p>
                                </div>
                            </div>
                            <div title='Person' className="flex justify-center border-b-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={salesPerson} alt="" />
                                    <p className='lg:hidden'>Sales Person</p>
                                </div>
                            </div>
                            <div title='Customer' className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                                <div>
                                    <img className='mx-auto' src={Customer} alt="" />
                                    <p className='lg:hidden'>Customer</p>
                                </div>
                            </div>
                            <div title='Order' className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                                <div>
                                    <img className='mx-auto' src={SalesOrders} alt="" />
                                    <p className='lg:hidden'>Order</p>
                                </div>
                            </div>
                            <div title='Payment' className='flex justify-center border-b-[1px] border-gray-200 p-4'>
                                <div>
                                    <img className='mx-auto' src={PaymentReceive} alt="" />
                                    <p className='lg:hidden'>Payment</p>
                                </div>
                            </div>
                            <div title='Return' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={Return} alt="" />
                                    <p className='lg:hidden'>Return</p>
                                </div>
                            </div>
                            <div title='Vendor' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={vendor} alt="" />
                                    <p className='lg:hidden'>Vendor</p>
                                </div>
                            </div>
                            <div title='Sales' className='flex justify-center border-gray-200 p-4'>
                                <div>
                                    <img className='mx-auto' src={salesProductDetail} alt="" />
                                    <p className='lg:hidden'>Sales</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*------- Marketing Automation --------*/}
                    <section>
                        <h1 className="text-lg text-gray-400 text-center mb-6 tracking-wider">
                            Marketing Automation
                        </h1>
                        <div title='Marketing' className="flex justify-center">
                            <div>
                                <img src={marketingAutomationIcon} alt="" />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 mt-4 exceptionalImageSize'>
                            <div title='Email Marketing' className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                                <div>
                                    <img className='mx-auto' src={EmailMarketing} alt="" />
                                    <p className='lg:hidden'>Email</p>
                                </div>
                            </div>
                            <div title='SMS Marketing' className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={SMS_marketing} alt="" />
                                    <p className='lg:hidden'>SMS</p>
                                </div>
                            </div>
                            <div title='Customer Listing' className="flex justify-center border-b-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={CustomerListing} alt="" />
                                    <p className='lg:hidden'>Listing</p>
                                </div>
                            </div>
                            <div title='Customer Sorting' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={CustomerSorting} alt="" />
                                    <p className='lg:hidden'>Sorting</p>
                                </div>
                            </div>
                            <div title='Budget' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={marketingBudget} alt="" />
                                    <p className='lg:hidden'>Budget</p>
                                </div>
                            </div>

                        </div>
                    </section>
                    {/*------- Live Chatting --------*/}
                    <section>
                        <h1 className="text-lg text-gray-400 text-center mb-6 tracking-wider">
                            Live Chatting
                        </h1>
                        <div title='Live Chat' className="flex justify-center">
                            <div>
                                <img src={liveChatIcon} alt="" />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 mt-4 exceptionalImageSize'>
                            <div title='Profile' className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                                <div>
                                    <img className='mx-auto' src={profile} alt="" />
                                    <p className='lg:hidden'>Profile</p>
                                </div>
                            </div>
                            <div title='Chat' className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={chat} alt="" />
                                    <p className='lg:hidden'>Chat</p>
                                </div>
                            </div>
                            <div title='Group' className="flex justify-center border-b-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={group} alt="" />
                                    <p className='lg:hidden'>Group</p>
                                </div>
                            </div>
                            <div title='Contact' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={contact} alt="" />
                                    <p className='lg:hidden'>Contact</p>
                                </div>
                            </div>
                            <div title='Settings' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={setting} alt="" />
                                    <p className='lg:hidden'>Settings</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*------- Task Management --------*/}
                    <section>
                        <h1 className="text-lg text-gray-400 text-center mb-6 tracking-wider">
                            Task Management
                        </h1>
                        <div title='Task Management' className="flex justify-center">
                            <div>
                                <img className='mx-auto' src={taskManagementIcon} alt="" />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 mt-4 exceptionalImageSize'>
                            <div title='Dashboard' className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                                <div>
                                    <img className='mx-auto' src={taskDashboard} alt="" />
                                    <p className='lg:hidden'>Dashboard</p>
                                </div>
                            </div>
                            <div title='Employee Self Service' className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={employeeSelfService} alt="" />
                                    <p className='lg:hidden'>Employee</p>
                                </div>
                            </div>
                            <div title='Attendance' className="flex justify-center border-b-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={attendance} alt="" />
                                    <p className='lg:hidden'>Attendance</p>
                                </div>
                            </div>
                            <div title='Recruitment' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                                <div>
                                    <img className='mx-auto' src={recruitment} alt="" />
                                    <p className='lg:hidden'>Recruitment</p>
                                </div>
                            </div>
                            <div title='Performance' className='flex justify-center border-r-[1px] border-b-[1px] border-gray-200 p-4'>
                                <div>
                                    <img className='mx-auto' src={performance} alt="" />
                                    <p className='lg:hidden'>Performance</p>
                                </div>
                            </div>
                            <div title='Operation' className='flex justify-center border-b-[1px] p-4'>
                                <div>
                                    <img className='mx-auto' src={operation} alt="" />
                                    <p className='lg:hidden'>Operation</p>
                                </div>
                            </div>
                            <div title='Payrolls' className='flex justify-center items-center border-t-[1px] border-r-[1px] border-gray-200 p-4'>
                                <div>
                                    <img className='mx-auto' src={payrolls} alt="" />
                                    <p className='lg:hidden'>Payrolls</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AllKnotApp;
