import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartContainer } from "../SharedComponents/ContentLayouts";

export default function CommuteDaysColumnChart({ title, data }) {
  /*
  data is of the following form:
  data = {
      Mon: 10,
      Tue: 20,
      Wed: 25,
      Thu: 20,
      Fri: 10,
      Sat: 15,
      Sun: 0
  };
  console.log(JSON.stringify(data, ' ', null));
  */

  const getMax = (a, b) => Math.max(a, b);
  const max = Object.values(data).reduce(getMax);

  const chartData = Object.values(data).map((d) => {
    if (d == max) {
      return {
        y: d,
        color: "#D69E2E",
      };
    } else return d;
  });

  const hichartsOpts = {
    title: {
      text: title,
    },
    chart: {
      type: "column",
    },
    colors: ["#044B7F"],
    tooltip: {
      pointFormat: "{point.y}%",
    },
    xAxis: {
      categories: Object.keys(data),
    },
    yAxis: {
      min: 0,
      title: {
        text: "% of staff that commuted",
      },
    },
    series: [
      {
        name: "Day",
        data: chartData,
        pointWidth: 40,
      },
    ],
  };

  return (
    <ChartContainer>
      <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />
    </ChartContainer>
  );
}
