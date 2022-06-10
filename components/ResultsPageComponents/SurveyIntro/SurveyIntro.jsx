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
    >
      Test
      <WalkingMan />
      <Car />
      <Carpool />
      <Motorcycle />
      <Train />
    </Flex>
  );
}
