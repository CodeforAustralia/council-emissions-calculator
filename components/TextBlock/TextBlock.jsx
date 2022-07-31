import { Flex, Text } from "@chakra-ui/react";

export default function TextBlock({ title, anchor, children }) {
  return (
    <Flex direction="column">
      <Text
        fontWeight={600}
        fontSize="28px"
        lineHeight="54px"
        py="20px"
        id={anchor}
      >
        <a textDecoration="none">{title}</a>
      </Text>
      <Text fontWeight={300} fontSize="16px" lineHeight="24px">
        {children}
      </Text>
    </Flex>
  );
}
