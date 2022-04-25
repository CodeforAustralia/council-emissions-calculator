import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { transportIcon } from "../../utils/constants";

export default function TravelMethodButton({ name, onClick, isActive, ind }) {
  return (
    <Button
      fontSize="16px"
      height={["100px", "80px"]}
      width={["91.67px", "150px"]}
      border="1px"
      p="0px"
      onClick={(e) => onClick(e.target.innerText)}
      variant={isActive ? "solid" : "outline"}
      _active={{ border: "solid" }}
      _hover={{
        bg: "var(--chakra-colors-blue-500)",
        color: "#fff",
      }}
      colorScheme="blue"
    >
      <Flex justify="center" align="center" direction="column">
        <Icon as={transportIcon[ind]} fontSize={"20px"} />
        <Box width="100%" p="0px" mt={1}>
          <Text
            d="inline"
            fontSize="16px"
            fontFamily="Public Sans"
            fontWeight="400"
            lineHeight="19px"
            letterSpacing="0.022em"
          >
            {name}
          </Text>
        </Box>
      </Flex>
    </Button>
  );
}
