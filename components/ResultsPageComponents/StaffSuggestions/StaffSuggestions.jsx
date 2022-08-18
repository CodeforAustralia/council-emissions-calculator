import { Text, Flex, Image } from "@chakra-ui/react";

export default function StaffSuggestions() {
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
      py={["25px", "50px"]}
      justify="center"
    >
      <Flex direction="column">
        <Text fontWeight={600} fontSize="33px" lineHeight="37px" py="15px">
          Staff Suggestions:
        </Text>
        <Text fontSize="19px" py="15px">
          The following graph illustrates the survey participants suggestions on
          what can council do to support and incentivise staff to choose more
          sustainable modes of transport to and from work.
        </Text>
        <Text fontSize="19px" py="15px">
          A stand out in the responses are suggestions to improve Cycling/Walking
          infrastructure, End-of-Trip facilities at workplace, and Public
          Transport options. The following graph groups participants’ suggestions
          in categories based on the responses received.
        </Text>

        <Image src="/images/feedback/feedback.png" alt="feedback" />
      </Flex>
    </Flex>
  );
}
