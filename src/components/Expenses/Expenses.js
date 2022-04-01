import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

//props is an object that contains all the information we have on our app
// where ever you are going to use the props, in your component you must include it as a parameter in your function and dont forget the key's
const Expenses = (props) => {
  const [year, setYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  return (
    <>
      <div className="expenses">
        <ExpensesFilter selected={year} onChangeHandler={filterChangeHandler} />
        <ExpenseItem
          nameOfProduct={props.name}
          price={props.price}
          date={props.date}
        />
      </div>
    </>
  );
};

export default Expenses;
