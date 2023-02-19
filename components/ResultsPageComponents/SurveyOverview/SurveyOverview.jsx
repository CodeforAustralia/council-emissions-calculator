import { Text, Flex } from "@chakra-ui/react";
import Background from "../../../public/images/survey-overview-icons/background.svg";
import Calendar from "../../../public/images/survey-overview-icons/calendar.svg";
import Cloud from "../../../public/images/survey-overview-icons/cloud.svg";
import DottedLine from "../../../public/images/survey-overview-icons/dotted-line.svg";
import Path from "../../../public/images/survey-overview-icons/path.svg";
import Respondents from "../../../public/images/survey-overview-icons/respondents.svg";
import { formatCommaSeparators } from "../../../utils/mathUtils";

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

  const avgDistancePerTrip = (
    surveyData.totalDistance / surveyData.totalTrips
  ).toPrecision(2);
  const avgEmissionPerTrip = (
    surveyData.totalEmissions / surveyData.totalTrips
  ).toPrecision(2);

  return (
    <Flex
      direction="column"
      backgroundImage={`url(${Background}) no-repeat`}
      minWidth="350px"
      maxWidth="1100px"
      alignSelf={["center", "start"]}
      px={["32px", "0px"]}
      py={["25px", "50px"]}
    >
      <Text as="h2" fontWeight={600} fontSize="35px">
        Overview
      </Text>
      <Text fontWeight={400} fontSize="20px">
        The Work Commute survey was conducted on 12 to 29 July 2022 and recorded
        responses from 162 people. The results provide a snapshot of how staff
        travel to and from work, in the week before the survey.
        <br />
      </Text>

      <Text fontWeight={400} fontSize="20px">
        <br />
        Respondents commuted a total distance of{" "}
        {formatCommaSeparators(surveyData.totalDistance)} km and produced a
        total trip emission of {surveyData.totalEmissions} t in one week. This
        is roughly enough CO<Text as="sub">2</Text> to fill 13 Olympic sized
        swimming pools. The average distance travelled is {avgDistancePerTrip}{" "}
        km, with an average of {avgEmissionPerTrip * 1000} kg of emissions per
        trip.
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
                {avgDistancePerTrip} km
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
                {avgEmissionPerTrip} t
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
