import React, { useState } from "react"; // useState its a function(that allows us to define values as state where changes to these values should reflect o the component function that is being called again

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [nameOfProduct, setNameOfProduct] = useState(props.nameOfProduct);

  //useState is a react hook that should always be called inside a react component funtion
  const clickHandler = () => {
    setNameOfProduct("Thanks For buying");
  };
  return (
    //we cant wrap react components inside other react components, unless we use the cildren prop

    <Card className="expense-item">
      {/* className dont work on our custom components, unless we allow them to work in our specific component file */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{nameOfProduct}</h2>
        <div className="expense-item__price">R{props.price}</div>
      </div>
      <button onClick={clickHandler}>Buy Now!</button>
    </Card>
  );
};

export default ExpenseItem;
