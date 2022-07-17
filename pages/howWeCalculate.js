import { Flex, Text } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";

export default function howWeCalculate() {

  return (
    <Layout isText={true} maxContainerWidth="100%">
      <Text>Carbon Emission Calculation and Reporting</Text>
      <Flex>
        Left
      </Flex>
      <Flex>
        Right
      </Flex>
    </Layout>
  );
}
