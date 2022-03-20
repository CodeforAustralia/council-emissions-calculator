import Layout from "../../components/Layout/Layout";
import { Flex, Heading, Text } from "@chakra-ui/react";
import TYCloud from "../../public/images/clouds/cloud-thank-you.svg";

export default function Thankyou() {
  return (
    <Layout isText background="#044B7F">
      <Flex
        alignItems="center"
        flexDir="column"
        w="90%"
        pos="relative"
        top="-35px"
      >
        <TYCloud />
        <Heading color="#fff" mt={5} mb={5}>
          Thank you for participating!
        </Heading>
        <Text
          color="#fff"
          mt={5}
          fontSize="18px"
          textAlign={["center", "start"]}
          w="100%"
        >
          We’re collecting responses from 1 - 19 November, and the results will
          be shared by your work representative at the end of the survey.
        </Text>
        <Text
          color="#fff"
          mt={5}
          fontSize="18px"
          textAlign={["center", "start"]}
          w="100%"
        >
          Your response helps us understand how our work commute affects our
          future environment, and find ways to reduce your impact.
        </Text>
        <Text
          color="#fff"
          mt={5}
          fontSize="18px"
          textAlign={["center", "start"]}
          w="100%"
        >
          It’s safe to close this tab now.
        </Text>
      </Flex>
    </Layout>
  );
}
