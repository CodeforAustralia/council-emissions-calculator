import { Text, Flex, Button, Box } from "@chakra-ui/react";
import Background from "../../../public/images/survey-overview-icons/background.svg";
import Calendar from "../../../public/images/survey-overview-icons/calendar.svg";
import Cloud from "../../../public/images/survey-overview-icons/cloud.svg";
import DottedLine from "../../../public/images/survey-overview-icons/dotted-line.svg";
import Path from "../../../public/images/survey-overview-icons/path.svg";
import Respondents from "../../../public/images/survey-overview-icons/respondents.svg";

const getMonthName = (month) => {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "";
  }
};

export default function SurveyOverview({
  startDate = "",
  endDate = "",
  totalResponses = "",
  totalDistance = 0,
  totalEmissions = 0,
  totalTripCount = 0,
}) {
  const surveyData = {
    startDate: new Date(startDate).getDate() || "",
    endDate: new Date(endDate).getDate() || "",
    numResponses: totalResponses,
    totalDistance: totalDistance,
    totalEmissions: totalEmissions,
    totalTrips: totalTripCount,
  };
  console.log(`results: ${JSON.stringify(surveyData)}`);

  return (
    <Flex
      direction="column"
      backgroundImage={`url(${Background}) no-repeat`}
      minWidth="300px"
      width="75%"
      alignSelf={["center", "start"]}
      m="50px"
    >
      <Text fontWeight={600} fontSize="35px">
        Overview
      </Text>
      <Text fontWeight={400} fontSize="20px">
        This section includes the survey’s snapshot dates, the total number of
        survey particpants, the total distance travel, the average distance per
        trip, the total emissions and the average emissions per trip. This
        information forms the baseline data and provide a brief overview into
        the result page.
      </Text>
      <Flex
        borderBottom={["none", "1px solid #D69E2E"]}
        flexWrap="wrap"
        mt={["10px", "50px"]}
      >
        <Flex
          flex={1}
          justify="center"
          borderRight={["none", "1px solid #D69E2E"]}
          py={["20px", "50px"]}
        >
          <Flex height="90%">
            <Calendar />
          </Flex>
          <Flex direction="column" justify="space-around" paddingX="13px">
            <Text fontSize={["26px", "49px"]} color="#03385F" lineHeight={1}>
              {surveyData.startDate} - {surveyData.endDate}
            </Text>
            <Text fontSize="26px" color="#03385F" lineHeight={1}>
              {getMonthName(new Date(startDate).getMonth())}
            </Text>
          </Flex>
        </Flex>
        <Flex flex={1} justify="center" py={["20px", "50px"]}>
          <Flex height="90%">
            <Respondents />
          </Flex>
          <Flex direction="column" justify="space-around" paddingX="13px">
            <Text fontSize={["26px", "49px"]} color="#03385F" lineHeight={1}>
              {surveyData.numResponses}
            </Text>
            <Text fontSize="26px" color="#03385F" lineHeight={1}>
              Respondents
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexWrap="wrap">
        <Flex
          flex={1}
          direction="column"
          align="center"
          justify="space-between"
          borderRight={["none", "1px solid #D69E2E"]}
          py={["10px", "50px"]}
        >
          <Flex>
            <Path />
          </Flex>
          <Flex align="center">
            <Flex direction="column" paddingX="13px" marginLeft={[0, "40px"]}>
              <Text fontSize="12px" color="#03385F" lineHeight={1} width="70%">
                Total distance
              </Text>
              <Text
                fontSize="18px"
                color="#03385F"
                lineHeight={1}
                minWidth="90px"
              >
                {surveyData.totalDistance} km
              </Text>
            </Flex>
            <DottedLine />
            <Flex direction="column" justify="space-around" paddingX="13px">
              <Text fontSize="12px" color="#03385F" lineHeight={1} width="50%">
                Average distance per trip
              </Text>
              <Text fontSize="18px" color="#03385F" lineHeight={1}>
                {surveyData.totalDistance / surveyData.totalTrips} km
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flex={1}
          direction="column"
          align="center"
          justify="space-between"
          py={["10px", "50px"]}
        >
          <Flex>
            <Cloud />
          </Flex>
          <Flex align="center" justify="center" marginLeft={[0, "40px"]}>
            <Flex direction="column" paddingX="13px">
              <Text fontSize="12px" color="#03385F" lineHeight={1} width="70%">
                Total emissions
              </Text>
              <Text
                fontSize="18px"
                color="#03385F"
                lineHeight={1}
                minWidth="90px"
              >
                {surveyData.totalEmissions} t
              </Text>
            </Flex>
            <DottedLine />
            <Flex direction="column" paddingX="13px">
              <Text fontSize="12px" color="#03385F" lineHeight={1} width="50%">
                Average emissions per trip
              </Text>
              <Text fontSize="18px" color="#03385F" lineHeight={1}>
                {surveyData.totalEmissions / surveyData.totalTrips} t
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
