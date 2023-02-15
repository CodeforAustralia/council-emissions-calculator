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
      <Flex direction="column" width="100%">
        <Text
          as="h2"
          fontWeight={600}
          fontSize="33px"
          lineHeight="37px"
          py="15px"
        >
          Distribution of commute distance
        </Text>
        <Text fontSize="19px" py="15px" width="100%">
          The graph below shows a rough distribution of staff according to the
          length of their commutes. This information is useful to understand the
          distances staff travel to work, and how they are distributed along
          those distances.
        </Text>
        <Flex
          boxShadow="0px 0px 22.5px rgba(35, 47, 78, 0.18)"
          maxWidth="634px"
          mt="20px"
        >
          <CommuteDistanceDistributionChart
            title="Distribution of commute distances"
            data={data["commute-distance-distribution"]}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
