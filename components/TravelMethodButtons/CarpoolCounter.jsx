import { Flex, Text, SimpleGrid, GridItem, Container } from "@chakra-ui/react";
import useForm from "../../components/FormProvider";

const CarpoolCounter = () => {
  const { answers, setAnswers } = useForm();

  const setCarpoolCount = (count) => {
    let result = 1;
    if (count >= 1 && count <= 7) {
      result = count;
    } else if (count > 7) {
      result = 7;
    }
    setAnswers((prev) => ({ ...prev, carpoolPassengerCount: result }));
  };

  return (
    <Container width={["268px", "499px"]} textAlign={["center", "left"]}>
      <Flex
        mt={10}
        mb={2}
        border={["1px dashed", "none"]}
        borderColor="var(--chakra-colors-blue-500)"
        width={["240px", "0px"]}
        alignItems="center"
      ></Flex>

      <Flex>
        <Text mt={"20px"} mb="20px">
          How many other people do you most regularly carpool with?
        </Text>
      </Flex>
      <Flex
        width="60px"
        border=".1px solid"
        borderColor={"gray.300"}
        height="22px"
        py={0.5}
        px={0.5}
        mr={["auto", "0px"]}
        ml={["auto", "0px"]}
      >
        <SimpleGrid
          columns={3}
          gap={0.5}
          id="selector"
          spacingX="3px"
          spacingY="3px"
        >
          <GridItem
            h="4"
            w="4"
            bg="#044B7F"
            color="#fff"
            onClick={() => setCarpoolCount(answers.carpoolPassengerCount - 1)}
            borderRightRadius="0"
          >
            <Text fontSize="13px" textAlign="center">
              -
            </Text>
          </GridItem>
          <GridItem h="4" w="4" color="#000" fontSize="13px" textAlign="center">
            {answers.carpoolPassengerCount}
          </GridItem>

          <GridItem
            h="4"
            w="4"
            bg="#044B7F"
            color="#fff"
            fontSize="12px"
            onClick={() => setCarpoolCount(answers.carpoolPassengerCount + 1)}
            textAlign="center"
          >
            +
          </GridItem>
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default CarpoolCounter;
