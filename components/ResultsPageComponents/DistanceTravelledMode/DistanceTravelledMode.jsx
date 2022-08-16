import { Text, Flex, Box } from "@chakra-ui/react";
import WalkingMan from "../../../public/images/survey-intro-icons/walking-man.svg";
import Car from "../../../public/images/survey-intro-icons/car.svg";
import Carpool from "../../../public/images/survey-intro-icons/carpool.svg";
import Motorcycle from "../../../public/images/survey-intro-icons/motorcycle.svg";
import Train from "../../../public/images/survey-intro-icons/train.svg";
import DistanceTravelledModeChart from "./DistanceTravelledModeChart";

function SquareBullet({ boxColour }) {
  return (
    <Box
      mx="10px"
      borderRadius="2px solid #E6EEF3"
      width="17px"
      height="17px"
      background={boxColour}
    ></Box>
  );
}

function TravelModeIcon({ children, text }) {
  return (
    <Flex direction="column" width="105px" align="center">
      <Flex justify="center" align="center" width="40px" height="40px">
        {children}
      </Flex>
      <Text py="5px" color="#044B7F">
        {text}
      </Text>
    </Flex>
  );
}

function TitleBar({ boxColour, text }) {
  return (
    <Flex
      pb="14px"
      direction="row"
      alignItems="center"
      wrap={"wrap"}
      justify="center"
      gap="3px"
    >
      <SquareBullet boxColour={boxColour} />

      <Text fontWeight={600} fontSize="23px" align={"center"} noOfLines={[1]}>
        {text}
      </Text>
    </Flex>
  );
}

export default function DistanceTravelledMode({ data }) {
  return (
    <Flex
      minWidth="350px"
      maxWidth="1100px"
      direction="column"
      gap={["10px", "20px"]}
      px={["10px", "10px"]}
    >
      <Flex direction="column">
        <Text fontSize="27.65px" fontWeight={600}>
          Distance travelled by mode of transport
        </Text>
        <Text fontSize="20px">
          This graph(butterfly plot) help us compare the travel modes(individual
          Vs.active/active/public/share)preferred by staff within various
          commute distances.
        </Text>
      </Flex>

      <Flex
        direction={["column", "row"]}
        width="100%"
        alignItems={"center"}
        justifyContent="center"
        gap={["10px", "20px"]}
      >
        <Flex
          direction="column"
          width={["100%", "250px"]}
          minWidth="230px"
          align="center"
          justify="space-between"
          pt="1rem"
          pb="1.2rem"
        >
          {/* Individual Method - left column */}
          <TitleBar boxColour="#D69E2E" text="Individual Method" />
          <Flex direction="row">
            <TravelModeIcon text="Car">
              <Car />
            </TravelModeIcon>
            <TravelModeIcon text="Motorcycle">
              <Motorcycle />
            </TravelModeIcon>
          </Flex>
        </Flex>
        {/* Active,Public/Shared Method - right column */}
        <Flex
          direction="column"
          width={["100%", "380px"]}
          align="center"
          pt="1rem"
          pb="1.2rem"
        >
          <TitleBar boxColour="#044B7F" text="Active/Public/Shared Method" />
          <Flex direction="row" gap="10px" ml="20px">
            <TravelModeIcon text="Walk/Run/Cycle">
              <WalkingMan />
            </TravelModeIcon>
            <TravelModeIcon text="Bus/Train">
              <Train />
            </TravelModeIcon>
            <TravelModeIcon text="Taxi/Carpool">
              <Carpool />
            </TravelModeIcon>
          </Flex>
        </Flex>
      </Flex>

      <Text>
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
    </Flex>
  );
}
