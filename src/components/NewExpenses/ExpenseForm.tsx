import React, { useState } from "react";

import { ExpenseFormStyles } from "./FormStyles";

const ExpenseForm = (props: any) => {
  //TODO:refactor useState into object
  const [enteredData, setEnteredData] = useState({
    enteredAmount: "",
    enteredDate: "",
    enteredTitle: "",
  });

  const submitHandler = (event: any) => {
    event.preventDefault();

    const expenseData = {
      title: enteredData.enteredTitle,
      amount: +enteredData.enteredAmount,
      date: new Date(enteredData.enteredDate),
    };
    props.onSaveExpenseData(expenseData); // expense data is our argument for the parameter on the New Expense, enteredExpenseData

    setEnteredData({
      ...enteredData,
      enteredAmount: "",
      enteredDate: "",
      enteredTitle: "",
    });
  };

  return (
    <ExpenseFormStyles>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredData.enteredTitle} //adding this value prop helps us with gather the user input and reinitialise it to an empty string again by changing the state again
              onChange={(event) =>
                setEnteredData({
                  ...enteredData,
                  enteredTitle: event.target.value,
                })
              } // the titleChangeHAndler will be executed on change of the input, meaning as sson the user inputs something, the function is invoked
              // we dont write the function with braces because that will invoke it as soon as the app loads,so we just point at it and it will only be executed as soon as there is a change on the input
              required
            />
          </div>

          <div className="new-expense__control">
            <label>Amount(R)</label>
            <input
              type="number"
              value={enteredData.enteredAmount}
              min="1"
              step="1"
              onChange={(event) =>
                setEnteredData({
                  ...enteredData,
                  enteredAmount: event.target.value,
                })
              }
              required
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredData.enteredDate}
              min="2020-01-01"
              max="2022-12-31"
              onChange={(event) =>
                setEnteredData({
                  ...enteredData,
                  enteredDate: event.target.value,
                })
              }
              required
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </ExpenseFormStyles>
  );
};

export default ExpenseForm;
