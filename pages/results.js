import { Flex, Img } from "@chakra-ui/react";
import React from "react";
import useForm from "../components/FormProvider";
import Layout from "../components/Layout/Layout";
import DownloadResults from "../components/ResultsPageComponents/DownloadResults/DownloadResults";
import SurveyOverview from "../components/ResultsPageComponents/SurveyOverview/SurveyOverview";
import SurveyIntro from "../components/ResultsPageComponents/SurveyIntro/SurveyIntro";
import TripCountAndTravelMethods from "../components/ResultsPageComponents/TripCountAndTravelMethods/TripCountAndTravelMethods";
import WorkArrangement from "../components/ResultsPageComponents/WorkArrangement/WorkArrangement";
import fsPromises from "fs/promises";
import path from "path";
// import capitalize from "../utils/capitalize";
// import { FiDownload } from "react-icons/fi";
// import { getTripTotalsTop3 } from "./api/trips";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data/2022-results.json");
  const jsonData = await fsPromises.readFile(filePath);
  const results = JSON.parse(jsonData);

  return {
    props: {
      data: results,
    },
  };
}

// export async function getServerSideProps() {
//   const tripjson = await getTripTotalsTop3();

//   // console.log(`is tripjson ready?: ${ !!tripjson }`);
//   // console.log(`tripjson: ${ JSON.stringify(tripjson) }`);

//   return {
//     props: {
//       data: tripjson,
//     },
//   };
// }

export default function Results({ data }) {
  const { answers } = useForm();
  const { km, mainTransportMode, department, incentive } = answers;

  return (
    <Layout isText={true} maxContainerWidth="100%">
      <Flex
        px={["5px", "50px"]}
        width="100%"
        gap={["40px", "90px"]}
        wrap="wrap"
        direction={["column", "row"]}
        justify="center"
        align={["center", "flex-start"]}
      >
        <SurveyIntro />
        <DownloadResults />
      </Flex>
      <SurveyOverview
        startDate={data["survey-start-date"]}
        endDate={data["survey-end-date"]}
        totalResponses={data["total-number-responses"]}
        totalDistance={data["total-distance"]}
        totalEmissions={data["total-co2-emissions-tonnes"]}
        totalTripCount={data["total-trip-count"]}
      />
      <Flex
        border="2px solid red"
        width="100%"
        p="20px"
        mt="20px"
        direction="column"
      >
        Distance, Trip count, Emission stats
        <Img
          border="2px solid grey"
          src="https://user-images.githubusercontent.com/88268603/169676707-89578bf8-47cf-4dc7-9068-81e9ada36700.png"
        />
      </Flex>
      <TripCountAndTravelMethods />
      <WorkArrangement />
      <Flex
        border="2px solid red"
        width="100%"
        p="20px"
        mt="20px"
        direction="column"
      >
        Travelling to Work Days Graph
        <Img
          border="2px solid grey"
          src="https://user-images.githubusercontent.com/88268603/174800487-1cc45b50-4916-47cb-8bc2-2ca64bba70eb.png"
        />
      </Flex>
      <Flex
        border="2px solid red"
        width="100%"
        p="20px"
        mt="20px"
        direction="column"
      >
        Stats in bar chart
        <Img
          border="2px solid grey"
          src="https://user-images.githubusercontent.com/88268603/169676922-d49f9f34-02e8-48d7-972a-4e110fdf4e01.png"
        />
      </Flex>
      <Flex
        border="2px solid red"
        width="100%"
        p="20px"
        mt="20px"
        direction="column"
      >
        Summary plus stats in horizontal bar chart
        <Img
          border="2px solid grey"
          src="https://user-images.githubusercontent.com/88268603/174800361-a529ca2e-b257-489b-b8b8-4fa4e2a59b90.png"
        />
      </Flex>
      <Flex
        border="2px solid red"
        width="100%"
        p="20px"
        mt="20px"
        direction="column"
      >
        Transport type usage during work week
        <Img
          border="2px solid grey"
          src="https://user-images.githubusercontent.com/88268603/174800762-b58ec331-79f7-4672-8685-83e49ea91877.png"
        />
      </Flex>
      <Flex
        border="2px solid red"
        width="100%"
        p="20px"
        mt="20px"
        direction="column"
      >
        Transport type preference during work week
        <Img
          border="2px solid grey"
          src="https://user-images.githubusercontent.com/88268603/174800922-8b09ebb9-f5b6-4b61-a396-50df26fc3229.png"
        />
      </Flex>
    </Layout>
  );
}
