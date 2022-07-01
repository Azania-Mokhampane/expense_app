import React from "react";

import { ChartBarStyles } from "./BarStyles";

interface BarTypes {
  value: number;
  maxValue: number;
  label: string;
}
const ChartBar = (props: BarTypes) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <ChartBarStyles>
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{ height: barFillHeight }}>
            {}
          </div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </ChartBarStyles>
  );
};

export default ChartBar;
