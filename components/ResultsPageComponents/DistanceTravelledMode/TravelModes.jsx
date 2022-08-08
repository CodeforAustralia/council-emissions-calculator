import { Box, Flex, Text } from "@chakra-ui/react";
import Car from "../../../public/images/survey-intro-icons/car.svg";
import WalkingMan from "../../../public/images/survey-intro-icons/walking-man.svg";
import Carpool from "../../../public/images/survey-intro-icons/carpool.svg";
import Motorcycle from "../../../public/images/survey-intro-icons/motorcycle.svg";
import Train from "../../../public/images/survey-intro-icons/train.svg";

function SquareBullet({ boxColour }) {
  return (
    <Box
      mt="12px"
      mr="5px"
      borderRadius="2px solid #E6EEF3"
      width="17px"
      height="13px"
      background={boxColour}
    ></Box>
  );
}

function TravelModeIcon(props) {
  const { children, text } = props;
  return (
    <Flex direction="column" width="100px" align="center">
      <Flex justify="center" align="center" width="40px" height="30px">
        {children}
      </Flex>
      <Text color="#044B7F">{text}</Text>
    </Flex>
  );
}

export default function TravelModes() {
  /* CONTAINER FOR INDIVIDUAL METHOD AND ACTIVE/PUBLIC/SHARED/METHOD   */

  return (
    <Flex direction={["column", "row"]} width="100%">
      <Flex
        direction="column"
        width={["100%", "50%"]}
        align={["left", "center"]}
      >
        {/* row for the sub title */}
        <Flex direction="row">
          <SquareBullet boxColour="#D69E2E" />

          <Text fontWeight={600} fontSize="23px">
            Individual Method
          </Text>
        </Flex>

        <Flex direction="row">
          <TravelModeIcon text="Car">
            <Car />
          </TravelModeIcon>
          <TravelModeIcon text="Motorbike">
            <Motorcycle />
          </TravelModeIcon>
        </Flex>
      </Flex>
      {/*Active,Public/Shared/Method right column */}

      <Flex direction="column" width={["100%", "50%"]}>
        <Flex direction="row">
          <SquareBullet boxColour="#044B7F" />

          <Text fontWeight="600" fontSize="23px">
            Active/Public/Shared Method
          </Text>
        </Flex>
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
  );
}
