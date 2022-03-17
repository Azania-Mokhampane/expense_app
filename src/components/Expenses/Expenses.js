import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

//props is an object that contains all the information we have on our app
// where ever you are going to use the props, in your component you must include it as a parameter in your function and dont forget the key's
const Expenses = ({nameOfProduct, price, date}) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        nameOfProduct={nameOfProduct}
        price={price}
        date={date}
      />
    
    </Card>
  );
};

export default Expenses;
