import { Box, Flex } from "@chakra-ui/react";

const SectionLayout = (props) => {
  const { flexConfig, children } = props;
  return (
    <Flex
      minWidth="350px"
      //   maxWidth="1100px"
      alignSelf={["center", "start"]}
      flex={flexConfig ? flexConfig : ""}
      direction="column"
      gap={["10px", "20px"]}
      //   bg={isShaded ? "#FAFAFA" : "inherit"}
      px="30px"
      border="1px dashed green"
    >
      {children}
    </Flex>
  );
};

const FullWidthContent = (props) => {
  return (
    <Flex direction="column" border="1px dotted red">
      {props.children}
    </Flex>
  );
};

const RightPaddedContent = (props) => {
  const { children, flex } = props;
  return (
    <Box
      direction="column"
      flex={flex || ""}
      minWidth="350px"
      maxWidth="1100px"
      alignSelf={["center", "start"]}
      align={["center", "flex-start"]}
      gap={["10px", "20px"]}
      px={["5px", "50px"]}
      py={["25px", "50px"]}
      pr="350px"
      border="1px dotted blue"
    >
      {children}
    </Box>
  );
};

export { FullWidthContent, RightPaddedContent, SectionLayout };
