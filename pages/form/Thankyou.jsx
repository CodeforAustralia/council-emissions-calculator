import Layout from "../../components/Layout/Layout";
import { Flex, Text } from "@chakra-ui/react";
import TYCloud from "../../public/images/clouds/cloud-thank-you.svg";

export default function Thankyou() {
  return (
    <Layout isText background="#044B7F">
      <Flex alignItems="center" flexDir="column" pos="relative">
        <TYCloud aria-label="cloud image" />
        <Flex
          px={["10px", "9%"]}
          flexDir="column"
          alignItems={["center", "start"]}
        >
          <Text
            as="h1"
            fontWeight={700}
            fontSize="36px"
            lineHeight="43.2px"
            color="#fff"
            mt={10}
            mb={5}
            textAlign={["center", "start"]}
          >
            Thank you for participating!
          </Text>
          <Text
            color="#fff"
            mt={5}
            fontSize="18px"
            textAlign={["center", "start"]}
            w="100%"
          >
            Thanks for participating, your time is greatly appreciated!
          </Text>
          <Text
            color="#fff"
            mt={5}
            fontSize="18px"
            textAlign={["center", "start"]}
            w="100%"
          >
            We are collecting responses from the 11th of July 2022 to better
            understand how council staff travel to and from work.
          </Text>
          <Text
            color="#fff"
            mt={5}
            fontSize="18px"
            textAlign={["center", "start"]}
            w="100%"
          >
            As part of Climate Change and Environment Strategy (2021 to 2026),
            we’ve set a challenge that 20% of staff trips to work are by active
            methods or shared or public transport by 2026. It will be
            interesting to see where we are at and where we need to improve.
          </Text>
          <Text
            color="#fff"
            mt={5}
            fontSize="18px"
            textAlign={["center", "start"]}
            w="100%"
          >
            The results will be shared at the end of the survey period.
          </Text>
        </Flex>
      </Flex>
    </Layout>
  );
}
