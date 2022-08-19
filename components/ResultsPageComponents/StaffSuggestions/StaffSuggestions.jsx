import { Text, Flex, Image } from "@chakra-ui/react";
import StaffSuggestionChart from "./StaffSuggestionsChart";

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
      px={["5px", "50px"]}
      py={["25px", "50px"]}
      justify="center"
    >
      <Text fontWeight={600} fontSize="33px" lineHeight="37px" py="15px">
        Staff Suggestions:
      </Text>
      <Text fontSize="19px" py="15px">
        The following graph illustrates the survey participants suggestions on
        what can council do to support and incentivise staff to choose more
        sustainable modes of transport to and from work.
      </Text>
      <Text fontSize="19px" py="15px">
        These numbers show the percentage of all people in the survey who
        suggested this improvement. Some people are in more than one category,
        and some people didn&#39;t have any suggestions - that&#39;s why the
        numbers don&#39;t add up to 100%. A stand out in the responses is the
        suggestions to improving Cycling/Walking infrastructure, increase Public
        Transit and End-of-Trip facilities at workplace.
      </Text>

      {/* <Image src="/images/feedback/feedback.png" alt="feedback" /> */}
      <StaffSuggestionChart />
    </Flex>
  );
}
