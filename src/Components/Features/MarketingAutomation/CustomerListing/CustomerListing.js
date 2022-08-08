import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Shared/Loader/Loader';

const CustomerListing = () => {

    const { data: newsletterMail, isLoading } = useQuery({
        queryKey: 'newsletterMail',
        queryFn: () => fetch('http://localhost:5000/newsletterMail').then(res => res.json())
    });

    if (isLoading) {
        return <Loader></Loader>;
    }
    return (
        <div>
            <h1 className="text-center text-3xl my-2">Customer Collection</h1>
            <div className='mx-5 mt-3'>
                <div className="overflow-x-auto">
                    <table className="mx-auto table table-zebra w-1/2">
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>E-MAIL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newsletterMail?.map((mail, index) => <tr key={mail._id}>
                                    <th>{index + 1}</th>
                                    <td>{mail.email}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CustomerListing;