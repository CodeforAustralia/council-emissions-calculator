import { Box, Button, Text, SimpleGrid, Icon, Flex } from "@chakra-ui/react";

export function TravelMethodButtonsContainer({
  transportIcon,
  modesOfTransport,
  handleTransportMode,
  transportMode,
}) {
  return (
    <SimpleGrid
      columns={3}
      defaultValue={transportMode}
      id="selector"
      width={["305px", "548px"]}
      mr={"auto"}
      ml={"auto"}
    >
      {modesOfTransport.map((mode, i) => (
        <Box height="80px" textAlign={"center"} key={mode}>
          {/* buttons */}

          <Button
            variant="outline"
            fontSize={[13, 15]}
            color="#044B7F"
            height={["58px", "57px"]}
            width={["91.67px", "141px"]}
            border="1px"
            onChange={handleTransportMode}
            colorScheme="#044B7F"
            value={mode}
          >
            <Box
              pos="absolute"
              top={["3px", "2px"]}
              pb={["4px", "3px"]}
              width={["30px", "32px"]}
              height={["30px", "32px"]}
              mb="12px"
            >
              <Icon as={transportIcon[i]} />
            </Box>
            {mode}
          </Button>
        </Box>
      ))}
    </SimpleGrid>
  );
}
