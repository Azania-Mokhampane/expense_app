import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props: any) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "short" }); //toLocaleString is a javascript code that gives us the date in a readable way and takes two argumeys
  const day = props.date.getDate();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
