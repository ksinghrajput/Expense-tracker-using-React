import Expenses from './components/Expense/Expenses';
import NewExpence from './components/NewExpence/NewExpence';
import React, { useState } from 'react';
import ShowInputFormButton from './components/Expense/ShowInputFormButton';

const DUMMYEXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);
  const [showInputForm, setShowInputForm] = useState(true)

  const addExpenseHandler = (expanseData) => {
    setExpenses((prevState) => [...prevState, expanseData])
  }

  const InputFormVisibilityHandler = () => {
    setShowInputForm(!showInputForm)
  }

  return (
    <div className="App">
      <h1>The complete guide about react</h1>
      {showInputForm && <ShowInputFormButton onInputFormVisibility={InputFormVisibilityHandler} />}
      {!showInputForm && <NewExpence onAddExpense={addExpenseHandler} onInputFormVisibility={InputFormVisibilityHandler}/>}
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
