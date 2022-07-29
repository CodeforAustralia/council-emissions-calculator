import Layout from "../../components/Layout/Layout";
import { Flex, Heading, Text } from "@chakra-ui/react";
import TYCloud from "../../public/images/clouds/cloud-thank-you.svg";

export default function SurveyClosed() {
  return (
    <Layout isText background="#044B7F">
      <Flex alignItems="center" flexDir="column" pos="relative">
        <TYCloud />
        <Flex
          px={["10px", "9%"]}
          flexDir="column"
          alignItems={["center", "start"]}
        >
          <Heading color="#fff" mt={10} mb={5} textAlign={["center", "start"]}>
            Thanks for your interest!
          </Heading>
          <Text
            color="#fff"
            mt={5}
            fontSize="18px"
            textAlign={["center", "start"]}
            w="100%"
          >
            Responses for the carbon calculator survey is now closed, and
            results will be shared soon.
          </Text>
          <Text
            color="#fff"
            mt={5}
            fontSize="18px"
            textAlign={["center", "start"]}
            w="100%"
          >
            The purpose of the survey is to better understand how council staff
            travel to and from work.
          </Text>
          <Text
            color="#fff"
            mt={5}
            fontSize="18px"
            textAlign={["center", "start"]}
            w="100%"
          >
            As part of Climate Change and Environment Strategy (2021 to 2026),
            we&apos;ve set a challenge that 20% of staff trips to work are by
            active methods or shared or public transport by 2026. It will be
            interesting to see where we are at and where we need to improve.
          </Text>
          <Text
            color="#fff"
            mt={5}
            fontSize="18px"
            textAlign={["center", "start"]}
            w="100%"
          >
            For enquiries, please contact John Harvey.
          </Text>
        </Flex>
      </Flex>
    </Layout>
  );
}
