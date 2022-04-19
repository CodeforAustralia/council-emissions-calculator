import {
  Flex,
  Text,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { modesOfTransport } from "../../utils/constants";
import Counter from "./CarpoolCounter";
import TravelMethodButton from "./TravelMethodButton";

const ModesOfTransportButtons = ({
  methodClickHandler,
  handleMinus,
  handlePlus,
  count,
  status,
  
}) => {
  
  return (
    <>
      <Flex mt={5} width={["268px", "480px"]} justify={["center", "left"]}>
        <Text mb="12px">Select the ways you generally travel to work.</Text>
      </Flex>

      {/*ALL travel method button selection */}
      <Flex  direction="column"
        justifyt="center" width={["305px", "548px"]} height={["351px", "304px"]}>
        <SimpleGrid columns={3} id="selector" spacingX="15px" spacingY="15px"   >
          {modesOfTransport.map((mode, i) => (
            <Center justify="center" key={i} direction="column" >
              <TravelMethodButton
                mode={mode}
                isActive={status[i]}
                onClick={methodClickHandler}
                ind={i}
              />
            </Center>
          ))}
        </SimpleGrid>
      </Flex>
      {/* Carpool counter */}
      {status[2] && (
        <CarpoolCounter
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          count={count}
        />
      )}
    </>
  );
};

export default ModesOfTransportButtons;
