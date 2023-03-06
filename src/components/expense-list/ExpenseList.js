import { useState } from 'react';

import ExpenseItem from '../expense-item/ExpenseItem';
import ExpensesFilter from '../expenses-filter/ExpensesFilter';

const ExpensesList = (props) => {
  const [expensesFiltered, setExpensesFiltered] = useState(props.expenses);
  const [filteredYear, setFilteredYear] = useState(2021);

  const onChangedFilter = (value) => {
    setFilteredYear(value);

    setExpensesFiltered(props.expenses.filter((item) => item.date.getFullYear() === value));
  };

  return (
    <div className="expense-list">
      <ExpensesFilter selected={filteredYear} onChangeFilter={onChangedFilter}/>
      {expensesFiltered.map((expense)=> (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default ExpensesList;
