import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function CommuteDaysColumnChart({ title, data }) {
  // converting data into the format readable by highcharts (rename key for count into y)
  // const filteredData = data.forEach((item) => (item.y = item.count));

const hichartsOpts = {
    title: {
      text: title,
    },
    chart: {
      type: "column",
    },
    tooltip:{
      pointFormat:"{point.y}%"
    },
    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "% of staff that commuted"
      }
    },
    series: [
      {
        name: "Day",
        data: [10, 20, 25, 20, 10, 15, 0],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />;
}
