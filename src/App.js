import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";
import "./index.css";

const App = () => {
  //this is an array(data type) that contains objects with the properties that wil be diplayed on the site
  const expenses = [];

  const addExpenseHandler = (expense) => {
    expenses.push(expense);
    console.log("Data: ", expenses);
  };
  return (
    <>
      <div className="header">Online Expense Tracker App</div>
      <NewExpense onSaveExpense={addExpenseHandler} />

      {expenses.map((items) => {
        return (
          <Expenses name={items.title} price={items.amount} date={items.date} />
        );
      })}

      {/* this .map method its more like writing a for loop to loop through an array, without writing all the long code */}
      <div>
        <p className="developer">
          Developed by
          <a href="https://github.com/Azania-Mokhampane"> Azania Mokhampane</a>
        </p>
      </div>
    </>
  );
};

export default App;
