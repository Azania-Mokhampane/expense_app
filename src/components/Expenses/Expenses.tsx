import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

interface Props {
  price: string;
  date: number;
  name: string;
}

//props is an object that contains all the information we have on our app
// where ever you are going to use the props, in your component you must include it as a parameter in your function and dont forget the key's
const Expenses = (props: Props) => {
  return (
    <>
      <div className="expenses">
        <ExpenseItem name={props.name} price={props.price} date={props.date} />
      </div>
    </>
  );
};

export default Expenses;
