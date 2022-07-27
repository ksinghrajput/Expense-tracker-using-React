import React,{useState} from 'react';
import Expense from './Expense';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './Filter/ExpensesFilter';

const Expenses = (props) => {
    const { expenses } = props;
    const [filter, setFilter] = useState('2020')

    const filterChangeHandler = (filteredData) => {
        console.log(filteredData);
        setFilter(filteredData)

    }

    return (
        <div className='expenses'>
            <ExpensesFilter selected={filter} onFilterselectedValue={filterChangeHandler}/>
            <Card className='expenses'>
                {expenses.filter(element => element.date.getFullYear().toString() === filter).map((item, index) => {
                    return (
                        <Expense key={index} date={item.date} title={item.title} amount={item.amount}></Expense>
                    )
                })}
            </Card>
        </div>
    );
}

export default Expenses;
