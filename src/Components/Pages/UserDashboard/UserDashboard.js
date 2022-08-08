import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserNavbar from '../../Shared/UserNavbar/UserNavbar';
import { BiPlus } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { FaSave } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AiOutlineEye } from "react-icons/ai";

const UserDashboard = () => {
    const { register, handleSubmit, reset } = useForm();
    const [leave, setleave] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setleave(data))
    }, []);
    const onSubmit = data => {

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    reset();
                    toast.success("Add succesfully")
                }
            })
    };

    return (
        <div>
            <UserNavbar></UserNavbar>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-52 text-base-content gray">
                        <li><Link className='' to="/userdashboard">
                            Leave Request</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default UserDashboard;