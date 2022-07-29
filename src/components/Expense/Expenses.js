import React, { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './Filter/ExpensesFilter';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {
    const { expenses } = props;
    const [filter, setFilter] = useState('2020')

    const filterChangeHandler = (filteredData) => {
        console.log(filteredData);
        setFilter(filteredData)

    }

    const filteredExpanseItems = expenses.filter(element => element.date.getFullYear().toString() === filter);

    return (
        <div className='expenses'>
            <ExpensesFilter selected={filter} onFilterselectedValue={filterChangeHandler} />
            <Card className='expenses'>
                <ExpenseList expanseList={filteredExpanseItems}/>
            </Card>
        </div>
    );
}

export default Expenses;
