import { Flex, Box, SimpleGrid } from "@chakra-ui/react";
import { modesOfTransport } from "../../utils/constants";
import { TravelMethodButton } from "./TravelMethodButton";

export function TravelMethodButtons({ handleTransPortMode }) {
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
            <TravelMethodButton
              handleTransPortMode={handleTransPortMode}
              mode={mode}
              ind={i}
              value={mode}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
