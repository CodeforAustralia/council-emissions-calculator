import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function DistanceTravelledModeChart({ data }) {
  let individualMethod = [];
  let publicShared = [];

  individualMethod = Object.values(data["individual-methods"]);
  publicShared = Object.values(data["active-public-shared-method"]);

  const hichartsOpts = {
    chart: {
      type: "bar",
    },
    title: {
      text: undefined,
    },
    legend: {
      align: "center",
      verticalAlign: "top",
      layout: "horizontal",
      x: 0,
      y: 0,
    },
    xAxis: {
      // className: "highcharts-color-6",
      categories: Object.keys(data["individual-methods"]),
    },
    yAxis: {
      min: 0,

      reversedStacks: false,
      title: {
        text: "Trip percentages %",
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true,
    },
    colors: ["#D69E2E", "#044B7F"],
    plotOptions: {
      bar: {
        stacking: "percent",
      },
    },
    series: [
      {
        name: "Individual Methods",
        data: individualMethod,
      },
      {
        name: "Active/Public/Shared Methods",
        data: publicShared,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />;
}
