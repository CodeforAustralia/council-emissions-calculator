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
        <Flex direction={["column", "row"]} align="center">
          <Flex>
            <TripCount />
          </Flex>
          <Flex direction="column" width="50%">
            <Flex>Small top chart</Flex>
            <Flex>Small bottom chart</Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
