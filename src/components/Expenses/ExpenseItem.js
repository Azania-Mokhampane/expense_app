import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    //we cant wrap react components inside other react components, unless we use the cildren prop

    <div className="expense-item">
      {/* className dont work on our custom components, unless we allow them to work in our specific component file */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.nameOfProduct}</h2>
        <div className="expense-item__price">R{props.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
