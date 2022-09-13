import { Text, Flex, Heading } from "@chakra-ui/react";
import WalkingMan from "../../../public/images/survey-intro-icons/walking-man.svg";
import Car from "../../../public/images/survey-intro-icons/car.svg";
import Carpool from "../../../public/images/survey-intro-icons/carpool.svg";
import Motorcycle from "../../../public/images/survey-intro-icons/motorcycle.svg";
import Train from "../../../public/images/survey-intro-icons/train.svg";

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
        <Heading as="h1" fontSize={["30px", "50px"]}>Work Commute Survey Results</Heading>
        <Text fontSize="20px">
          City of Greater Bendigo has recently embarked on a challenge to
          increase the use of active, public, and shared commute methods to 20%
          or more by 2026.
          <br />
        </Text>

        <Text fontSize="20px">
          <br />
          In July 2022, Council conducted a survey to establish a baseline for
          staff commuting habits and associated carbon emissions. This
          information will enable Council to make more targeted decisions in the
          future.
          <br />
          This results page is best viewed on desktop. If viewing on mobile, you
          may have to rotate view and scroll sideways to view full content.
          <br />
        </Text>

        <Text fontSize="20px">
          <br />
          <em>This survey is built by the volunteer team at Civic Makers.</em>
          <br />
          <br />
        </Text>
      </Flex>
      <Flex direction="column">
        <Text fontWeight={600} fontSize="27px">
          Things to note before reading the results
        </Text>
        <Text fontSize="19px">
          Travel methods have been grouped into <b>Active/Public/Shared</b>{" "}
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
              Lower carbon emission per km travelled per person
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
              Higher carbon emission per km travelled per person
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
