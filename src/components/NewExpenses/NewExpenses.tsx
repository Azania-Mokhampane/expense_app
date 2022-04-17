import React from "react";

import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSaveExpense }: any) => {
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    //our parameter will carry data from the Expense Form
    const expenseData = {
      ...enteredExpenseData, // the rest operator(...) pull all the information gathered/ it pulls the whole object
      id: Math.random().toString(), // toString converts our number or integer to a string
    };
    onSaveExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
