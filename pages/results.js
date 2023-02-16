import path from "path";
import { Flex, Img } from "@chakra-ui/react";
import React from "react";
import useForm from "../components/FormProvider";
import Layout from "../components/Layout/Layout";
import fsPromises from "fs/promises";

import DownloadResults from "../components/ResultsPageComponents/DownloadResults/DownloadResults";
import SurveyOverview from "../components/ResultsPageComponents/SurveyOverview/SurveyOverview";
import SurveyIntro from "../components/ResultsPageComponents/SurveyIntro/SurveyIntro";
import TripCountAndTravelMethods from "../components/ResultsPageComponents/TripCountAndTravelMethods/TripCountAndTravelMethods";
import TopThree from "../components/ResultsPageComponents/TopThree/TopThree";
import DistanceTravelledMode from "../components/ResultsPageComponents/DistanceTravelledMode/DistanceTravelledMode";
import WorkArrangement from "../components/ResultsPageComponents/WorkArrangement/WorkArrangement";
import CommuteDays from "../components/ResultsPageComponents/CommuteDays/CommuteDays";
import CommuteDistanceDistribution from "../components/ResultsPageComponents/CommuteDistanceDistribution/CommuteDistanceDistribution";
import ResultContentSection from "../components/ResultsPageComponents/SharedComponents/ResultContentSection";
import StaffSuggestions from "../components/ResultsPageComponents/StaffSuggestions/StaffSuggestions";

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
      <ResultContentSection isShaded={false}>
        <Flex
          px={["5px", "50px"]}
          width="100%"
          gap={["40px", "90px"]}
          wrap="wrap"
          direction={["column", "row"]}
          justify={["center", "left"]}
          align={["center", "flex-start"]}
        >
          <SurveyIntro />
          <DownloadResults calculationLink="/howWeCalculate" />
        </Flex>
        <SurveyOverview
          startDate={data["survey-start-date"]}
          endDate={data["survey-end-date"]}
          totalResponses={data["total-number-responses"]}
          totalDistance={data["total-distance"]}
          totalEmissions={data["total-co2-emissions-tonnes"]}
          totalTripCount={data["total-trip-count"]}
        />
      </ResultContentSection>
      <ResultContentSection>
        <TopThree
          topThree={data["TopThreeData"]}
          totalDistance={data["total-distance"]}
          totalTripCount={data["total-trip-count"]}
          totalEmissions={data["total-co2-emissions-tonnes"]}
        />

        <TripCountAndTravelMethods dataAboutTrips={data["dataAboutTrips"]} />
      </ResultContentSection>
      <ResultContentSection isShaded={false}>
        <WorkArrangement workMode={data["work-mode"]} />
        <CommuteDays data={data} />
      </ResultContentSection>
      <ResultContentSection isShaded={false}>
        <CommuteDistanceDistribution data={data} />
      </ResultContentSection>
      <ResultContentSection isShaded={true}>
        <DistanceTravelledMode data={data["distance-travelled-by-mode"]} />
      </ResultContentSection>
      <ResultContentSection isShaded={false}>
        <StaffSuggestions />
      </ResultContentSection>
    </Layout>
  );
}
