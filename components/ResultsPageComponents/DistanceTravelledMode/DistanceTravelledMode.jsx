import { Text, Flex } from "@chakra-ui/react";
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
      alignSelf={["center", "start"]}
      flex={[1, 2]}
      direction="column"
      gap={["10px", "20px"]}
    >
      <Flex direction="column" px={["32px", "0px"]}>
        <Text
          as="h2"
          fontWeight={600}
          fontSize="35px"
          lineHeight="37px"
          py="15px"
        >
          Distance Travelled by Mode of Transport
        </Text>
        <Text fontSize="19px">
          The following graph helps us compare the travel modes (individual
          vs.active/public/shared) preferred by staff within various commute
          distances.
        </Text>
      </Flex>

      {/* CONTAINER FOR INDIVIDUAL METHOD AND ACTIVE/PUBLIC/SHARED/METHOD   */}
      <Flex direction="column" gap="10px">
        <Flex
          gap="30px"
          direction={["column", "row"]}
          justify={["center", "space-between"]}
          align="center"
          alignSelf={["center", "start"]}
        >
          <Flex direction="column" px={["35px", "0px"]}>
            <Text fontWeight={600} color="#022640" fontSize="22px">
              Active/Public/Shared Methods:
            </Text>
            <Text color="#03385F">
              Lower carbon emission per km travelled per person
            </Text>
          </Flex>
          <Flex gap="30px">
            <Flex direction="column" width="100px" align="center">
              <Flex
                justify="center"
                align="center"
                width="95px"
                height="95px"
                background="#E6EEF3"
                boxShadow="0px 1px 30px rgba(230, 238, 243, 0.99)"
                borderRadius="50%"
              >
                <WalkingMan />
              </Flex>
              <Text textAlign="center" width="80px" color="#044B7F">
                Walk/Run/Cycle
              </Text>
            </Flex>
            <Flex direction="column" width="100px" align="center">
              <Flex
                justify="center"
                align="center"
                width="95px"
                height="95px"
                background="#E6EEF3"
                boxShadow="0px 1px 30px rgba(230, 238, 243, 0.99)"
                borderRadius="50%"
              >
                <Train />
              </Flex>
              <Text color="#044B7F">Bus/Train</Text>
            </Flex>
            <Flex direction="column" width="100px" align="center">
              <Flex
                justify="center"
                align="center"
                width="95px"
                height="95px"
                background="#E6EEF3"
                boxShadow="0px 1px 30px rgba(230, 238, 243, 0.99)"
                borderRadius="50%"
              >
                <Carpool />
              </Flex>
              <Text color="#044B7F">Taxi/Carpool</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction={["column", "row"]}
          justify={["center", "space-between"]}
          align="center"
          alignSelf={["center", "start"]}
          px={["32px", "0px"]}
        >
          <Flex direction="column">
            <Text fontWeight={600} color="#022640" fontSize="22px">
              Individual Methods:
            </Text>
            <Text color="#03385F">
              Higher carbon emission per km travelled per person.
            </Text>
          </Flex>
          <Flex gap="30px">
            <Flex direction="column" width="100px" align="center">
              <Flex
                justify="center"
                align="center"
                width="95px"
                height="95px"
                background="rgba(214, 158, 46, 0.36)"
                boxShadow="0px 1px 30px rgba(214, 158, 46, 0.25)"
                borderRadius="50%"
              >
                <Car />
              </Flex>
              <Text color="#044B7F">Car</Text>
            </Flex>
            <Flex direction="column" width="100px" align="center">
              <Flex
                justify="center"
                align="center"
                width="95px"
                height="95px"
                background="rgba(214, 158, 46, 0.36)"
                boxShadow="0px 1px 30px rgba(214, 158, 46, 0.25)"
                borderRadius="50%"
              >
                <Motorcycle />
              </Flex>
              <Text color="#044B7F">Motorbike</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* chart  */}

      <Flex
        width={["350px", "634px"]}
        boxShadow="0px 0px 22.5px rgba(35, 47, 78, 0.18)"
      >
        <DistanceTravelledModeChart data={data} />
      </Flex>
    </Flex>
  );
}
