import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

//props is an object that contains all the information we have on our app
// where ever you are going to use the props, in your component you must include it as a parameter in your function and dont forget the key's
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHandler}
        />
        <ExpenseItem
          nameOfProduct={props.items[0].title}
          price={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          nameOfProduct={props.items[1].title}
          price={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          nameOfProduct={props.items[2].title}
          price={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          nameOfProduct={props.items[3].title}
          price={props.items[3].amount}
          date={props.items[3].date}
        />
        <ExpenseItem
          nameOfProduct={props.items[4].title}
          price={props.items[4].amount}
          date={props.items[4].date}
        />
        <ExpenseItem
          nameOfProduct={props.items[5].title}
          price={props.items[5].amount}
          date={props.items[5].date}
        />
      </div>
    </>
  );
};

export default Expenses;
