import React from "react";

import { ExpenseFilterStyles } from "./FilterStyles";

interface FilterTypes {
  selected: string;
  onChangeHandler: (selectedYear: string) => void
}

const ExpensesFilter = (props: FilterTypes) => {
  const dropdownChangeHandler = (event: { target: { value: string; }; }) => {
    props.onChangeHandler(event.target.value);
  };

  return (
    <ExpenseFilterStyles>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          {/*TODO: Make the date filter dynamic */}
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
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
