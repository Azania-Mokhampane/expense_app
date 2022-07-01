import React, { useState } from "react";

import { NewExpenseStyles } from "./NewExpenseStyles";
import ExpenseForm from "./ExpenseForm";
import { IExpenses, EnteredDataType } from "../../utilis/types";

interface PropType {
  onSaveExpense : (expense: IExpenses) => void
}


const NewExpense = (props : PropType) => {
  const [expenseForm, setExpenseForm] = useState(false);

  const showForm = () => {
    setExpenseForm(true);
  };
  const OnCancelHandler = () => {
    setExpenseForm(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData: EnteredDataType) => {
    //our parameter will carry data from the Expense Form
    const expenseData = {
      ...enteredExpenseData, // the rest operator(...) pull all the information gathered/ it pulls the whole object
      id: Math.random().toString(), // toString converts our number or integer to a string
    };
    setExpenseForm(false);
    props.onSaveExpense(expenseData);
  };

  return (
    <NewExpenseStyles>
      <div className="new-expense">
        {!expenseForm && <button onClick={showForm}>Add New Expense</button>}
        {expenseForm && (
          <ExpenseForm
            onCancel={OnCancelHandler}
            onSaveExpenseData={saveExpenseDataHandler}
          />
        )}
      </div>
    </NewExpenseStyles>
  );
};

export default NewExpense;
