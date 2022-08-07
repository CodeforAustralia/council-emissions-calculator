import { Text, Flex } from "@chakra-ui/react";
import CommuteDistanceDistributionChart from "./CommuteDistanceDistributionChart";
import { ResultsHeader3 } from "../SharedComponents/ResultsHeaders";
import { RightPaddedContent } from "../SharedComponents/ContentLayouts";

export default function CommuteDistanceDistribution({ data }) {
  return (
    <RightPaddedContent flex={[1, 2]}>
      <Flex direction="column">
        <ResultsHeader3>Distribution of commute distance</ResultsHeader3>
        <Text fontSize="19px" py="15px">
          This graph (histogram) helps us determine the percentagesof staff that
          travel from within 5, 10, 15, 20, 25 and 30Km+ radius from work. This
          information is useful to understand the distance staff travel to work,
          and how they are distributed along those distances.
        </Text>
        <CommuteDistanceDistributionChart
          title="Distribution of commute distances"
          data={data["commute-distance-distribution"]}
        />
      </Flex>
    </RightPaddedContent>
  );
}
