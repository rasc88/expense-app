import React, { useState } from 'react';

import './ExpenseForm.scss';

const ExpenseForm = (props) => {
  const [newExpense, setNewExpense] = useState({
    title: '',
    price: '',
    date: '',
  });

  const onTitleChanged = (event) => {
    setNewExpense((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const onPriceChanged = (event) => {
    setNewExpense((prevState) => ({ ...prevState, price: event.target.value }));
  };

  const onDateChanged = (event) => {
    setNewExpense((prevState) => ({ ...prevState, date: event.target.value }));
  };

  const onSubmitted = (event) => {
    event.preventDefault();

    props.onSubmit({
      title: newExpense.title,
      price: newExpense.price,
      date: new Date(newExpense.date),
    });

    setNewExpense({
      title: '',
      price: '',
      date: '',
    });
  };

  return (
    <form className='expense-form' onSubmit={onSubmitted}>
      <div className='expense-form__controls'>
        <div className='expense-form__title'>
          <label className='expense-form__label'>Title</label>
          <input
            className='expense-form__input'
            type='text'
            value={newExpense.title}
            onChange={onTitleChanged}
          />
        </div>
        <div className='expense-form__price'>
          <label className='expense-form__label'>Amount</label>
          <input
            className='expense-form__input'
            type='number'
            min='0.01'
            step='0.01'
            value={newExpense.price}
            onChange={onPriceChanged}
          />
        </div>
        <div className='expense-form__date'>
          <label className='expense-form__label'>Date</label>
          <input
            className='expense-form__input'
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={newExpense.date}
            onChange={onDateChanged}
          />
        </div>
      </div>
      <div className='expense-form__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;