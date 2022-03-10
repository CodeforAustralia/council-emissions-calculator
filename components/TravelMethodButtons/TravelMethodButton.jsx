import { Button, Box, Icon } from "@chakra-ui/react";
import { transportIcon } from "../../utils/constants";

export function TravelMethodButton({ handleTransPortMode, mode, ind }) {
  return (
    <Button
      fontSize={["12px", "16px"]}
      color="#044B7F"
      height={["100px", "80px"]}
      width={["91.67px", "150px"]}
      border="1px"
      onChange={handleTransPortMode}
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
        <Icon as={transportIcon[ind]} />
      </Box>
      {mode}
    </Button>
  );
}
