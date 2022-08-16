import { Container, Text, Flex } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { transportIcon } from "../../../utils/constants";
import { travelMethods } from "../../../utils/constants";
import { formatCommaSeparators } from "../../../utils/mathUtils";

export default function TopThreeBarChart({
  title,
  data,
  totalDistance,
  totalEmissions,
  totalTripCount,
}) {
  let total;
  let totalName;
  let unit;
  const grandTotal = () => {
    if (title == "Distance") {
      total = totalDistance;
      unit = "Km";

      return (totalName = "Total Distance:");
    } else if (title == "Trip Count") {
      total = totalTripCount;
      unit = "";
      return (totalName = "Total Trip Count:");
    } else if (title == "Emission") {
      total = totalEmissions;
      unit = "Tonnes";
      return (totalName = "Total Emmission:");
    }
  };

  let idx;
  let barIcon;

  const chartData = Object.values(data).map((d) => {
    // console.log("title: ", title);
    idx = travelMethods.indexOf(d.name);
    barIcon = transportIcon[idx];

    const generateIconPath = (categoryName) => {
      const filePath = "../../../public/images/survey-intro-icons/";
      const extension = ".svg";
      switch (categoryName) {
        case "Bus":
          return `${filePath}bus${extension}`;
          break;

        case "Car":
          return `${filePath}car${extension}`;
          break;

        case "Train":
          return `${filePath}train${extension}`;
          break;

        case "Walk":
          return `${filePath}walking-man${extension}`;
          break;

        default:
          return "";
      }
    };

    const unit = (title) => {
      switch (title) {
        case "Distance":
          return "km";
          break;

        case "Trip Count":
          return "";
          break;

        case "Emission":
          return "t";
          break;

          break;

        default:
          return "";
      }
    };

    if (d.name == ("Car" || "Motorbike")) {
      return {
        name: d.name,
        y: d.count,
        color: "#D69E2E",
        dataLabels: {
          formatter: function () {
            return `<div>${d.name} : ${this.y} ${unit(
              title
            )}<img src=${generateIconPath(
              d.name
            )} width='20' height='20'> </div>`;
          },
        },
      };
    } else
      return {
        name: d.name,
        y: d.count,
        color: "#044B7F",
        dataLabels: {
          formatter: function () {
            return `<div><div>${d.name} : ${this.y} ${unit(
              title
            )}</div><barIcon/>  </div>`;
          },
        },
      };
  });
  grandTotal();

  const hichartsOpts = {
    chart: {
      type: "bar",
      height: 250,
    },
    color: "#044B7F",
    credits: {
      enabled: false
    },
    title: {
      text: title,
    },

    legend: {
      enabled: false,
    },
    xAxis: {
      categories: data[title],
      title: {
        text: null,
      },

      gridLineWidth: 0,
      showEmpty: false,
      visible: false,
    },
    yAxis: {
      min: 0,
      gridLineWidth: 0,
      title: {
        text: `${totalName} ${formatCommaSeparators(total)} ${unit}`,
        align: "high",
      },
      labels: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          useHtml: true,
          enabled: true,
        },
      },
    },
    series: [
      {
        name: title,
        data: chartData,
      },
    ],
  };

  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />
    </Container>
  );
}
