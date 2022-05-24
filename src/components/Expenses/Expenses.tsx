import { useState } from "react";
import { ExpenseStyles } from "./ExpensesStyles";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

//props is an object that contains all the information we have on our app
// where ever you are going to use the props, in your component you must include it as a parameter in your function and dont forget the key's
const Expenses = (props: any) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };

  const selectedYearExpenses = props.expenseData.filter((expense: any) => {
    const setDate = new Date(expense.date);
    return setDate.getFullYear().toString() === filteredYear;
  });

  return (
    <ExpenseStyles>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHandler}
        />
        <ExpenseChart expenses={selectedYearExpenses} />
        <ExpenseList items={selectedYearExpenses} />
      </div>
    </ExpenseStyles>
  );
};

export default Expenses;
