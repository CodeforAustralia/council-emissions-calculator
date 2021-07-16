import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Emissions Calculator</title>
        <meta name="description" content="Emissions calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex height="100vh" alignItems="center">
        <Container centerContent maxW="container.sm">
          {children}
        </Container>
      </Flex>
    </>
  );
}
