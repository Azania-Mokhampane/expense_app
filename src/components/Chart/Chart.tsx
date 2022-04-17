import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props: any) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: any) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <>
      <div className="chart">
        {props.dataPoints.map((dataPoint: any) => (
          <ChartBar
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        ))}
      </div>
    </>
  );
};

export default Chart;
