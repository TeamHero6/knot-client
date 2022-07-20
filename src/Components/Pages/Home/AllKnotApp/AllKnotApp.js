import React from "react";
import liveChatSmallIcon from "../../../../Assets/icons/chat-small.png";
import liveChatIcon from "../../../../Assets/icons/chat.png";
import financeSmallIcon from "../../../../Assets/icons/finance-small.png";
import financeIcon from "../../../../Assets/icons/finance.png";
import marketingAutomationSmallIcon from "../../../../Assets/icons/marketing-small.png";
import marketingAutomationIcon from "../../../../Assets/icons/marketing.png";
import salesManagementSmallIcon from "../../../../Assets/icons/sales-small.png";
import salesManagementIcon from "../../../../Assets/icons/sales.png";
import taskManagementIcon from "../../../../Assets/icons/task-management.png";
import taskManagementSmallIcon from "../../../../Assets/icons/task-small.png";

const AllKnotApp = () => {
    return (
        <div className="md:mx-16 lg:mx-36 mb-12 mt-20 md:mt-36">
            <h2 className="text-center text-2xl font-medium my-12">
                ALL KNOT APP
            </h2>
            <div className="flex justify-center flex-wrap gap-20">
                {/*------- Finance Tracking Tool --------*/}
                <section>
                    <h1 className="font-bold text-center mb-4">
                        Finance Tracking Tool
                    </h1>
                    <div className="flex justify-center">
                        <div>
                            <img src={financeIcon} alt="" />
                            <p>Finance</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 mt-4">
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={financeSmallIcon} alt="" />
                                <p>Finance</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={financeSmallIcon} alt="" />
                                <p>Finance</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={financeSmallIcon} alt="" />
                                <p>Finance</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={financeSmallIcon} alt="" />
                                <p>Finance</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={financeSmallIcon} alt="" />
                                <p>Finance</p>
                            </div>
                        </div>
                        <div className="flex justify-center p-4">
                            <div>
                                <img src={financeSmallIcon} alt="" />
                                <p>Finance</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------- Sales Management --------*/}
                <section>
                    <h1 className="font-bold text-center mb-4">
                        Sales Management
                    </h1>
                    <div className="flex justify-center">
                        <div>
                            <img src={salesManagementIcon} alt="" />
                            <p>Sales</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 mt-4">
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={salesManagementSmallIcon} alt="" />
                                <p>Sales</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={salesManagementSmallIcon} alt="" />
                                <p>Sales</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={salesManagementSmallIcon} alt="" />
                                <p>Sales</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={salesManagementSmallIcon} alt="" />
                                <p>Sales</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={salesManagementSmallIcon} alt="" />
                                <p>Sales</p>
                            </div>
                        </div>
                        <div className="flex justify-center p-4">
                            <div>
                                <img src={salesManagementSmallIcon} alt="" />
                                <p>Sales</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------- Marketing Automation --------*/}
                <section>
                    <h1 className="font-bold text-center mb-4">
                        Marketing Automation
                    </h1>
                    <div className="flex justify-center">
                        <div>
                            <img src={marketingAutomationIcon} alt="" />
                            <p>Marketing</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 mt-4">
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img
                                    src={marketingAutomationSmallIcon}
                                    alt=""
                                />
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img
                                    src={marketingAutomationSmallIcon}
                                    alt=""
                                />
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img
                                    src={marketingAutomationSmallIcon}
                                    alt=""
                                />
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img
                                    src={marketingAutomationSmallIcon}
                                    alt=""
                                />
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img
                                    src={marketingAutomationSmallIcon}
                                    alt=""
                                />
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className="flex justify-center p-4">
                            <div>
                                <img
                                    src={marketingAutomationSmallIcon}
                                    alt=""
                                />
                                <p>Marketing</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------- Live Chatting --------*/}
                <section>
                    <h1 className="font-bold text-center mb-4">
                        Live Chatting
                    </h1>
                    <div className="flex justify-center">
                        <div>
                            <img src={liveChatIcon} alt="" />
                            <p>Live Chat</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 mt-4">
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={liveChatSmallIcon} alt="" />
                                <p>Live</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={liveChatSmallIcon} alt="" />
                                <p>Live</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={liveChatSmallIcon} alt="" />
                                <p>Live</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={liveChatSmallIcon} alt="" />
                                <p>Live</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={liveChatSmallIcon} alt="" />
                                <p>Live</p>
                            </div>
                        </div>
                        <div className="flex justify-center p-4">
                            <div>
                                <img src={liveChatSmallIcon} alt="" />
                                <p>Live</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*------- Task Management --------*/}
                <section>
                    <h1 className="font-bold text-center mb-4">
                        Task Management
                    </h1>
                    <div className="flex justify-center">
                        <div>
                            <img src={taskManagementIcon} alt="" />
                            <p>Task</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 mt-4">
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={taskManagementSmallIcon} alt="" />
                                <p>Task</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={taskManagementSmallIcon} alt="" />
                                <p>Task</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-b-[1px] border-gray-200 p-4">
                            <div>
                                <img src={taskManagementSmallIcon} alt="" />
                                <p>Task</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={taskManagementSmallIcon} alt="" />
                                <p>Task</p>
                            </div>
                        </div>
                        <div className="flex justify-center border-r-[1px] border-gray-200 p-4">
                            <div>
                                <img src={taskManagementSmallIcon} alt="" />
                                <p>Task</p>
                            </div>
                        </div>
                        <div className="flex justify-center p-4">
                            <div>
                                <img src={taskManagementSmallIcon} alt="" />
                                <p>Task</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AllKnotApp;
