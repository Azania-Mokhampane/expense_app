import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";
import "./index.css";

const App = () => {
  //this is an array(data type) that contains objects with the properties that wil be diplayed on the site
  const expenses = [
    {
      id: "p1",
      title: "Hoody",
      amount: 500,
      date: new Date(2019, 1, 14),
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
      date: new Date(2020, 2, 28),
    },
    {
      id: "p4",
      title: "Laptop",
      amount: 5000,
      date: new Date(2021, 1, 14),
    },
    {
      id: "p5",
      title: "Web Camera",
      amount: 700,
      date: new Date(2022, 2, 12),
    },
    {
      id: "p6",
      title: "Headphones",
      amount: 850,
      date: new Date(2020, 2, 28),
    },
  ];

  const addExpenseHandler = (expense) => {};
  return (
    <>
      <div className="header">Online Expense Tracker App</div>
      <NewExpense onSaveExpense={addExpenseHandler} />

      <Expenses items={expenses} />

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
