import {
    Flex,
    Text,
    SimpleGrid,
    Center,
    Button,
    Icon,
    Wrap,
  } from "@chakra-ui/react";
  import { modesOfTransport } from "../../utils/constants";
  import { transportIcon } from "../../utils/constants";
  import Counter from "./CounterCarpool";
  
  const ModeOfTravel = ({
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
                  label={mode}
                  value={mode}
                  variant={transportMode.includes(mode) ? "solid" : "outline"}
                  _active={{ border: "solid" }}
                  _hover={{
                    bg: "var(--chakra-colors-blue-500)",
                    color: "#fff",
                  }}
                  colorScheme="blue"
                  onClick={methodClickHandler}
                >
                  {" "}
                  <Center pos="absolute" fontSize={"16px"} mb={"22px"}>
                    <Icon as={transportIcon[i]} />
                  </Center>
                  <Center mt={6}>
                    <Wrap>
                      <Text fontSize="16px">{mode}</Text>
                    </Wrap>
                  </Center>
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
  
  export default ModeOfTravel;
  