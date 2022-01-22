import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">Found No Expense</h2>
  }
  return <ul className="expenses-list">
      {props.items.map((expense) => (
      <ExpenseItem
        // Key keeps the order of the items in the array to appear in the correct way in the DOM. React handles this for us
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
};
export default ExpensesList;
