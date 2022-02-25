import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  console.log(props);
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "short" });
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
