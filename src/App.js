import React, { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css'

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    description: 'House needs',
    amount: 94.12,
    date: new Date('2023-07-22')
  },
  { 
    id: "e2", 
    title: "New TV",
    description: 'Hobby',
    amount: 799.49, 
    date: new Date('2024-2-12')
  },
  {
    id: "e3",
    title: "Car Insurance",
    description: 'Save and musts needs',
    amount: 294.67,
    date: new Date('2024-2-28')
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    description: 'For work and income needs.',
    amount: 450,
    date: new Date('2024-5-12')
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <h1 className='title'>My Expense Tracker App</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
