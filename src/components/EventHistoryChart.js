import { useState } from "react";
import Chart from "react-apexcharts";

const EventHistoryChart = () => {
  const [options] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  });

  const [series] = useState([
    {
      name: "series-1",
      data: [32, 40, 60, 95, 80, 140, 115, 150],
    },
  ]);

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="100%"
      />
    </>
  );
};
export default EventHistoryChart;
