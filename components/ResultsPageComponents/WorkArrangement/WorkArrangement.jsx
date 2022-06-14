import { Text, Flex } from "@chakra-ui/react";

export default function WorkArrangement() {
  return (
    <Flex
      minWidth="350px"
      maxWidth="1100px"
      alignSelf={["center", "start"]}
      align={["center", "flex-start"]}
      flex={[1, 2]}
      direction="column"
      gap={["10px", "20px"]}
      px={["5px", "50px"]}
      justify="center"
    >
      <Flex direction="column">
        <Text fontWeight={600} fontSize="33px" lineHeight="74px">
          Things to note before reading the results
        </Text>
        <Text fontSize="19px">
          The infographics below illustrate responders’ working arrangement across the week. This information helps identify the percentage of staff commuting to work in regular (on-site) and intermittent (hybrid) patterns.
        </Text>
      </Flex>
    </Flex>
  );
}
