import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";

//this is an array(data type) that contains objects with the properties that wil be diplayed on the site
const expenses = [
  {
    id: "p1", // id is our key
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
  {
    id: "p4",
    title: "Cap",
    amount: 200,
    date: new Date(2022, 5, 12),
  },
];
const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
