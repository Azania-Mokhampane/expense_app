import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ date, name, price }: any) => {
  // the other way to use props is wrapping our key within curly braces as parameters or argumemts
  return (
    //we cant wrap react components inside other react components, unless we use the children prop

    <>
      <div className="expense-item">
        {/* className dont work on our custom components, unless we allow them to work in our specific component file */}
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2 className="expense-item h2">{name}</h2>
          <div className="expense-item__price">R{price}</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
