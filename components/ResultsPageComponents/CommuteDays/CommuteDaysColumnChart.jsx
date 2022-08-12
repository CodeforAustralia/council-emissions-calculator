import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function CommuteDaysColumnChart({ title, data, wid, hei }) {
  // data is of the following form:
  // data = {
  //     Mon: 10,
  //     Tue: 20,
  //     Wed: 25,
  //     Thu: 20,
  //     Fri: 10,
  //     Sat: 15,
  //     Sun: 0
  // };
  // console.log(JSON.stringify(data, ' ', null));

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
      // width: (6 * wid) / 100,
      // height: (6 * hei) / 100,
    },

    // responsive: {
    //   rules: [
    //     {
    //       condition: {
    //         maxWidth: 2000,
    //       },
    //     },
    //   ],
    // },
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
    // responsive: {
    //   rules: [
    //     {
    //       condition: {
    //         maxWidth: 500,
    //       },
    //       chartOptions: {
    //         legend: {
    //           align: "center",
    //           verticalAlign: "bottom",
    //           layout: "horizontal",
    //         },
    //         yAxis: {
    //           labels: {
    //             align: "centre",
    //             x: 0,
    //             y: -20,
    //           },
    //           // title: {
    //           //   text: "Browser market shares at a specific website, 2015",
    //           // },
    //         },
    //         subtitle: {
    //           text: null,
    //         },
    //         credits: {
    //           enabled: true,
    //         },
    //       },
    //     },
    //   ],
    // },
    series: [
      {
        name: "Day",
        data: chartData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />;
}
