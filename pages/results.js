import { Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import useForm from "../components/FormProvider";
import Layout from "../components/Layout/Layout";
import capitalize from "../utils/capitalize";
import { FiDownload } from "react-icons/fi";
import { getTripTotalsTop3 } from "./api/trips";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

export async function getServerSideProps() {
  const tripjson = await getTripTotalsTop3();

  // console.log(`is tripjson ready?: ${ !!tripjson }`);
  // console.log(`tripjson: ${ JSON.stringify(tripjson) }`);

  return {
    props: {
      data: tripjson,
    },
  };
}

const TripsChart = ({ data }) => {
  // console.log(`data: ${ JSON.stringify(data) }`);

  if (!data) return <div>I got nothing...</div>;

  let topTransportModes = data.map((t) => t[0]);
  let tripCounts = data.map((t) => Number(t[1]));
  // console.log(`topTransportModes: ${ JSON.stringify(topTransportModes) }`);
  // console.log(`tripCounts: ${ JSON.stringify(tripCounts) }`);

  const hichartsOpts = {
    title: {
      text: "Trip Count by Transport Mode",
    },
    chart: {
      type: "bar",
    },
    xAxis: {
      // categories: ['Walking', 'Train/tram', 'E-scooter']
      categories: topTransportModes,
    },
    series: [
      {
        name: "Trip Count",
        data: tripCounts,
        // data: [37, 30, 28]
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={hichartsOpts} />;
};

export default function Results({ data }) {
  const { answers } = useForm();
  const { km, mainTransportMode, department, incentive } = answers;

  return (
    <Layout isText={true}>
      {/* Button for download */}
      <Button className="resultbtn" colorScheme="blue">
        Download as PDF or CSV {""}
        <FiDownload />
      </Button>

      <Heading>Your results:</Heading>
      <TripsChart data={data} />

      <Text>
        <br />
        <b>Department:</b> {capitalize(department)}
        <br />
        <b>Anything that would change your mind:</b> {incentive}
        <br />
        <br />
        <b>Daily travel:</b> {km}km
        <br />
      </Text>
    </Layout>
  );
}
