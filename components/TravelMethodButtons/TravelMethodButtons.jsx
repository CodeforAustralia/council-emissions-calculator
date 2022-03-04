import { Box, Button, SimpleGrid, Icon, Flex } from "@chakra-ui/react"

export function TravelMethodButtons({
  transportIcon,
  modesOfTransport,
  handleTransportMode,
  transportMode,
}) {
  return (
    <SimpleGrid
      minChildWidth="115px"
      justifyContent="center"
      defaultValue={transportMode}
      id="selector"
    >
      {modesOfTransport.map((mode, i) => (
        <Box height="80px" textAlign={"center"} key={mode}>
          {/* buttons */}
          <Flex justifyContent="center" flexDirection={"row"} mt={2.5}>
            <Button
              variant="outline"
              fontSize={[13, 15]}
              color="#044B7F"
              height={["58px", "57px"]}
              width={["112px", "141px"]}
              border="1px"
              borderColor="044B7F.300"
              onChange={handleTransportMode}
              colorScheme="#044B7F"
              value={mode}
            >
              <Box
                pos="absolute"
                top={["3px", "2px"]}
                fontSize={["17px", "16x"]}
                pb={["4px", "3px"]}
              >
                <Icon as={transportIcon[i]} />
              </Box>
              {mode}
            </Button>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  )
}
