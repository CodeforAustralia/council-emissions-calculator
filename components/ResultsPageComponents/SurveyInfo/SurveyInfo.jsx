import { Text, Flex, Button, Box } from "@chakra-ui/react";

export default function SurveyInfo() {
  return (
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
            <Flex direction="column" justify="space-around" paddingX="13px">
              <Text fontSize="12px" color="#03385F" lineHeight={1}>Total distance</Text>
              <Text fontSize="18px" color="#03385F" lineHeight={1}>16,000 km</Text>
            </Flex>
            <DottedLine />
            <Flex direction="column" justify="space-around" paddingX="13px">
              <Text fontSize="12px" color="#03385F" lineHeight={1}>Av dis per trip</Text>
              <Text fontSize="18px" color="#03385F" lineHeight={1}>18 km</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex={1} justify="center">test4</Flex>
      </Flex>
    </Flex>
  );
}
