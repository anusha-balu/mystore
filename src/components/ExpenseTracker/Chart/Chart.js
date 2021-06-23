import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
export default function Chart(props) {
  const maximumValues = props.dataPoints.map(data => data.value);
  const maximumValue = Math.max(...maximumValues);
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
}
