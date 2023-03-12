import { Text, Flex } from "@chakra-ui/react";
import StaffSuggestionsChart from "./StaffSuggestionsChart";

export default function StaffSuggestions() {
  return (
    <Flex
      minWidth="350px"
      maxWidth="1100px"
      alignSelf={["center", "start"]}
      align={["center", "flex-start"]}
      flex={[1, 2]}
      direction="column"
      gap={["10px", "20px"]}
      px={["32px", "0px"]}
      py={["25px", "50px"]}
      justify="center"
    >
      <Text
        as="h2"
        fontWeight={600}
        fontSize="35px"
        lineHeight="37px"
        py="15px"
      >
        Staff Suggestions
      </Text>
      <Text fontSize="19px" py="15px">
        Participants were provided with an option to suggest ways that Council
        can support and incentivise staff to choose more sustainable modes of
        transport to and from work.
      </Text>
      <Text fontSize="19px" py="15px">
        These numbers show the percentage of all people in the survey who
        suggested this improvement. Some people are in more than one category,
        and some people didn’t have any suggestions - that’s why the numbers
        don’t add up to 100%. A stand out in the responses is the suggestions to
        improving Cycling/Walking infrastructure, increase Public Transit and
        End-of-Trip facilities at workplace.
      </Text>

      <Flex width={["350px", "100%"]} wrap="wrap" overflowX="auto">
        <StaffSuggestionsChart />
      </Flex>
    </Flex>
  );
}
