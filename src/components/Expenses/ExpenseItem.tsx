import React from "react";

import { ExpenseItemStyles } from "./ItemStyles";
import ExpenseDate from "./ExpenseDate";
import { IExpenses } from "../../utilis/types";

const ExpenseItem = (props: IExpenses) => {
  // the other way to use props is wrapping our key within curly braces as parameters or argumemts
  return (
    //we cant wrap react components inside other react components, unless we use the children prop

    <ExpenseItemStyles>
      <div className="expense-item">
        {/* className dont work on our custom components, unless we allow them to work in our specific component file */}
        <ExpenseDate date={props.date} />
        <div key={props.id} className="expense-item__description">
          <h2 className="expense-item h2">{props.title}</h2>
          <div className="expense-item__price">R{props.amount}</div>
        </div>
      </div>
    </ExpenseItemStyles>
  );
};

export default ExpenseItem;
