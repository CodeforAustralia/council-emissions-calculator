import { Text, Flex } from "@chakra-ui/react";
import TopThreeBarChart from "./TopThreeBarChart";

export default function TopThree({
  topThree,
  totalDistance,
  totalEmissions,
  totalTripCount,
}) {
  for (let key in topThree) {
    let arr = topThree[key];
    arr.sort((a, b) => b.count - a.count);
  }

  return (
    <Flex
      direction="column"
      minWidth="350px"
      maxWidth="1100px"
      alignSelf={["center", "start"]}
      py={["25px", "50px"]}
    >
      <Flex
        direction="column"
        px={["32px","0px"]}
      >
        <Text
          as="h2"
          fontWeight={600}
          fontSize="35px"
          lineHeight="37px"
          py="15px"
        >
          Top Three Travel Methods
        </Text>
        <Text fontSize="19px" py="15px">
          The following three charts illustrates the top three travel methods by
          Distance, Trip Count and Emissions.
        </Text>
      </Flex>
      <Flex direction={["column", "row"]} gap="20px" flexWrap="wrap">
        {Object.keys(topThree).map((item, ind) => (
          <Flex direction="column" align="center" key={ind}>
            <Flex
              gap={["20px", "20px"]}
              justify="center"
              key={ind}
              border="0.613005px  #DDDDE5"
              boxShadow="0px 0px 22.5px rgba(35, 47, 78, 0.14)"
              borderRadius="5px 0px 0px 0px"
              py="5px"
              width={["343px", "343px"]}
              height="270px"
            >
              <TopThreeBarChart
                title={item}
                data={topThree[item]}
                totalDistance={totalDistance}
                totalEmissions={totalEmissions}
                totalTripCount={totalTripCount}
              />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
