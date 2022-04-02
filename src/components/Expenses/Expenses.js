import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

//props is an object that contains all the information we have on our app
// where ever you are going to use the props, in your component you must include it as a parameter in your function and dont forget the key's
const Expenses = (props) => {
  return (
    <>
      <div className="expenses">
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
