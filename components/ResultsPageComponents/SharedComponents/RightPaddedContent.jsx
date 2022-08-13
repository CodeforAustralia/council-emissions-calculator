import { Box, Flex } from "@chakra-ui/react";

function BlankIndentComponent() {
  return <Box width="500px"></Box>;
}

export default function RightPaddedContent({
  children,
  flex,
  indentComponent: IndentComponent,
}) {
  return (
    <Flex
      direction="row"
      flex={flex || ""}
      // minWidth="350px"
      //   maxWidth="1100px"
      alignSelf={["center", "start"]}
      align={["center", "flex-start"]}
      gap={["10px", "20px"]}
      pl={["5px", "50px"]}
      py={["25px", "50px"]}
      // pr={["5px", "500px"]}
    >
      <Box width="100%">{children}</Box>
      {IndentComponent ? <IndentComponent /> : <BlankIndentComponent />}
    </Flex>
  );
}
