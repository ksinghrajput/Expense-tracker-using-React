import React from 'react';
import Expense from './Expense';
import './Expenses.css'
import Card from '../UI/Card';

const Expenses = (props) => {
    const { expenses } = props;
    return (
        <Card className='expenses'>
            {expenses.map((item, index) => {
                return (
                    <Expense key={index} date={item.date} title={item.title} amount={item.amount}></Expense>
                )
            })}
        </Card>
    );
}

export default Expenses;
