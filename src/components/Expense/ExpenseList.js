import React from 'react';
import './ExpenseList.css';
import Expense from './Expense';


const ExpenseList = (props) => {

    const filteredExpanseItems = props.expanseList;
    if (filteredExpanseItems && filteredExpanseItems.length) {
        return filteredExpanseItems.map((item, index) => {
            return (
                <Expense key={index} date={item.date} title={item.title} amount={item.amount}></Expense>
            )
        })
    } else {
        return <p className='expenses-list__fallback'>Expence not found</p>
    }
}

export default ExpenseList;
