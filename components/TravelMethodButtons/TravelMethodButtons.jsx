import {
  Flex,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { travelMethods } from "../../utils/constants";
import CarpoolCounter from "./CarpoolCounter";
import TravelMethodButton from "./TravelMethodButton";

const TravelMethodButtons = ({
  methodClickHandler,
  status,
}) => {
  
  return (
    <>
      <Flex mt={5} width={["268px", "480px"]} justify={["center", "left"]} mb="15px" >
        <Text fontSize="18px">Select the ways you generally travel to work.</Text>
      </Flex>

      {/*ALL travel method button selection */}
     
        <SimpleGrid columns={3} spacingX="20px" spacingY="20px"   >
          {travelMethods.map((mode, i) => (
            <Flex justify="center" key={i} direction="column" >
              <TravelMethodButton
                mode={mode}
                isActive={status[i]}
                onClick={methodClickHandler}
                ind={i}
              />
            </Flex>
          ))}
        </SimpleGrid>
    
      {/* Carpool counter */}
      {status[2] && (
        <CarpoolCounter />
      )}
    </>
  );
};

export default TravelMethodButtons;
