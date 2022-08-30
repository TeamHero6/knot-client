import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const IncomeExpenseOverview = () => {
    const [cashBookList, setCashBookList] = useState([]);
    const [bankBookList, setBankBookList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [payrolls, setPayrolls] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    const orderAmount = orderList.reduce((prev, current) => {
        return prev + parseInt(current.totalAmount)
    }, 0)
    // console.log(orderAmount)

    const orderQuantity = orderList.reduce((prev, current) => {
        return prev + parseInt(current.quantity)
    }, 0)
    const directExpense = cashBookList.reduce((prev, current) => {
        return prev + parseInt(current.amount)
    }, 0)
    const adminExpense = bankBookList.reduce((prev, current) => {
        return prev + parseInt(current.amount)
    }, 0)
    const payrollAmount = payrolls.reduce((prev, current) => {
        return prev + parseInt(current.Payroll)
    }, 0)
    useEffect(() => {
        fetch(
            `http://localhost:5000/addNewOrder/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setOrderList(data.reverse()));
    }, [orderList, companyName]);
    // console.log(orderList);

    useEffect(() => {
        fetch(`http://localhost:5000/cashBook/${companyName}`)
            .then((res) => res.json())
            .then((data) => setCashBookList(data.reverse()));
    }, [cashBookList, companyName]);
    // console.log(cashBookList, companyName);

    useEffect(() => {
        fetch(`http://localhost:5000/bankBook/${companyName}`)
            .then((res) => res.json())
            .then((data) => setBankBookList(data.reverse()));
    }, [bankBookList, companyName]);

    // console.log(bankBookList, companyName);

    useEffect(() => {
        fetch(
            `https://knot-business-solution-server.herokuapp.com/payrolls/${companyName}`)
            .then((res) => res.json())
            .then((data) => setPayrolls(data));
    }, [payrolls, companyName]);
    // console.log(payrolls, companyName);

    return (
        <div>
            <div>
                <h2 className='text-base font-semibold'>Income Overview</h2>
                <div >
                    <div className='flex items-center py-3 justify-around'>
                        <div>
                            <p>Total Sales Amount</p>
                            <p className='text-xl text-blue-500 font-bold'>$ <span>{orderAmount}</span> </p>
                        </div>
                        <div>
                            <p>Total Sales</p>
                            <p className='text-green-500'>{orderQuantity}<small>/pcs</small></p>
                        </div>
                    </div>
                </div>
                <h2 className="font-bold mb-3 text-red-500">Expense Overview</h2>

                <div >
                    <div className='flex items-center py-3 justify-around'>
                        <div>
                            <p><span>Direct Expense:</span> $<span>{directExpense}</span> </p>
                            <p><span>Admin Expense:</span> $<span>{adminExpense}</span> </p>
                            <p><span>Salary Expense:</span> $<span>{payrollAmount}</span> </p>
                        </div>
                        <div>
                            <p>Total Expense</p>
                            <p className='text-green-500'>{directExpense+adminExpense+payrollAmount}<small></small></p>
                        </div>
                    </div>
                </div>
                <br />


                <div className='flex justify-around'>
                    <div className='flex items-center py-3 justify-around'>
                        <div className='text-3xl text-blue-500'>
                        </div>
                        <div>
                            <p>Net Profit</p>
                            <p className='text-2xl text-green-800 font-bold'>$ <span>{orderAmount - directExpense - adminExpense - payrollAmount}</span> </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IncomeExpenseOverview;