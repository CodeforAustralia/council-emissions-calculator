import { Text, Flex } from "@chakra-ui/react";
import SectionHeader from "../SharedComponents/SectionHeader";
import RightPaddedContent from "../SharedComponents/RightPaddedContent";
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
    <RightPaddedContent>
      <SectionHeader headerName="header2" text="Top Three" />
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
        ))}
      </Flex>
    </RightPaddedContent>
  );
}
