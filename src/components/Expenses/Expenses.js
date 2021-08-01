import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYearTo] = useState("2020");

  const yearFilterChangeHandler = (aFilterYear) => {
    setFilterYearTo(aFilterYear);
  };

  const theFilteredItems = props.items.filter((item) => {
    return item.date.getFullYear() === parseInt(filterYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filterYear={filterYear} onYearFilterChange={yearFilterChangeHandler} />
        <ExpensesList items={theFilteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
