import { Box, Center, Text, Flex } from "@chakra-ui/react";
import PieChartComponent from "./PieChartComponent";

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
    <Flex
      minWidth="350px"
      maxWidth="1500px"
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
          Trip count and Travel Methods
        </Text>
        <Text fontSize="19px" py="15px">
          The three donut graphs below help us to understand how we commute to
          work. The graph on the left ‘Trip Count’ determines the total trip
          counts and the breakdown by individual and Active-Public-shared travel
          methods. The two graphs on the right Active-Public-shared travel and
          Individual travel show us the total trips for each travel method and
          their breakdown by mode.
        </Text>

        <Center centerContent>
          <Box maxWidth="1500px">
            <Flex
              direction="row"
              wrap="wrap"
              justify="center"
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
        </Center>
      </Flex>
    </Flex>
  );
}
