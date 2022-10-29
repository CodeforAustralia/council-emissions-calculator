import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Flex } from "@chakra-ui/react";

export default function CommuteDaysColumnChart({ title, data }) {
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
      style: { color: "#022640" },
    },
    chart: {
      type: "column",
      height: 400,
    },
    colors: ["#044B7F"],
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: "{point.y}%",
    },
    xAxis: {
      categories: Object.keys(data),
      title: {
        text: "Day",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "% of staff who commuted",
      },
    },
    series: [
      {
        showInLegend: false,
        name: "Day",
        data: chartData,
      },
    ],
  };

  return (
    <Flex direction="column" maxWidth="634px" width="100%">
      <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />
    </Flex>
  );
}
