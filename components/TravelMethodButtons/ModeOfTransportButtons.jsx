import {
  Flex,
  Text,
  SimpleGrid,
  Center,
  Button,
  Icon,
  Box
} from "@chakra-ui/react";
import { modesOfTransport } from "../../utils/constants";
import { transportIcon } from "../../utils/constants";
import Counter from "./CounterCarpool";

const ModesOfTransportButtons = ({
  transportMode,
  methodClickHandler,
  handleMinus,
  handlePlus,
  count,
  show,
}) => {
  return (
    <>
      <Flex mt={5} width={["268px", "480px"]} justify={["center", "left"]}>
        <Text mb="12px">Select the ways you generally travel to work.</Text>
      </Flex>

      {/*ALL travel method button selected */}
      <Center width={["305px", "548px"]} height={["351px", "304px"]}>
        <SimpleGrid columns={3} id="selector" spacingX="15px" spacingY="15px">
          {modesOfTransport.map((mode, i) => (
            <Center key={mode}>
              <Button
                fontSize="16px"
             height={["100px", "80px"]}
                    width={["91.67px", "150px"]}
                      border="1px"
                      p="0px"
                label={mode}
                value={mode}
                variant={transportMode.includes(mode) ? "solid" : "outline"}
                _active={{ border: "solid" }}
                _hover={{
                  bg: "var(--chakra-colors-blue-500)",
                  color: "#fff",
                }}
                      colorScheme="blue"
                      style={{
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                     }}
                      onClick={methodClickHandler}                      
              >
                      <Flex justify="center" align="center" direction="column">
                  
                  <Icon as={transportIcon[i]}fontSize={"24px"}  />
              
                  <Box width="100%" p="0px"mt={1} >
                              <Text
                                  d="inline"
                                  fontSize="16px"
                                  fontFamily="Public Sans"
                                  fontWeight="400"
                                  lineHeight="19px"
                                  letterSpacing="0.022em"  >{mode}</Text>
                  </Box>
                          
                </Flex>
              
               
              </Button>
            </Center>
          ))}
        </SimpleGrid>
        {/* CARPOOL Question */}
      </Center>
      {/* ! will use the below line when data file field set */}
      {/* {transportMode.includes("Carpool") || mode === "Carpool" && */}
      {/*  use the below line just for testing before data field is ready */}
      {show && (
        <Counter
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          count={count}
        />
      )}
    </>
  );
};

export default ModesOfTransportButtons;
