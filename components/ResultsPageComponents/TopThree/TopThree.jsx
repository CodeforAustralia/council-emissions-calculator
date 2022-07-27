import { Text, Flex, SimpleGrid, Box, Center } from "@chakra-ui/react";
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
        <Text fontWeight={600} fontSize="33px" lineHeight="37px" py="15px">
          Top Three
        </Text>
        <Flex direction={["column", "row"]} gap="20px" flexWrap="wrap">
          {Object.keys(topThree).map((item, ind) => (
            <>
              <Flex direction="column">
                <Flex
                  key={ind}
                  background="rgba(221, 221, 229, 0.1)"
                  border="0.613005px  #DDDDE5"
                  boxShadow="0px 0px 22.5px rgba(35, 47, 78, 0.14)"
                  borderRadius="5px 0px 0px 0px"
                  py="5px"
                  width={["343px", "343px"]}
                  height="223px"
                >
                  <TopThreeBarChart
                    title={item}
                    data={topThree[item]}
                    totalDistance={totalDistance}
                    totalEmissions={totalEmissions}
                    totalTripCount={totalTripCount}
                  />
                </Flex>
                <Flex align="center" direction="column">
                  <Flex direction="column">
                    <Line
                      maxheight="108px"
                      style={{
                        top: 20,
                        align: "center",
                        mb: "5px",
                      }}
                    />
                    <Flex py="5px">
                      <Dot />
                    </Flex>
                  </Flex>

                  <Flex direction="column">
                    <Text>Top 3 travel methods</Text>
                    <Flex direction="row">
                      <Text>by </Text>

                      <Text px="5px" fontWeight={600}>
                        {item}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
