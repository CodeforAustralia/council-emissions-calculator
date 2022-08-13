import { Box } from "@chakra-ui/react";

export default function FullWidthContent({ children, flex }) {
  return (
    <Box
      direction="column"
      flex={flex || ""}
      minWidth="350px"
      //   maxWidth="1100px"
      alignSelf={["center", "start"]}
      align={["center", "flex-start"]}
      gap={["10px", "20px"]}
      px={["5px", "50px"]}
      py={["25px", "50px"]}
      // pr={["5px", "500px"]}
      // border="1px dotted blue"
    >
      {children}
    </Box>
  );
}
