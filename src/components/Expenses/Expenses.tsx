import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

//props is an object that contains all the information we have on our app
// where ever you are going to use the props, in your component you must include it as a parameter in your function and dont forget the key's
const Expenses = (props: any) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };
  return (
    <>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHandler}
        />
        {props.expenseData.map((items: any) => (
          <ExpenseItem
            name={items.title}
            price={items.amount}
            date={items.date}
          />
        ))}
        {/* <ExpenseItem name={props.expenseData.title} price={props.pri} date={props.date} /> */}
      </div>
    </>
  );
};

export default Expenses;
