import { useState } from "react";
import { ExpenseStyles } from "./ExpensesStyles";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props: any) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };

  const selectedYearExpenses = props.expenseData.filter((expense: any) => {
    const setDate = new Date(expense.date);
    return setDate.getFullYear().toString() === filteredYear;
  });
  console.log(selectedYearExpenses);
  return (
    <ExpenseStyles>
      <div className="expenses">
        {selectedYearExpenses.length ? (
          <>
            <ExpenseFilter
              selected={filteredYear}
              onChangeHandler={filterChangeHandler}
            />

            <ExpenseChart expenses={selectedYearExpenses} />
            <ExpenseList items={selectedYearExpenses} />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/income-amico.svg"
              alt="Money Income"
              style={{ width: "50%", paddingBottom: "10px" }}
            />
            <p style={{ color: "white", textAlign: "center" }}>
              You have not expenses yet🎉📈.
            </p>
          </div>
        )}
      </div>
    </ExpenseStyles>
  );
};

export default Expenses;
