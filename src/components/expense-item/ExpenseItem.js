import CardWidget from '../card-widget/CardWidget';
import ExpenseDate from '../expense-date/ExpenseDate';

import './ExpenseItem.scss';

function ExpenseItem(props) {
  return (
    <CardWidget className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </CardWidget>
  );
}

export default ExpenseItem;
