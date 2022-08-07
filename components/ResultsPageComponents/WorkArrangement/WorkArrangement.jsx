import { Text, Flex } from "@chakra-ui/react";
import Traveler from "../../../public/images/work-arrangement-results-icons/traveler.svg";
import Line from "../../../public/images/work-arrangement-results-icons/l-shape-line.svg";
import { ResultsHeader2 } from "../SharedComponents/ResultsHeaders";
import { RightPaddedContent } from "../SharedComponents/ContentLayouts";

export default function WorkArrangement({ workMode }) {
  const surveyData = {
    "On-site": workMode.onsite || "",
    WFH: workMode.wfh || "",
    Hybrid: workMode.hybrid || "",
  };

  const maxCountWorkMode = Object.entries(surveyData).reduce((a, b) =>
    a[1] > b[1] ? a : b
  );
  const minCountWorkMode = Object.entries(surveyData).reduce((a, b) =>
    a[1] < b[1] ? a : b
  );
  const mediumCountWorkMode = Object.entries(surveyData).sort(
    (a, b) => b[1] - a[1]
  )[1];

  return (
    <RightPaddedContent flex={[1, 2]}>
      <Flex direction="column">
        <ResultsHeader2>Work Arrangement</ResultsHeader2>
        <Text fontSize="19px" py="15px">
          The infographics below illustrate responders’ working arrangement
          across the week. This information helps identify the percentage of
          staff commuting to work in regular (on-site) and intermittent (hybrid)
          patterns.
        </Text>
        <Flex direction={["column", "row"]} align={["center", "flex-end"]}>
          <Flex width="30%" direction="column" py="20px">
            <Flex justify="flex-end">
              <Line maxwidth="150px" />
              <Flex direction="column">
                <Text
                  fontWeight={500}
                  fontSize="36px"
                  lineHeight="23px"
                  color="#D69E2E"
                >
                  {maxCountWorkMode[1]}%
                </Text>
                <Text fontWeight={200} fontSize="24px" color="#044B7F">
                  {maxCountWorkMode[0]}
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
              <Line maxwidth="150px" />
              <Flex direction="column">
                <Text
                  fontWeight={500}
                  fontSize="36px"
                  lineHeight="23px"
                  color="#D69E2E"
                >
                  {mediumCountWorkMode[1]}%
                </Text>
                <Text
                  fontWeight={100}
                  fontSize="24px"
                  color="#044B7F"
                  whiteSpace="nowrap"
                >
                  {mediumCountWorkMode[0]}
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
              <Line maxwidth="150px" />
              <Flex direction="column">
                <Text
                  fontWeight={500}
                  fontSize="36px"
                  lineHeight="23px"
                  color="#D69E2E"
                >
                  {minCountWorkMode[1]}%
                </Text>
                <Text fontWeight={100} fontSize="24px" color="#044B7F">
                  {minCountWorkMode[0]}
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
    </RightPaddedContent>
  );
}
