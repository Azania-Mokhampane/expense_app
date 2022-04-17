import React, { useState } from "react";

import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSaveExpense }: any) => {
  const [expenseForm, setExpenseForm] = useState(false);

  const showForm = () => {
    setExpenseForm(true);
  };
  const OnCancelHandler = () => {
    setExpenseForm(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    //our parameter will carry data from the Expense Form
    const expenseData = {
      ...enteredExpenseData, // the rest operator(...) pull all the information gathered/ it pulls the whole object
      id: Math.random().toString(), // toString converts our number or integer to a string
    };
    setExpenseForm(false);
    onSaveExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!expenseForm && <button onClick={showForm}>Add New Expense</button>}
      {expenseForm && (
        <ExpenseForm
          onCancel={OnCancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
