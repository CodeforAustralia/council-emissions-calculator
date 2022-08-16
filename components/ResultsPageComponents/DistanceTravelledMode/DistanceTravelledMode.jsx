import { Text, Flex, Box } from "@chakra-ui/react";
import WalkingMan from "../../../public/images/survey-intro-icons/walking-man.svg";
import Car from "../../../public/images/survey-intro-icons/car.svg";
import Carpool from "../../../public/images/survey-intro-icons/carpool.svg";
import Motorcycle from "../../../public/images/survey-intro-icons/motorcycle.svg";
import Train from "../../../public/images/survey-intro-icons/train.svg";
import DistanceTravelledModeChart from "./DistanceTravelledModeChart";

export default function DistanceTravelledMode({ data }) {
  return (
    <Flex
      minWidth="350px"
      maxWidth="1100px"
      direction="column"
      gap={["10px", "20px"]}
      px={["10px", "10px"]}
    >
      <Flex direction="column">
        <Text fontSize="27.65px" fontWeight={600}>
          Distance travelled by mode of transport
        </Text>
        <Text fontSize="20px">
          This graph(butterfly plot) help us compare the travel modes(individual
          Vs.active/active/public/share)preferred by staff within various
          commute distances.
        </Text>
      </Flex>

      {/* CONTAINER FOR INDIVIDUAL METHOD AND ACTIVE/PUBLIC/SHARED/METHOD   */}
      <Flex direction={["column", "row"]} width="100%" my="15px">
        <Flex
          direction="column"
          width={["100%", "50%"]}
          align={["left", "center"]}
          justifyContent="space-between"
        >
          {/* row for the sub title */}
          <Flex direction="row" alignItems={"center"} my="5px">
            <Flex>
              <Box
                mr="5px"
                borderRadius="2px solid #E6EEF3"
                width="17px"
                height="17px"
                background="#D69E2E"
              ></Box>
            </Flex>
            <Flex>
              <Text fontWeight={600} fontSize="23px">
                Individual Method
              </Text>
            </Flex>
          </Flex>

          <Flex direction="row">
            <Flex direction="column" width="100px" align="center">
              <Flex justify="center" align="center" width="40px" height="40px">
                <Car />
              </Flex>
              <Text color="#044B7F">Car</Text>
            </Flex>

            <Flex direction="column" width="100px" align="center">
              <Flex justify="center" align="center" width="40px" height="40px">
                <Motorcycle />
              </Flex>
              <Text color="#044B7F">Motorbike</Text>
            </Flex>
          </Flex>
        </Flex>
        {/*Active,Public/Shared/Method right column */}

        <Flex direction="column" width={["100%", "50%"]}>
          <Flex direction="row" alignItems={"flex-start"} my="5px">
            <Flex>
              <Box
                mt="8px"
                mr="5px"
                borderRadius="2px solid #E6EEF3"
                width="17px"
                height="17px"
                background="#044B7F"
              ></Box>
            </Flex>
            <Flex>
              <Text fontWeight="600" fontSize="23px">
                Active/Public/Shared Method
              </Text>
            </Flex>
          </Flex>

          {/* WALK/BUS/CARPOOL IN A ROW */}
          <Flex direction="row" gap="10px" ml="20px">
            {/* Walk/Run/Cycle */}
            <Flex direction="column" width="100px" align="center">
              <Flex
                justify="center"
                align="center"
                width="40px"
                height="40px"
                color="#044B7F"
              >
                <WalkingMan />
              </Flex>
              <Text textAlign="center" width="150px" color="#044B7F">
                Walk/Run/Cycle
              </Text>
            </Flex>

            {/* Bus/Train*/}
            <Flex direction="column" width="100px" align="center">
              <Flex justify="center" align="center" width="40px" height="40px">
                <Train />
              </Flex>
              <Text color="#044B7F">Bus/Train</Text>
            </Flex>

            {/* taxi/carpool  */}
            <Flex direction="column" width="100px" align="center">
              <Flex justify="center" align="center" width="40px" height="40px">
                <Carpool />
              </Flex>
              <Text color="#044B7F">Taxi/Carpool</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Text>
        Please use the legend for the breakdowns of the two travel modes we are
        comparing in the graph below.
      </Text>
      {/* chart  */}
      <Flex justify="center">
        <Flex direction="column" width={["484px", "804px"]} height="484px">
          <Flex
            background="rgba(221, 221, 229, 0.1)"
            border="0.613005px  #DDDDE5"
            boxShadow="0px 0px 22.5px rgba(35, 47, 78, 0.18)"
            borderRadius="10px 10px 10px 10px"
            py="5px"
            height="484px"
            align="center"
            mb="26px"
            justify="center"
          >
            <DistanceTravelledModeChart data={data} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
