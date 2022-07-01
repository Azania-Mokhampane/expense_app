import React from "react";
import { IExpenses } from "../../utilis/types";
import Chart from "../Chart/Chart";

interface ChartTypes {
  expenses: IExpenses[]
}

const ExpenseChart = (props: ChartTypes) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const setMonth = new Date(expense.date);
    const expenseMonth = setMonth.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return (
    <>
      <Chart dataPoints={chartDataPoints} />
    </>
  );
};

export default ExpenseChart;
