import { Box, Center, Container, Text, Flex } from "@chakra-ui/react";
import PieChartComponent from "./PieChartComponent";

export default function TripCountAndTravelMethods({ dataAboutTrips }) {
  const activePublicSharedTravel = dataAboutTrips.filter(
    (method) => method.name !== "Car" && method.name !== "Motorbike"
  );
  const individualTravel = dataAboutTrips.filter(
    (method) => method.name === "Car" || method.name === "Motorbike"
  );

  const sharedVsIndividualData = [
    {
      name: "Individual",
      count: individualTravel.reduce((a, b) => a + b.count, 0),
    },
    {
      name: "Active-Public-Shared",
      count: activePublicSharedTravel.reduce((a, b) => a + b.count, 0),
    },
  ];

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
      <Flex direction="column">
        <Text as="h2" fontWeight={600} fontSize="35px" lineHeight="37px" py="15px">
          Trip count and Travel Methods
        </Text>
        <Text fontSize="19px" py="15px">
          The three graphs below helps us understand how staff commute to work.
          The ‘Trip Count’ graph shows the total number of trips. The other
          graphs break this down into the various transport types.
        </Text>
      </Flex>
      <Flex justify="start">
        <Box maxWidth="1100px">
          <Flex
            direction="row"
            wrap="wrap"
            justify="start"
            gap="15px"
            py="15px"
          >
            <PieChartComponent
              title="Trip Count"
              data={sharedVsIndividualData}
              colorList={["#044B7F", "#D69E2E"]}
            />
            <Flex>
              <Flex
                direction="column"
                gap="15px"
              >
                <PieChartComponent
                  title="Active-public-shared travel"
                  data={activePublicSharedTravel}
                  colorList={[
                    "#044B7F",
                    "#9BB7CC",
                    "#366F99",
                    "",
                    "#6893B2",
                    "#E6EEF3",
                  ]}
                />
                <PieChartComponent
                  title="Individual travel"
                  data={individualTravel}
                  colorList={["#9BB7CC", "#044B7F"]}
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
