import { Flex, Text } from "@chakra-ui/react";

const TravelMethodButton = ({
  button: Button,
  description,
  background,
  textColour,
}) => {
  return (
    <Flex direction="column" width="120px" align="center">
      <Flex
        justify="center"
        align="center"
        width="95px"
        height="95px"
        background={background}
        boxShadow="0px 1px 30px rgba(230, 238, 243, 0.99)"
        borderRadius="50%"
      >
        <Button />
      </Flex>

      <Text textAlign="center" width="120px" color={textColour} py="10px">
        {description}
      </Text>
    </Flex>
  );
};

export default TravelMethodButton;
