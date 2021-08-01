import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYearTo] = useState("2020");

  const yearFilterChangeHandler = (aFilterYear) => {
    setFilterYearTo(aFilterYear);
  };

  const theFilteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filterYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filterYear={filterYear} onYearFilterChange={yearFilterChangeHandler} />
        <ExpensesChart expenses={theFilteredExpenses} />
        <ExpensesList expenses={theFilteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
