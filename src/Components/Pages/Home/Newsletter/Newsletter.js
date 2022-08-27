import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import newsletter from "../../../../Assets/images/newsletter.png";
import { useSelector } from "react-redux";

const Newsletter = () => {
    const loggerInfo = useSelector(state => state.auth.loggerInfo);
    const { companyName: company } = loggerInfo;

    const emailSend = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const companyName = company ? company : 'KNOT';
        const newsletter = { email, companyName };

        fetch(
            "https://knot-business-solution-server.herokuapp.com/newsletter",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newsletter),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                toast("Thanks for being with us");
                event.target.reset();
            });
    };

    return (
        <div className='flex items-center mt-12 mx-20'>
            <section className='w-1/2'>
                <img className='mx-auto w-2/3' src={newsletter} alt="" />
            </section>
            <section className='w-1/2'>
                <div className='w-2/3 mx-auto'>
                    <h2 className='text-3xl font-bold'>Subscribe To</h2>
                    <h2 className='text-5xl font-bold'>Our Newsletter!</h2>
                    <p className='text-lg font-medium my-4'>
                        Subscribe to our newsletter and stay updated
                    </p>
                    <form onSubmit={emailSend}>
                        <input
                            className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                            type="email"
                            name="email"
                            id=""
                            placeholder="Your Email"
                        />
                        <br />
                        <input
                            className="mt-2 flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded border border-white  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-blue-300 hover: shadow-sm"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default Newsletter;