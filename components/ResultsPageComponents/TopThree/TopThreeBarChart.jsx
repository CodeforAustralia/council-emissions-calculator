import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Icon } from "@chakra-ui/react";
import { transportIcon } from "../../../utils/constants";
import { travelMethods } from "../../../utils/constants";

export default function TopThreeBarChart({
  title,
  data,
  totalDistance,
  totalEmissions,
  totalTripCount,
}) {
  // totalEmissions={data["total-co2-emissions-tonnes"]}
  // totalTripCount={}
  let total;
  let totalName;
  let unit;
  console.log("title", title);
  const grandTotal = () => {
    if (title == "Distance") {
      total = totalDistance;
      unit = "Km";

      return (totalName = "Total Distance :");
    } else if (title == "TripCount") {
      total = totalTripCount;
      unit = "";
      return (totalName = "Total Trip-Count :");
    } else if (title == "Emission") {
      total = totalEmissions;
      unit = "Tonns";
      return (totalName = "Total Emmission :");
    }
  };

  let idx;
  let barIcon;
  const chartData = Object.values(data).map((d) => {
    console.log(d.name);
    idx = travelMethods.indexOf(d.name);
    barIcon = transportIcon[idx];

    if (d.name == ("Car" || "Motorbike")) {
      return {
        name: d.name,
        y: d.count,
        color: "#D69E2E",
      };
    } else
      return {
        name: d.name,
        y: d.count,
        color: "#044B7F",
      };
  });
  grandTotal();
  // setIconArr(barIcon);
  // if (d == max) {
  //   return {
  //     y: d,
  //     color: "#D69E2E",
  //   };
  // } else return d;
  console.log("title", title, "chartData", chartData);
  // Grand total for each mode

  const hichartsOpts = {
    chart: {
      type: "bar",
    },
    color: "#044B7F",
    title: {
      text: title,
    },

    // subtitle: {
    //   text: title,
    // },

    // colors: ["#044B7F"],
    // xAxis: {
    //   categories: Object.keys(data),
    // },
    legend: {
      enabled: false,
    },
    xAxis: {
      categories: data[title],
      title: {
        text: null,
      },
      labels: {
        enabled: false,
        // icons
        // animate: true,
        // useHTML: true,
        // formatter: function () {
        //   return '<img style="width: 10px; height: 10px;" src="https://images.unsplash.com/photo-1658057144662-3aa56be9d1b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"';
        // },
        // style: {
        //   textAlign: "center",
        // },
      },
      gridLineWidth: 0,
      showEmpty: false,
      visible: false,
    },
    yAxis: {
      min: 0,
      gridLineWidth: 0,
      title: {
        text: [totalName, total, unit],
        align: "high",
      },
      labels: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          align: "right",
          color: "#FFFFFF",
        },
      },
    },

    series: [
      {
        data: chartData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />;
}
