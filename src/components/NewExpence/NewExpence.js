import React from 'react';
import './NewExpence.css'
import ExpenseForm from './ExpenseForm';

const NewExpence = (props) => {
    const expenseDataHandler = (ExpanseData) => {
        props.onAddExpense(ExpanseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onExpanseData={expenseDataHandler} onInputFormVisiblity={props.onInputFormVisibility}/>
        </div>
    );
}

export default NewExpence;
