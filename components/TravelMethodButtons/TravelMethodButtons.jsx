import { Flex, Box, Button, SimpleGrid, Icon } from "@chakra-ui/react";
import { modesOfTransport } from "../../utils/constants";
import { transportIcon } from "../../utils/constants";

export function TravelMethodButtons({ handleTransportMode }) {
  return (
    <Flex width={"fit container "}>
      <SimpleGrid
        columns={3}
        id="selector"
        width={["305px", "548px"]}
        height={["345px", "304px"]}
        mr={"auto"}
        ml={"auto"}
        mt={"6px"}
      >
        {modesOfTransport.map((mode, i) => (
          <Box height="80px" textAlign={"center"} key={mode}>
            {/* buttons */}

            <Button
              fontSize={["16px", "16px"]}
              color="#044B7F"
              height={["100px", "80px"]}
              width={["91.67px", "150px"]}
              border="1px"
              onChange={handleTransportMode}
              colorScheme="#044B7F"
              value={mode}
            >
              <Box
                pos="absolute"
                width={["30px", "32px"]}
                height={["30px", "32px"]}
                fontSize={"16px"}
                mb={"22px"}
              >
                <Icon as={transportIcon[i]} />
              </Box>
              {mode}
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
