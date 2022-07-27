import { Text, Flex } from "@chakra-ui/react";
import CommuteDistanceDistributionChart from "./CommuteDistanceDistributionChart";

export default function CommuteDistanceDistribution({ data }) {
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
          Distribution of commute distance
        </Text>
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
    </Flex>
  );
}
