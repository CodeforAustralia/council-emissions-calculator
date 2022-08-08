import { Text, Flex, Box } from "@chakra-ui/react";
// import WalkingMan from "../../../public/images/survey-intro-icons/walking-man.svg";
// import Car from "../../../public/images/survey-intro-icons/car.svg";
// import Carpool from "../../../public/images/survey-intro-icons/carpool.svg";
// import Motorcycle from "../../../public/images/survey-intro-icons/motorcycle.svg";
// import Train from "../../../public/images/survey-intro-icons/train.svg";
import TravelModes from "./TravelModes";
import DistanceTravelledModeChart from "./DistanceTravelledModeChart";

import { ResultsHeader3 } from "../SharedComponents/ResultsHeaders";
import { RightPaddedContent } from "../SharedComponents/ContentLayouts";

export default function DistanceTravelledMode({ data }) {
  return (
    <RightPaddedContent>
      <Flex direction="column">
        <ResultsHeader3>Distance travelled by mode of transport</ResultsHeader3>
        <Text fontSize="20px">
          This graph(butterfly plot) help us compare the travel modes(individual
          Vs.active/active/public/share)preferred by staff within various
          commute distances.
        </Text>
      </Flex>

      <TravelModes />

      <Text py="1rem">
        Please use the legend for the breakdowns of the two travel modes we are
        comparing in the graph below.
      </Text>
      {/* chart  */}
      <Flex justify="center">
        <Flex direction="column" width={["484px", "804px"]} height="484px">
          <Flex
            background="rgba(221, 221, 229, 0.1)"
            border="0.613005px  #DDDDE5"
            boxShadow="0px 0px 22.5px rgba(35, 47, 78, 0.18)"
            borderRadius="10px 10px 10px 10px"
            py="5px"
            height="484px"
            align="center"
            mb="26px"
            justify="center"
          >
            <DistanceTravelledModeChart data={data} />
          </Flex>
        </Flex>
      </Flex>
    </RightPaddedContent>
  );
}
