import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  
  // Handlers could be written as: handleFilterChange. They are instantaneous as an event occcurs. They handle the even. They are less of a thing and more of a process
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

    // Looks at all expenses in list and returns a new array with expenses equal to the YEAR chosen in the select element. only those will be shared
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
        {/* {expenesesContent} */}
                {/* If there are no Expenses in the array
        {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                If there are more than 1 expense then using the && operator, execute the right side code and display all expenese in filtered array 
                This can all be stored in a const object outside of the template and then referenced in the template to SIMPLIFY code (const expenesesContent = [all the jsx/html code below this])
        {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
          <ExpenseItem
                  Key keeps the order of the items in the array to appear in the correct way in the DOM. React handles this for us
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      </Card>
    </li>
  );
};

export default Expenses;
