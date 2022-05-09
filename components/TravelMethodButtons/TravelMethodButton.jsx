import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { transportIcon } from "../../utils/constants";

export default function TravelMethodButton({
  name,
  onClick,
  isActive,
  isDisabled,
  ind,
}) {
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
      colorScheme="blue"
      _disabled={{
        bg: "#D0D9DF",
        _hover: {
          cursor: "not-allowed",
          bg: "#D0D9DF",
        },
        color: "white",
      }}
      disabled={isDisabled}
    >
      <Flex justify="center" align="center" direction="column">
        <Icon as={transportIcon[ind]} fontSize={"20px"} style={{ fill: isActive ? "white" : "#044B7F" }} 
 />
        <Box width="100%" p="0px" mt={1}>
          <Text
            d="inline"
            fontSize="16px"
            fontFamily="Public Sans"
            fontWeight="400"
            lineHeight="19px"
            letterSpacing="0.022em"
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            {name}
          </Text>
        </Box>
      </Flex>
    </Button>
  );
}
