import { Box } from "@chakra-ui/react";

export default function ResultContentSection({ isShaded, children }) {
  return (
    <Box width="100%" my={5} px="68px" bg={isShaded ? "#FAFAFA" : "inherit"}>
      {children}
    </Box>
  );
}
