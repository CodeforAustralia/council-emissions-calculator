import { Heading, Text, Box } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";

export default function Question5() {
  return (
    <Layout isText={true} bg="#044B7F">
      <Heading>Thank you for participating!</Heading>

      <Box mt={12} w="100%" textAlign="left">
        <Text>
          We're collecting more responses so we can calculate a meaningful
          result for you.
        </Text>
        <Text mt={12}>
          We will share the result with you through your work representative
          once we have enough responses!
        </Text>
      </Box>
    </Layout>
  );
}
