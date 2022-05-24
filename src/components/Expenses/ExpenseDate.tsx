import React from "react";
import { ExpenseDateStyles } from "./DateStyles";

const ExpenseDate = (props: any) => {
  const setDate = new Date(props.date);
  const year = setDate.getFullYear();
  const month = setDate.toLocaleString("en-US", { month: "short" }); //toLocaleString is a javascript code that gives us the date in a readable way and takes two argumeys
  const day = setDate.getDate();

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
