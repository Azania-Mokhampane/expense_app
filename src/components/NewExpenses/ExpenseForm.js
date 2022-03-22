import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //its important to know that you can literally call useSate more than once
  const [enteredAmount, setEnteredAmount] = useState(""); // array destructuring
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); // here we are fetching the input of the user
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHadler = (event) => {
    event.preventDefault(); // this is a function that prevents the application to reload as soon as the user inputs their data

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredAmount(""); // these sets the input space to be blank as soon data is added and saved
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <>
      <form onSubmit={submitHadler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle} //adding this value event to listen sets the input to the initialized state
              onChange={titleChangeHandler} // the titleChangeHAndler will be executed on change of the input, meaning as sson the user inputs something, the function is invoked
              // we dont write the function with braces because that will invoke it as soon as the app loads,so we just point at it and it will only be executed as soon as there is a change on the input
            />
          </div>

          <div className="new-expense__control">
            <label>Amount(R)</label>
            <input
              type="number"
              value={enteredAmount}
              min="1"
              step="1"
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2020-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
