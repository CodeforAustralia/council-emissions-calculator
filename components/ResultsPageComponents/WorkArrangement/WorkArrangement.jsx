import { Text, Flex } from "@chakra-ui/react";
import Traveler from "../../../public/images/work-arrangement-results-icons/traveler.svg";
import Line from "../../../public/images/work-arrangement-results-icons/l-shape-line.svg";

export default function WorkArrangement() {
  return (
    <Flex
      minWidth="350px"
      maxWidth="1100px"
      alignSelf={["center", "start"]}
      align={["center", "flex-start"]}
      flex={[1, 2]}
      direction="column"
      gap={["10px", "20px"]}
      px={["5px", "50px"]}
      py={["25px", "50px"]}
      justify="center"
    >
      <Flex direction="column">
        <Text fontWeight={600} fontSize="33px" lineHeight="37px" py="15px">
          Things to note before reading the results
        </Text>
        <Text fontSize="19px" py="15px">
          The infographics below illustrate responders’ working arrangement
          across the week. This information helps identify the percentage of
          staff commuting to work in regular (on-site) and intermittent (hybrid)
          patterns.
        </Text>
        <Flex direction={["column", "row"]} align={["center", "flex-end"]}>
          <Flex width="30%" direction="column" py="20px">
            <Flex justify="flex-end">
              <Line maxWidth="150px" />
              <Flex direction="column">
                <Text
                  fontWeight={500}
                  fontSize="36px"
                  lineHeight="23px"
                  color="#D69E2E"
                >
                  42%
                </Text>
                <Text fontWeight={200} fontSize="24px" color="#044B7F">
                  Hybrid
                </Text>
              </Flex>
            </Flex>
            <Flex
              justify="center"
              maxHeight="280px"
              height="100%"
              borderBottom="2.12px solid #D69E2E"
              pb="15px"
            >
              <Traveler />
            </Flex>
          </Flex>
          <Flex width="30%" direction="column" py="20px">
            <Flex justify="flex-end">
              <Line maxWidth="150px" />
              <Flex direction="column">
                <Text
                  fontWeight={500}
                  fontSize="36px"
                  lineHeight="23px"
                  color="#D69E2E"
                >
                  32%
                </Text>
                <Text fontWeight={100} fontSize="24px" color="#044B7F" whiteSpace="nowrap">
                  On-site
                </Text>
              </Flex>
            </Flex>
            <Flex
              justify="center"
              maxHeight="200px"
              height="75%"
              borderBottom="2.12px solid #D69E2E"
              pb="15px"
            >
              <Traveler />
            </Flex>
          </Flex>
          <Flex width="30%" direction="column" py="20px">
            <Flex justify="flex-end">
              <Line maxWidth="150px" />
              <Flex direction="column">
                <Text
                  fontWeight={500}
                  fontSize="36px"
                  lineHeight="23px"
                  color="#D69E2E"
                >
                  26%
                </Text>
                <Text fontWeight={100} fontSize="24px" color="#044B7F">
                  WFH
                </Text>
              </Flex>
            </Flex>
            <Flex
              justify="center"
              maxHeight="160px"
              height="50%"
              borderBottom="2.12px solid #D69E2E"
              pb="15px"
            >
              <Traveler />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
