<<<<<<< HEAD
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from './UI/Card'

function ExpenseItem(props) {
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
=======
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from './UI/Card'

function ExpenseItem(props) {
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
>>>>>>> d39391126c56a2f7c6fbf3368883d0a67ea12b00
