import { useState } from 'react';

import NewExpense from './components/new-expense/NewExpense';
import ExpenseList from './components/expense-list/ExpenseList';

import './App.scss';

const initialExpenses = [
  {
    id: 'e1',
    title: 'WiFi',
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', price: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    price: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const onSaveExpenseClicked = (newExpense) => {
    setExpenses(() => ([...expenses, newExpense]));
  };

  return (
    <div className="app">
      <div className="app__expenses">
        <NewExpense onSaveExpense={onSaveExpenseClicked} />
        <ExpenseList expenses={expenses}/>
      </div>
    </div>
  );
}

export default App;
