import { Box } from "@chakra-ui/react";

export default function ResultContentSection({ isShaded, children }) {
  return (
    <Box width="100%" my={5} px="68px" border="1px dashed blue">
      <Box bg={isShaded ? "#FAFAFA" : "inherit"} border="1px dashed red">
        {children}
      </Box>
    </Box>
  );
}
