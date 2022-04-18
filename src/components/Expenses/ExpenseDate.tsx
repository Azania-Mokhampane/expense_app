import React from "react";
import { ExpenseDateStyles } from "./DateStyles";

const ExpenseDate = (props: any) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "short" }); //toLocaleString is a javascript code that gives us the date in a readable way and takes two argumeys
  const day = props.date.getDate();

  return (
    <ExpenseDateStyles>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </ExpenseDateStyles>
  );
};

export default ExpenseDate;
