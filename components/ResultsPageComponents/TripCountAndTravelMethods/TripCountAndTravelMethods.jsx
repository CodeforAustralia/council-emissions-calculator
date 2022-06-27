import { Text, Flex } from "@chakra-ui/react";
import PieChart from "./PieChart";

export default function TripCountAndTravelMethods() {

  const dataAboutTrips = [
    { 
      name: "Bicycle",
      count: 5 
    },
    { 
      name: "Bus",
      count: 6 
    },
    { 
      name: "Carpool",
      count: 8 
    },
    { 
      name: "Motorbike",
      count: 15 
    },
    { 
      name: "Taxi/Share",
      count: 145 
    },
    { 
      name: "Car",
      count: 12 
    },
    { 
      name: "Walk/Run",
      count: 14 
    },
    { 
      name: "Train/tram",
      count: 149
    }
  ]

  const activePublicSharedTravel = dataAboutTrips.filter(method => method.name !== "Car" && method.name !== "Motorbike");
  const IndividualTravel = dataAboutTrips.filter(method => method.name === "Car" || method.name === "Motorbike");

  const sharedVsIndividualData = [
    { name: "Individual",
      count: IndividualTravel.reduce((a, b) => a + b.count, 0)
    },
    { name: "Active-Public-Shared",
      count: dataAboutTrips.reduce((a, b) => a + b.count, 0)
    }
  ]

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
          Trip count and Travel Methods
        </Text>
        <Text fontSize="19px" py="15px">
          The three donut graphs below help us to understand how we commute to work. The graph on the left ‘Trip Count’ determines the total trip counts and the breakdown by individual and Active-Public-shared travel methods. The two graphs on the right Active-Public-shared travel and Individual travel show us the total trips for each travel method and their breakdown by mode.  
        </Text>
        <Flex direction={["column", "row"]} align="center" gap="15px" py="15px">
          <Flex width={["90%", "50%"]} boxShadow="0px 0px 36px rgba(35, 47, 78, 0.14)" borderRadius="20px" border="1px solid #DDDDE5" align="center">
            <PieChart title="Trip Count" data={sharedVsIndividualData} />
          </Flex>
          <Flex direction="column" width={["90%", "50%"]} gap="15px">
            <Flex borderRadius="0px 15px 0px 0px" boxShadow="0px 0px 28px rgba(35, 47, 78, 0.14)" border="1px solid #DDDDE5">
              <PieChart title="Active-public-shared travel" data={activePublicSharedTravel} />
            </Flex>
            <Flex borderRadius="0px 0px 15px 0px" boxShadow="0px 0px 28px rgba(35, 47, 78, 0.14)" border="1px solid #DDDDE5">
              <PieChart title="Individual travel" data={IndividualTravel} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
