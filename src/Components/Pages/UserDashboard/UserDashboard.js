import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserNavbar from '../../Shared/UserNavbar/UserNavbar';
import { BiPlus } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { FaSave } from 'react-icons/fa';

const UserDashboard = () => {
    const { register, handleSubmit } = useForm();
    const [leave,setleave]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setleave(data))
    },[]);
    const onSubmit = data => console.log(data);

    return (
        <div>
            <UserNavbar></UserNavbar>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <label for="my-drawer" class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none">
                        <span><BiPlus></BiPlus></span>
                        <span className='capitalize'> New</span>

                    </label>
                    <h1 className='text-[#0182be] ml-3 my-3 text-xl'>Employee Details :</h1>
                    <div className='ml-3 '>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-2'>
                                {/* ff */}
                                <div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Employees Name:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Name")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Employees ID:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("id")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Designation:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Designation")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Reason For Leave:</span>
                                        </label>
                                        <textarea
                                            type="text"
                                            className=" w-64 h-20 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("leave")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Type Of Leave:</span>
                                        </label>

                                        <div className='mt-5'>

                                            <input {...register("leave_type")} type="checkbox" value="Casual leave" />
                                            <span className='px-3  text-xl'>Casual leave</span>
                                            <br />
                                            <input {...register("leave_type")} type="checkbox" value="Sick leave" />
                                            <span className='px-3  text-xl'>Sick leave</span>
                                            <br />
                                            <input {...register("leave_type")} type="checkbox" value="Annual leave" />
                                            <span className='px-3  text-xl'>Annual leave</span>
                                        </div>



                                    </div>

                                </div>

                                {/* ff */}
                                <div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Depertment Name:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("dep")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Depertment Id:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("dep-id")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Leave Request Date:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("leave-date")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">End Date:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("e-date")}
                                        />


                                    </div>
                                </div>
                            </div>
                            


                            <div className='flex items-center bg-[#EEEEEE]  w-24 p-2 rounded-lg mx-auto border-solid border border-[#0182be] mt-5'>
                                <FaSave></FaSave>
                               <input className='pl-2 font-medium' type="submit" /> 
                            </div>

                        </form>

                    </div>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-52 text-base-content gray">
                        <li><Link className='' to="/hrDashboard">
                            Leave Request</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default UserDashboard;