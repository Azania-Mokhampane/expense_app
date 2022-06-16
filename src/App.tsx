import React, { useState, useEffect } from "react";
import { IExpenses } from "./utilis/types";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";

// import "./index.css";
import Login from "./components/Login/loginpage";

type ExpensesType = {
  title: string;
  amount: string;
  date: number;
  id: string;
};

const App = (props: any) => {
  const [expenses, setExpenses] = useState<ExpensesType[]>([]);
  const [isLoggin, setIsLoggenIn] = useState(false);

  //getting the expenses
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("expenses")!);
    if (items) {
      setExpenses(items);
    }
  }, []);

  //saving the expenses
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense: IExpenses) => {
    const EXPENSES = [...expenses];
    EXPENSES.push(expense);
    setExpenses(EXPENSES);
  };
  return (
    <>
      {!isLoggin && <Login LoggenIn={setIsLoggenIn} />}

      {isLoggin && (
        <>
          <div>
            <h3>Online Expense Tracker App</h3>

            <NewExpense onSaveExpense={addExpenseHandler} />
            <Expenses {...props} expenseData={expenses} />
            <div>
              <p className="developer text-red-500">
                Developed by{" "}
                <a href="https://azaniamokhampane.vercel.app">
                  Azania Mokhampane
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
