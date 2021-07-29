import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const addExpenseHandler = (aNewExpense) => {
    const theNewExpense = {
      ...aNewExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(theNewExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
