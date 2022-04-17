import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const ExpenseList = (props: any) => {
  return (
    <>
      <ul className="expenses-list">
        {props.items.length === 0 ? (
          <h2 className="expenses-list__fallback ">No Expenses Found.</h2>
        ) : (
          props.items.map((expense: any) => (
            <ExpenseItem
              name={expense.title}
              price={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </ul>
    </>
  );
};

export default ExpenseList;
