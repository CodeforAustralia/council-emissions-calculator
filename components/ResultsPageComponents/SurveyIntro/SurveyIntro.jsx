import { Text, Flex } from "@chakra-ui/react";
import WalkingMan from "../../../public/images/survey-intro-icons/walking-man.svg";
import Car from "../../../public/images/survey-intro-icons/car.svg";
import Carpool from "../../../public/images/survey-intro-icons/carpool.svg";
import Motorcycle from "../../../public/images/survey-intro-icons/motorcycle.svg";
import Train from "../../../public/images/survey-intro-icons/Train.svg";

export default function SurveyIntro() {
  return (
    <Flex
      minWidth="350px"
      maxWidth="1100px"
      alignSelf={["center", "start"]}
      flex={[1, 2]}
      direction="column"
      gap={["10px", "20px"]}
    >
      <Flex direction="column">
        <Text fontSize={["30px", "50px"]}>Work Commute Survey Results</Text>
        <Text fontSize="20px">
          The results page provides the outcome from our recent survey. We have
          recently embarked on our 2026 challenge. We aim to increase the use of
          Active, Public and Shared commute methods to 20% or more. Currently,
          we are on our way to meeting the 2026 challenge. With our collective
          effort, we can improve our impact on the environment.
        </Text>
      </Flex>
      <Flex direction="column">
        <Text fontWeight={600} fontSize="27px">
          Things to note before reading the results
        </Text>
        <Text fontSize="19px">
          Travel methods have been grouped into <b>Active-Public-Shared</b>{" "}
          methods and <b>Individual</b> methods:{" "}
        </Text>
      </Flex>
      <Flex direction="column" gap="10px">
        <Flex
          gap="30px"
          direction={["column", "row"]}
          justify={["center", "space-between"]}
          align="center"
        >
          <Flex direction="column">
            <Text fontWeight={600} color="#022640" fontSize="22px">
              Active/Public/Shared Methods:
            </Text>
            <Text color="#03385F">
              Lower carbon emission per kilometre travel per person
            </Text>
          </Flex>
          <Flex gap="30px">
            <Flex direction="column" width="100px" align="center">
              <Flex
                justify="center"
                align="center"
                width="95px"
                height="95px"
                background="#E6EEF3"
                boxShadow="0px 1px 30px rgba(230, 238, 243, 0.99)"
                borderRadius="50%"
              >
                <WalkingMan />
              </Flex>
              <Text textAlign="center" width="80px" color="#044B7F">
                Walk/Run/Cycle
              </Text>
            </Flex>
            <Flex direction="column" width="100px" align="center">
              <Flex
                justify="center"
                align="center"
                width="95px"
                height="95px"
                background="#E6EEF3"
                boxShadow="0px 1px 30px rgba(230, 238, 243, 0.99)"
                borderRadius="50%"
              >
                <Train />
              </Flex>
              <Text color="#044B7F">Bus/Train</Text>
            </Flex>
            <Flex direction="column" width="100px" align="center">
              <Flex
                justify="center"
                align="center"
                width="95px"
                height="95px"
                background="#E6EEF3"
                boxShadow="0px 1px 30px rgba(230, 238, 243, 0.99)"
                borderRadius="50%"
              >
                <Carpool />
              </Flex>
              <Text color="#044B7F">Taxi/Carpool</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction={["column", "row"]}
          justify={["center", "space-between"]}
          align="center"
        >
          <Flex direction="column">
            <Text fontWeight={600} color="#022640" fontSize="22px">
              Individual Methods:
            </Text>
            <Text color="#03385F">
              Higher carbon emission per kilometre travel per person.
            </Text>
          </Flex>
          <Flex gap="30px">
            <Flex direction="column" width="100px" align="center">
              <Flex
                justify="center"
                align="center"
                width="95px"
                height="95px"
                background="rgba(214, 158, 46, 0.36)"
                boxShadow="0px 1px 30px rgba(214, 158, 46, 0.25)"
                borderRadius="50%"
              >
                <Car />
              </Flex>
              <Text color="#044B7F">Car</Text>
            </Flex>
            <Flex direction="column" width="100px" align="center">
              <Flex
                justify="center"
                align="center"
                width="95px"
                height="95px"
                background="rgba(214, 158, 46, 0.36)"
                boxShadow="0px 1px 30px rgba(214, 158, 46, 0.25)"
                borderRadius="50%"
              >
                <Motorcycle />
              </Flex>
              <Text color="#044B7F">Motorbike</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
