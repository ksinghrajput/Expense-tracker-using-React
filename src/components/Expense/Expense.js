import React, { useState } from 'react';
import './Expense.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpensesFilter from './Filter/ExpensesFilter'

const Expense = (props) => {

    const [title, setTitle] = useState(props.title)
    const [filter, setFilter] = useState('2020')

    const clickHandler = () => {
        setTitle("Updated !!!")
    }

    const filterChangeHandler = (filteredData) => {
        console.log(filteredData);
        setFilter(filteredData)
    }

    return (
        <div>
            <ExpensesFilter selected={filter} onFilterselectedValue={filterChangeHandler}/>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={clickHandler}>click me</button>
            </Card>
        </div>
    );
}

export default Expense;
