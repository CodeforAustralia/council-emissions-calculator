import Layout from "../../components/Layout/Layout";
import { Flex, Heading, Text } from "@chakra-ui/react";
import TYCloud from "../../public/images/clouds/cloud-thank-you.svg";

export default function Thankyou() {
  return (
    <Layout isText background="#044B7F">
      <Flex
        alignItems="center"
        flexDir="column"
        pos="relative"
        top="-35px"
      >
        <TYCloud />
        <Flex px={["0px","9%"]} flexDir="column" alignItems={["center", "start"]}>
          <Heading color="#fff" mt={5} mb={5} textAlign={["center", "start"]}>
            Thank you for participating!
          </Heading>
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
            We’re collecting responses from 26th April 2022 to better understand 
            how City staff travel to and from work.
          </Text>
          <Text
            color="#fff"
            mt={5}
            fontSize="18px"
            textAlign={["center", "start"]}
            w="100%"
          >
            As part of Climate Change and Environment Strategy (2021 to 2026), 
            we’ve set a challenge that 20% of staff trips to work are by active, 
            shared and public transport by 2026. So I’ll be interesting to see where 
            we are at and where we need to improve.
          </Text>
          <Text
            color="#fff"
            mt={5}
            fontSize="18px"
            textAlign={["center", "start"]}
            w="100%"
          >
            The results will be shared at the end of the survey.
          </Text>
        </Flex>
      </Flex>
    </Layout>
  );
}
