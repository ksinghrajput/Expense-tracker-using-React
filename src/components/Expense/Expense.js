import React, { useState } from 'react';
import './Expense.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const Expense = (props) => {

    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle("Updated !!!")
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>click me</button>
        </Card>
    );
}

export default Expense;
