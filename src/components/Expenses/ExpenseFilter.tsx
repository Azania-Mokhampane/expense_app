import React from "react";

import { ExpenseFilterStyles } from "./FilterStyles";

const ExpensesFilter = (props: any) => {
  const dropdownChangeHandler = (event: any) => {
    props.onChangeHandler(event.target.value);
  };

  return (
    <ExpenseFilterStyles>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </ExpenseFilterStyles>
  );
};

export default ExpensesFilter;
