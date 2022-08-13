import { Box, Center, Container, Text, Flex } from "@chakra-ui/react";
import PieChartComponent from "./PieChartComponent";
import RightPaddedContent from "../SharedComponents/RightPaddedContent";
import SectionHeader from "../SharedComponents/SectionHeader";

export default function TripCountAndTravelMethods({ dataAboutTrips }) {
  const activePublicSharedTravel = dataAboutTrips.filter(
    (method) => method.name !== "Car" && method.name !== "Motorbike"
  );
  const IndividualTravel = dataAboutTrips.filter(
    (method) => method.name === "Car" || method.name === "Motorbike"
  );

  const sharedVsIndividualData = [
    {
      name: "Individual",
      count: IndividualTravel.reduce((a, b) => a + b.count, 0),
    },
    {
      name: "Active-Public-Shared",
      count: dataAboutTrips.reduce((a, b) => a + b.count, 0),
    },
  ];

  return (
    <RightPaddedContent>
      <SectionHeader
        headerName="header2"
        text="Trip count and Travel Methods"
      />
      <Text fontSize="19px" py="15px">
        The three donut graphs below help us to understand how we commute to
        work. The graph on the left ‘Trip Count’ determines the total trip
        counts and the breakdown by individual and Active-Public-shared travel
        methods. The two graphs on the right Active-Public-shared travel and
        Individual travel show us the total trips for each travel method and
        their breakdown by mode.
      </Text>

      <Flex justify="start">
        <Box maxWidth="1500px">
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
            />

            <Flex>
              <Flex
                direction="column"
                // width={["90%", "50%"]}
                gap="15px"
              >
                <PieChartComponent
                  title="Active-public-shared travel"
                  data={activePublicSharedTravel}
                />

                <PieChartComponent
                  title="Individual travel"
                  data={IndividualTravel}
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </RightPaddedContent>
  );
}
