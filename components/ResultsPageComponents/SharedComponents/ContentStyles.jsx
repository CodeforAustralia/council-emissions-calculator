import { Box } from "@chakra-ui/react";

const ResultContentSection = (props) => {
  const { isShaded, children } = props;
  return (
    <Box
      width="100vw"
      py="inherit"
      px="inherit"
      bg={isShaded ? "#FAFAFA" : "inherit"}
    >
      {children}
    </Box>
  );
};

export { ResultContentSection };
