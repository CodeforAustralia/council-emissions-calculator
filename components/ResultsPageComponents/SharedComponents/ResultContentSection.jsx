import { Box } from "@chakra-ui/react";

export default function ResultContentSection({ isShaded, children }) {
  return (
    <Box
      width="100%"
      py="inherit"
      px="inherit"
      bg={isShaded ? "#FAFAFA" : "inherit"}
    >
      {children}
    </Box>
  );
}
