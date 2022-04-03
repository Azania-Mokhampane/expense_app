import React, { useState } from "react";
import { IExpenses } from "./utilis/types";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";
// import ExpenseFilter from "./components/Expenses/ExpenseFilter";

import "./index.css";

type ExpensesType = {
  title: string;
  amount: string;
  date: number;
  id: string;
};

const App = () => {
  const [expenses, setExpenses] = useState<ExpensesType[]>([]);

  const addExpenseHandler = (expense: IExpenses) => {
    const EXPENSES = [...expenses];
    EXPENSES.push(expense);
    setExpenses(EXPENSES);
  };
  return (
    <>
      <div className="header">Online Expense Tracker App</div>
      <NewExpense onSaveExpense={addExpenseHandler} />
      {/* 
      <ExpenseFilter /> */}
      {expenses.map((items: IExpenses) => {
        return (
          <>
            <Expenses
              name={items.title}
              price={items.amount}
              date={items.date}
            />
          </>
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
