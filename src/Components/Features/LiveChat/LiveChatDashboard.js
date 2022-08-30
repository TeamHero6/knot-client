import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import LiveChatNavbar from './LiveChatNavbar';

const LiveChatDashboard = () => {
    return (
        <div className="min-h-screen bg-custom-gray">
            <LiveChatNavbar></LiveChatNavbar>
            <section className="flex w-full">
                <div className="px-3 overflow-auto w-full">
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default LiveChatDashboard;