import React from 'react';
import './Expense.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const Expense = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default Expense;
