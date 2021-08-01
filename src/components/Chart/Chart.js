import ChartBar from "./ChartBar";
import "./ChartBar.css";

const Chart = (props) => {
  // Extract the value for each data point into an array, and then use spread to pass then as variadic.
  const theValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const theMaxValue = Math.max(...theValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={theMaxValue} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
