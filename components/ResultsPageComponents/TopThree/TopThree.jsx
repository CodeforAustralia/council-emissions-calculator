import { Text, Flex } from "@chakra-ui/react";
import TopThreeBarChart from "./TopThreeBarChart";
import Line from "../../../public/images/TopThree/topThreeLine.svg";
import Dot from "../../../public/images/TopThree/topThreeDot.svg";

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
      alignSelf={["center", "start"]}
      align={["center", "flex-start"]}
      gap={["10px", "20px"]}
      px={["5px", "50px"]}
      py={["25px", "50px"]}
      justify="center"
    >
      <Flex direction="column">
        <Text as="h2" fontWeight={600} fontSize="33px" lineHeight="37px" py="15px">
          Top Three Travel Methods
        </Text>
        <Text fontSize="19px" py="15px">
          The following three charts illustrates the top three travel methods by
          Distance, Trip Count and Emissions.
        </Text>
        <Flex direction={["column", "row"]} gap="20px" flexWrap="wrap">
          {Object.keys(topThree).map((item, ind) => (
            <Flex direction="column" align="center" key={ind}>
              <Flex
                gap={["20px", "20px"]}
                justify="center"
                key={ind}
                background="rgba(221, 221, 229, 0.1)"
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
    </Flex>
  );
}
