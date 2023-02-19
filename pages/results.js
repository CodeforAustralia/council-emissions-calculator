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
          width="100%"
          gap={["40px", "90px"]}
          wrap="wrap"
          justify={["center", "left"]}
          align={["center", "flex-start"]}
        >
          <SurveyIntro />
          <DownloadResults calculationLink="/howWeCalculate" />
        </Flex>
        <Flex
          width="100%"
          gap={["40px", "90px"]}
          wrap="wrap"
          justify={["center", "left"]}
          align={["center", "flex-start"]}
        >
          <SurveyOverview
            startDate={data["survey-start-date"]}
            endDate={data["survey-end-date"]}
            totalResponses={data["total-number-responses"]}
            totalDistance={data["total-distance"]}
            totalEmissions={data["total-co2-emissions-tonnes"]}
            totalTripCount={data["total-trip-count"]}
          />
        </Flex>
      </ResultContentSection>
      <ResultContentSection>
        <Flex
          width="100%"
          gap={["40px", "90px"]}
          wrap="wrap"
          justify={["center", "left"]}
          align={["center", "flex-start"]}
        >
          <TopThree
            topThree={data["TopThreeData"]}
            totalDistance={data["total-distance"]}
            totalTripCount={data["total-trip-count"]}
            totalEmissions={data["total-co2-emissions-tonnes"]}
          />
        </Flex>
        <Flex
          width="100%"
          gap={["40px", "90px"]}
          wrap="wrap"
          justify={["center", "left"]}
          align={["center", "flex-start"]}
        >
          <TripCountAndTravelMethods dataAboutTrips={data["dataAboutTrips"]} />
        </Flex>
      </ResultContentSection>
      <ResultContentSection isShaded={false}>
        <Flex
          width="100%"
          gap={["40px", "90px"]}
          wrap="wrap"
          justify={["center", "left"]}
          align={["center", "flex-start"]}
        >
          <WorkArrangement workMode={data["work-mode"]} />
        </Flex>
        <Flex
          width="100%"
          gap={["40px", "90px"]}
          wrap="wrap"
          justify={["center", "left"]}
          align={["center", "flex-start"]}
        >
          <CommuteDays data={data} />
        </Flex>
      </ResultContentSection>
      <ResultContentSection isShaded={true}>
        <Flex
          width="100%"
          gap={["40px", "90px"]}
          wrap="wrap"
          justify={["center", "left"]}
          align={["center", "flex-start"]}
        >
          <CommuteDistanceDistribution data={data} />
        </Flex>
        <Flex
          width="100%"
          gap={["40px", "90px"]}
          wrap="wrap"
          justify={["center", "left"]}
          align={["center", "flex-start"]}
        >
          <DistanceTravelledMode data={data["distance-travelled-by-mode"]} />
        </Flex>
      </ResultContentSection>
      <ResultContentSection isShaded={false}>
        <StaffSuggestions />
      </ResultContentSection>
    </Layout>
  );
}
