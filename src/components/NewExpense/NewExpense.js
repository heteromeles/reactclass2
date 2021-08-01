import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const startEditingHandler = () => {
    setIsAdding(true);
  };

  const stopEditingHandler = () => {
    setIsAdding(false);
  };

  const addExpenseHandler = (aNewExpense) => {
    const theNewExpense = {
      ...aNewExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(theNewExpense);
  };

  return (
    <div className="new-expense">
      {!isAdding && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isAdding && <ExpenseForm onAdd={addExpenseHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
