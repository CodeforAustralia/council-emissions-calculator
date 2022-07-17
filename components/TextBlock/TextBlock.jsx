import { Flex, Text } from "@chakra-ui/react";

export default function TextBlock({ title, children }) {

  return (
    <Flex direction="column">
      <Text fontWeight={600} fontSize="28px" lineHeight="54px">{ title }</Text>
      <Text fontWeight={300} fontSize="16px" lineHeight="24px">{ children }</Text>
    </Flex>
  );
}
