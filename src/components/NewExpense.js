import React from 'react';
import Expense from './Expense';
import './NewExpense.css'
import Card from './Card';

const NewExpense = (props) => {
    const { expenses } = props;
    return (
        <Card className='expenses'>
            <Expense date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}></Expense>
            <Expense date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}></Expense>
            <Expense date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount}></Expense>
            <Expense date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount}></Expense>
        </Card>
    );
}

export default NewExpense;
