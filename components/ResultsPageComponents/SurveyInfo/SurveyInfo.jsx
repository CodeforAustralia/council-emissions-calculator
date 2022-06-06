import { Text, Flex, Button, Box } from "@chakra-ui/react";
import Background from "../../../public/images/survey-info-icons/background.svg";
import Calendar from "../../../public/images/survey-info-icons/calendar.svg";
import Cloud from "../../../public/images/survey-info-icons/cloud.svg";
import DottedLine from "../../../public/images/survey-info-icons/dotted-line.svg";
import Path from "../../../public/images/survey-info-icons/path.svg";
import Respondents from "../../../public/images/survey-info-icons/respondents.svg";

export default function SurveyInfo() {
  return (
    <Flex
      direction="column"
      height="220px"
      backgroundImage={`url(${Background}) no-repeat`}
      minWidth="300px"
      width="100%"
      alignSelf={["center","start"]}
    >
      <Flex>
        <Flex flex={1} justify="center">
          <Flex height="90%">
            <Calendar />
          </Flex>
          <Flex direction="column" justify="space-around" paddingX="13px">
            <Text fontSize={["26px","49px"]} color="#03385F" lineHeight={1}>12 - 19</Text>
            <Text fontSize="26px" color="#03385F" lineHeight={1}>April</Text>
          </Flex>
        </Flex>
        <Flex flex={1} justify="center">
          <Flex height="90%">
            <Respondents />
          </Flex>
          <Flex direction="column" justify="space-around" paddingX="13px">
            <Text fontSize={["26px","49px"]} color="#03385F" lineHeight={1}>220</Text>
            <Text fontSize="26px" color="#03385F" lineHeight={1}>Respondents</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Flex flex={1} direction="column" align="center">
          <Flex>
            <Path />
          </Flex>
          <Flex align="center">
            <Flex direction="column" paddingX="13px" marginLeft="40px">
              <Text fontSize="12px" color="#03385F" lineHeight={1} width="70%">Total distance</Text>
              <Text fontSize="18px" color="#03385F" lineHeight={1} minWidth="90px">16,000 km</Text>
            </Flex>
            <DottedLine />
            <Flex direction="column" justify="space-around" paddingX="13px">
              <Text fontSize="12px" color="#03385F" lineHeight={1} width="50%">Average distance per trip</Text>
              <Text fontSize="18px" color="#03385F" lineHeight={1}>18 km</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex={1} direction="column" align="center" justify="space-between" py="50px">
          <Flex>
            <Cloud />
          </Flex>
          <Flex align="center" justify="center" marginLeft="40px">
            <Flex direction="column" paddingX="13px">
              <Text fontSize="12px" color="#03385F" lineHeight={1} width="70%">Total distance</Text>
              <Text fontSize="18px" color="#03385F" lineHeight={1} minWidth="90px">16,000 km</Text>
            </Flex>
            <DottedLine />
            <Flex direction="column" paddingX="13px">
              <Text fontSize="12px" color="#03385F" lineHeight={1} width="50%">Average emission per trip</Text>
              <Text fontSize="18px" color="#03385F" lineHeight={1}>18 km</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex={1} justify="center">test4</Flex>
      </Flex>
    </Flex>
  );
}
