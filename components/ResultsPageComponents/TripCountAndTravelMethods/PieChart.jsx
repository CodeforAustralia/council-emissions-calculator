import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function PieChart({ title, data }) {
  // converting data into the format readable by highcharts (rename key for count into y)
  const filteredData = data.forEach((item) => (item.y = item.count));

  const hichartsOpts = {
    title: {
      text: title,
    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        type: "pie",
        size: 200,
        innerSize: "80%",
        name: "Trip Count",
        colorByPoint: true,
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />;
}
