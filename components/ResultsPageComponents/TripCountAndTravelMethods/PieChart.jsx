import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function PieChart () {

  const data = [
    { name: "active",
      y: 50 
    },
    { name: "indivisual",
      y: 20 
    },
  ]

  const hichartsOpts = {
    title: {
      text: "Trip Count by Transport Mode",
    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %"
        }
      }
    },
    series: [
      {
        type: "pie",
        innerSize: "80%",
        name: "Trip Count",
        colorByPoint: true,
        data: data
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />;
}