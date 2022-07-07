import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// const HighChartBar = ({ title, data }) => {
  export default function HighChartBar ({ title, data }) {
  // converting data into the format readable by highcharts (rename key for count into y)
  const filteredData = data.forEach((item) => (item.y = item.count));

  const hichartsOpts = {
    chart: {
      // type: 'bar'
      defaultSeriesType: 'bar'
  },
    title: {
      text: title,
    },
   
    plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      },
      colorAxis: [{
        maxColor: '#044B7F',
      },
        {
        minColor: '##D69E2E',
    }],
  },
    // chart: {
    //   plotBackgroundColor: [
    //     '#4572A7,#0d233a','#2f7ed8'
    //   ],
    //   plotBorderWidth: null,
    //   plotShadow: false,
    //   type: "bar",
    // },
    // plotOptions: {
    //   series: {
    //     type: "bar",
    //   },
    //   color: "#fffff",
    
    // },
  //   legend: {
  //     layout: 'vertical',
  //     align: 'right',
  //     verticalAlign: 'top',
  //     x: -40,
  //     y: 80,
  //     floating: true,
  //     borderWidth: 1,
  //     backgroundColor:
  //         Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
  //     shadow: true
  // }, 
    // tooltip: {
    //   pointFormat: "{series.name}: <b>{point.y}</b>",
    // },
    // accessibility: {
    //   point: {
    //     valueSuffix: "%",
    //   },
    // },
    // plotOptions: {
    //   bar: {
    //     allowPointSelect: true,
    //     cursor: "pointer",
    //   },
    // },
    series: [
      {
      //  type: "bar",
        //  innerSize: "80%",
          // name: "Trip Count",
      //  colorByPoint: true,
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />;
}
// export default HighChartBar;

//    Highcharts.chart('container', {
//     chart: {
//       type: 'bar',
//       alignTicks: false
//   },
//   title: {
//       text: 'Distance'
//   },
 
//   plotOptions: {
//       bar: {
//           dataLabels: {
//               enabled: true
//           }
//       }
//   },
//   series: [{
//       name: 'Year 1800',
//       data: [107]
//   }, {
//       name: 'Year 1900',
//       data: [133]
//   }, {
//       name: 'Year 2000',
//       data: [814]
//   }, {
//       name: 'Year 2016',
//       data: [1216]
//   }]
// });