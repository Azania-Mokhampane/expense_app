import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";
import "./index.css";

//this is an array(data type) that contains objects with the properties that wil be diplayed on the site
const expenses = [
  {
    id: "p1",
    title: "Hoody",
    amount: 500,
    date: new Date(2022, 1, 14),
  },
  {
    id: "p2",
    title: "Socks",
    amount: 120,
    date: new Date(2022, 2, 12),
  },
  {
    id: "p3",
    title: "Black T's",
    amount: 250,
    date: new Date(2022, 2, 28),
  },
];

const addExpenseHandler = (expenses) => {
  console.log("In App.js");
  console.log(expenses);
};
const App = () => {
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map((items) => (
        <Expenses
          nameOfProduct={items.title}
          price={items.amount}
          date={items.date}
        />
      ))}
      {/* this .map method its more like writing a for loop to loop through an array, without writing all the long code */}
      <div>
        <p className="developer">
          Developed by{" "}
          <a href="https://github.com/Azania-Mokhampane"> Azania Mokhampane</a>
        </p>
      </div>
    </>
  );
};

export default App;
