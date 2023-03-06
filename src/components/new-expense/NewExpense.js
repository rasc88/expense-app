import React from 'react';

import ExpenseForm from '../expense-form/ExpenseForm';
import './NewExpense.scss';

const NewExpense = (props) => {
  const onSubmitted = (expenseFormValues) => {
    const newExpense = {
      ...expenseFormValues,
      id: Math.random().toString()
    };

    props.onSaveExpense(newExpense);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSubmit={onSubmitted} />
    </div>
  );
};

export default NewExpense;