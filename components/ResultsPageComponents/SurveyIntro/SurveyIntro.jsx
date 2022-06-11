import { Text, Flex, Button, Box } from "@chakra-ui/react";
import WalkingMan from "../../../public/images/survey-intro-icons/walking-man.svg";
import Car from "../../../public/images/survey-intro-icons/car.svg";
import Carpool from "../../../public/images/survey-intro-icons/carpool.svg";
import Motorcycle from "../../../public/images/survey-intro-icons/motorcycle.svg";
import Train from "../../../public/images/survey-intro-icons/Train.svg";

export default function SurveyIntro() {
  return (
    <Flex
      minWidth="350px"
      alignSelf={["center", "start"]}
      flex={[1, 2]}
      m="50px"
      direction="column"
      gap={["20px", "50px"]}
    >
      <Flex direction="column">
        <Text fontWeight={400} fontSize="50px">Work Commute Survey Results</Text>
        <Text fontWeight={400} fontSize="20px">The results page provides the outcome from our recent survey. We have recently embarked on our 2026 challenge. We aim to increase the use of Active, Public and Shared commute methods to 20% or more. Currently, we are on our way to meeting the 2026 challenge. With our collective effort, we can improve our impact on the environment.</Text>
      </Flex>
      <Flex direction="column">
        <Text fontWeight={600} fontSize="27px">Things to note before reading the results</Text>
        <Text fontWeight={400} fontSize="19px">Travel methods have been grouped into Active-Public-Shared methods and Individual methods: </Text>
      </Flex>
      <Flex>
        <Flex direction="column">
            <Flex direction="column">
              <Text>Active/Public/Shared Methods:</Text>
              <Text>Lower carbon emission per kilometre travel per person</Text>
            </Flex>
            <Flex direction="column">
              <Text>Individual Methods:</Text>
              <Text>Higher carbon emission per kilometre travel per person.</Text>
            </Flex>
        </Flex>
        <Flex flexWrap="wrap">
          <Flex>
            <WalkingMan />
          </Flex>
          <Flex>
            <Car />
          </Flex>
          <Flex>
            <Carpool />
          </Flex>
          <Flex>
            <Motorcycle />
          </Flex>
          <Flex>
            <Train />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
