import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function CommuteDistanceDistributionChart({ title, data }) {
  console.log(data);
  const getMax = (a, b) => Math.max(a, b);
  const max = Object.values(data).reduce(getMax);

  const chartData = Object.values(data).map((item) => {
    if (item == max) {
      return {
        y: item,
        color: "#D69E2E",
      };
    } else return item;
  });

  const highChartsOptions = {
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
        text: "distance",
      },
    },
    series: [{ name: "Distance", data: chartData }],
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={highChartsOptions} />
  );
}
