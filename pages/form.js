import Head from "next/head";
import { Container, Flex, Heading } from "@chakra-ui/react";

export default function Form() {
  return (
    <>
      <Head>
        <title>Emissions Calculator - Form</title>
        <meta name="description" content="Emissions calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex height="100vh" alignItems="center">
        <Container centerContent maxW="container.sm">
          <Heading>Here be the form! :-)</Heading>
        </Container>
      </Flex>
    </>
  );
}
