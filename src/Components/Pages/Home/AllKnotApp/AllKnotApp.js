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


const AllKnotApp = () => {
    return (
        <div className="md:mx-16 lg:mx-36 mb-12 mt-20 md:mt-48">
            <h2 className="text-center text-gray-500 font-semibold text-2xl my-12 lg:my-20 tracking-widest md:tracking-wider">
                ALL KNOT APPS
                <div className="border-2 border-b-2 w-36 mx-auto mt-1"></div>
            </h2>
            <div className="flex justify-center flex-wrap gap-20">
                {/*------- Finance Tracking Tool --------*/}
                <section>
                    <h1 className="text-lg text-gray-400 text-center mb-6 tracking-wider">
                        Finance Tracking Tool
                    </h1>
                    <div className="flex justify-center">
                        <div>
                            <img src={financeIcon} alt="" />
                            <p>Finance</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-4 exceptionalImageSize'>
                        <div className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={financeDashboard} alt="" />
                                <p>Dashboard</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={ProductDetails} alt="" />
                                <p>Product</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={financeSales} alt="" />
                                <p>Sales</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={Purchase} alt="" />
                                <p>Purchase</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={Accountant} alt="" />
                                <p>Accountant</p>
                            </div>
                        </div>
                        <div className="flex justify-center p-4">
                            <div>
                                <img src={financeReport} alt="" />
                                <p>Report</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------- Sales Management --------*/}
                <section>
                    <h1 className="text-lg text-gray-400 text-center mb-6 tracking-wider">
                        Sales Management
                    </h1>
                    <div className="flex justify-center">
                        <div>
                            <img src={salesManagementIcon} alt="" />
                            <p>Sales</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-4 exceptionalImageSize'>
                        <div className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={bill} alt="" />
                                <p>Bill</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={ProductItem} alt="" />
                                <p>Products</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={salesPerson} alt="" />
                                <p>Person</p>
                            </div>
                        </div>
                        <div className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={Customer} alt="" />
                                <p>Customer</p>
                            </div>
                        </div>
                        <div className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={SalesOrders} alt="" />
                                <p>Order</p>
                            </div>
                        </div>
                        <div className='flex justify-center border-b-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={PaymentReceive} alt="" />
                                <p>Payment</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={Return} alt="" />
                                <p>Return</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={vendor} alt="" />
                                <p>Vendor</p>
                            </div>
                        </div>
                        <div className='flex justify-center border-gray-200 p-4'>
                            <div>
                                <img src={salesProductDetail} alt="" />
                                <p>Sales</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------- Marketing Automation --------*/}
                <section>
                    <h1 className="text-lg text-gray-400 text-center mb-6 tracking-wider">
                        Marketing Automation
                    </h1>
                    <div className="flex justify-center">
                        <div>
                            <img src={marketingAutomationIcon} alt="" />
                            <p>Marketing</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-4 exceptionalImageSize'>
                        <div className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={EmailMarketing} alt="" />
                                <p>Email</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={SMS_marketing} alt="" />
                                <p>SMS</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={CustomerListing} alt="" />
                                <p>Listing</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={SMS_marketing} alt="" />
                                <p>SMS</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={marketingBudget} alt="" />
                                <p>Budget</p>
                            </div>
                        </div>
                        <div className="flex justify-center p-4">
                            <div>
                                <img src={CustomerSorting} alt="" />
                                <p>Sorting</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------- Live Chatting --------*/}
                <section>
                    <h1 className="text-lg text-gray-400 text-center mb-6 tracking-wider">
                        Live Chatting
                    </h1>
                    <div className="flex justify-center">
                        <div>
                            <img src={liveChatIcon} alt="" />
                            <p>Live Chat</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-4 exceptionalImageSize'>
                        <div className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={profile} alt="" />
                                <p>Profile</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={chat} alt="" />
                                <p>Chat</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={group} alt="" />
                                <p>Group</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={contact} alt="" />
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={setting} alt="" />
                                <p>Settings</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------- Task Management --------*/}
                <section>
                    <h1 className="text-lg text-gray-400 text-center mb-6 tracking-wider">
                        Task Management
                    </h1>
                    <div className="flex justify-center">
                        <div>
                            <img src={taskManagementIcon} alt="" />
                            <p>Task</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-4 exceptionalImageSize'>
                        <div className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={taskDashboard} alt="" />
                                <p>Dashboard</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={employeeSelfService} alt="" />
                                <p>Employee</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={attendance} alt="" />
                                <p>Attendance</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={recruitment} alt="" />
                                <p>Recruitment</p>
                            </div>
                        </div>
                        <div className='flex justify-center border-r-[1px] border-b-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={performance} alt="" />
                                <p>Performance</p>
                            </div>
                        </div>
                        <div className='flex justify-center border-b-[1px] p-4'>
                            <div>
                                <img src={operation} alt="" />
                                <p>Operation</p>
                            </div>
                        </div>
                        <div className='flex justify-center border-t-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={payrolls} alt="" />
                                <p>Payrolls</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AllKnotApp;
