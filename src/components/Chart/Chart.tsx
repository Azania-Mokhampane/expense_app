import React from "react";

import { ChartStyles } from "./ChartStyles";
import ChartBar from "./ChartBar";

const Chart = (props: any) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: any) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <ChartStyles>
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
    </ChartStyles>
  );
};

export default Chart;
