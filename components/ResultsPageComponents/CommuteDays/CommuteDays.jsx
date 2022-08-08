import { Text, Flex } from "@chakra-ui/react";
import CommuteDaysColumnChart from "./CommuteDaysColumnChart";
import { ResultsHeader3 } from "../SharedComponents/ResultsHeaders";
import { RightPaddedContent } from "../SharedComponents/ContentLayouts";

export default function CommuteDays({ data }) {
  return (
    <RightPaddedContent flex={[1, 2]}>
      <Flex direction="column">
        <ResultsHeader3>Travelling to Work Days</ResultsHeader3>
        <Text border="1px dashed red" fontSize="19px" py="15px">
          The chart below shows the distribution of staff commute days
          throughout the week. It helps us understand travel patterns for onsite
          and hybrid work arrangements. The bar(s) in yellow shows the day(s)
          staff members most often commute to work.
        </Text>
        <CommuteDaysColumnChart
          title="Travel to Work Days"
          data={data["commute-days-distribution"]}
        />
      </Flex>
    </RightPaddedContent>
  );
}
