import React from "react";

import { ChartStyles } from "./ChartStyles";
import ChartBar from "./ChartBar";

interface ChartPropsType {
  dataPoints: {
    label: string;
    value: number;
  }[];
}

const Chart = (props: ChartPropsType) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <ChartStyles>
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        ))}
      </div>
    </ChartStyles>
  );
};

export default Chart;
