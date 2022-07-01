import React from "react";
import { IExpenses } from "../../utilis/types";
import ExpenseItem from "./ExpenseItem";

import { ExpenseListStyles } from "./ListStyles";


interface ExpListType {
  items: IExpenses[];
}

const ExpenseList = (props: ExpListType) => {
  return (
    <ExpenseListStyles>
      <ul className="expenses-list">
        {props.items.length === 0 ? (
          <h2 className="expenses-list__fallback ">No Expenses Found.</h2>
        ) : (
          props.items.map(
            (expense, index) => (
              <div key={index}>
                <ExpenseItem
                  id={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              </div>
            )
          )
        )}
      </ul>
    </ExpenseListStyles>
  );
};

export default ExpenseList;
