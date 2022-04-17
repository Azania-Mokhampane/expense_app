import React, { useState } from "react";
import { IExpenses } from "./utilis/types";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";

import "./index.css";

type ExpensesType = {
  title: string;
  amount: string;
  date: number;
  id: string;
};

const App = (props: any) => {
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

      <Expenses {...props} expenseData={expenses} />

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
