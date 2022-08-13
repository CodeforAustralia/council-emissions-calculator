import path from "path";
import { Flex, Img } from "@chakra-ui/react";
import React from "react";
import useForm from "../components/FormProvider";
import Layout from "../components/Layout/Layout";
import fsPromises from "fs/promises";

// import DownloadResults from "../components/ResultsPageComponents/DownloadResults/DownloadResults";
import SurveyOverview from "../components/ResultsPageComponents/SurveyOverview/SurveyOverview";
import SurveyIntro from "../components/ResultsPageComponents/SurveyIntro/SurveyIntro";
import TripCountAndTravelMethods from "../components/ResultsPageComponents/TripCountAndTravelMethods/TripCountAndTravelMethods";
import TopThree from "../components/ResultsPageComponents/TopThree/TopThree";
import DistanceTravelledMode from "../components/ResultsPageComponents/DistanceTravelledMode/DistanceTravelledMode";
import WorkArrangement from "../components/ResultsPageComponents/WorkArrangement/WorkArrangement";
import CommuteDays from "../components/ResultsPageComponents/CommuteDays/CommuteDays";
import CommuteDistanceDistribution from "../components/ResultsPageComponents/CommuteDistanceDistribution/CommuteDistanceDistribution";
import ResultContentSection from "../components/ResultsPageComponents/SharedComponents/ResultContentSection";
// import FullWidthContent from "../components/ResultsPageComponents/SharedComponents/FullWidthContent";

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

export default function Results({ data }) {
  const { answers } = useForm();
  const { km, mainTransportMode, department, incentive } = answers;
  return (
    <Layout isText={true} maxContainerWidth="100%">
      {/* Work Commute Survey Results + Overview */}
      <ResultContentSection isShaded={false}>
        <SurveyIntro />
      </ResultContentSection>

      {/* Overview */}
      <ResultContentSection isShaded={false}>
        <SurveyOverview
          startDate={data["survey-start-date"]}
          endDate={data["survey-end-date"]}
          totalResponses={data["total-number-responses"]}
          totalDistance={data["total-distance"]}
          totalEmissions={data["total-co2-emissions-tonnes"]}
          totalTripCount={data["total-trip-count"]}
        />
      </ResultContentSection>

      {/* Top Three + Trip Count & Travel Methods */}
      <ResultContentSection isShaded={true}>
        <TopThree
          topThree={data["TopThreeData"]}
          totalDistance={data["total-distance"]}
          totalTripCount={data["total-trip-count"]}
          totalEmissions={data["total-co2-emissions-tonnes"]}
        />
        <TripCountAndTravelMethods dataAboutTrips={data["dataAboutTrips"]} />
      </ResultContentSection>

      {/* Things to note before reading... + Travelling to Work Days */}
      <ResultContentSection isShaded={false}>
        <WorkArrangement workMode={data["work-mode"]} />
        <CommuteDays data={data} />
      </ResultContentSection>

      {/* Distribution of commute distance + Distance travelled by mode... */}
      <ResultContentSection isShaded={true}>
        <CommuteDistanceDistribution data={data} />
        <DistanceTravelledMode data={data["distance-travelled-by-mode"]} />
      </ResultContentSection>
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
      <Flex width="100%" p="20px" mt="20px" direction="column">
        Transport type preference during work week
        <Img
          border="2px solid grey"
          src="https://user-images.githubusercontent.com/88268603/174800922-8b09ebb9-f5b6-4b61-a396-50df26fc3229.png"
        />
      </Flex>
    </Layout>
  );
}
