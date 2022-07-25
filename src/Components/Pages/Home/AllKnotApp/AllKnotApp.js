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
                                <img src={financeDashboard} alt="" />
                            </div>
                        </div>
                        <div title='Product' className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={ProductDetails} alt="" />
                            </div>
                        </div>
                        <div title='Sales' className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={financeSales} alt="" />
                            </div>
                        </div>
                        <div title='Purchase' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={Purchase} alt="" />
                            </div>
                        </div>
                        <div title='Accountant' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={Accountant} alt="" />
                            </div>
                        </div>
                        <div title='Report' className="flex justify-center p-4">
                            <div>
                                <img src={financeReport} alt="" />
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
                                <img src={bill} alt="" />
                            </div>
                        </div>
                        <div title='Products' className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={ProductItem} alt="" />
                            </div>
                        </div>
                        <div title='Person' className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={salesPerson} alt="" />
                            </div>
                        </div>
                        <div title='Customer' className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={Customer} alt="" />
                            </div>
                        </div>
                        <div title='Order' className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={SalesOrders} alt="" />
                            </div>
                        </div>
                        <div title='Payment' className='flex justify-center border-b-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={PaymentReceive} alt="" />
                            </div>
                        </div>
                        <div title='Return' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={Return} alt="" />
                            </div>
                        </div>
                        <div title='Vendor' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={vendor} alt="" />
                            </div>
                        </div>
                        <div title='Sales' className='flex justify-center border-gray-200 p-4'>
                            <div>
                                <img src={salesProductDetail} alt="" />
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
                                <img src={EmailMarketing} alt="" />
                            </div>
                        </div>
                        <div title='SMS Marketing' className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={SMS_marketing} alt="" />
                            </div>
                        </div>
                        <div title='Customer Listing' className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={CustomerListing} alt="" />
                            </div>
                        </div>
                        <div title='Customer Sorting' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={CustomerSorting} alt="" />
                            </div>
                        </div>
                        <div title='Budget' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={marketingBudget} alt="" />
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
                                <img src={profile} alt="" />
                            </div>
                        </div>
                        <div title='Chat' className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={chat} alt="" />
                            </div>
                        </div>
                        <div title='Group' className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={group} alt="" />
                            </div>
                        </div>
                        <div title='Contact' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={contact} alt="" />
                            </div>
                        </div>
                        <div title='Settings' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={setting} alt="" />
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
                            <img src={taskManagementIcon} alt="" />
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-4 exceptionalImageSize'>
                        <div title='Dashboard' className='flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={taskDashboard} alt="" />
                            </div>
                        </div>
                        <div title='Employee Self Service' className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={employeeSelfService} alt="" />
                            </div>
                        </div>
                        <div title='Attendance' className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={attendance} alt="" />
                            </div>
                        </div>
                        <div title='Recruitment' className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={recruitment} alt="" />
                            </div>
                        </div>
                        <div title='Performance' className='flex justify-center border-r-[1px] border-b-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={performance} alt="" />
                            </div>
                        </div>
                        <div title='Operation' className='flex justify-center border-b-[1px] p-4'>
                            <div>
                                <img src={operation} alt="" />
                            </div>
                        </div>
                        <div title='Payrolls' className='flex justify-center border-t-[1px] border-r-[1px] border-gray-200 p-4'>
                            <div>
                                <img src={payrolls} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AllKnotApp;
