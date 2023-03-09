import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Flex } from "@chakra-ui/react";

export default function DistanceTravelledModeChart({ data }) {
  let individualMethods = Object.values(data["individual-methods"]);
  let activePublicSharedMethods = Object.values(
    data["active-public-shared-methods"]
  );

  const hichartsOpts = {
    chart: {
      type: "bar",
    },
    credits: {
      enabled: false,
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
        data: individualMethods,
      },
      {
        name: "Active/Public/Shared Methods",
        data: activePublicSharedMethods,
      },
    ],
  };
  return (
    <Flex maxWidth={["350px", "634px"]}>
      <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />
    </Flex>
  );
}
