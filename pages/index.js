import Head from "next/head";
import Link from "next/link";
import { Container, Flex, Button, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emissions Calculator - Home</title>
        <meta name="description" content="Emissions calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex height="100vh" alignItems="center">
        <Container centerContent maxW="container.sm">
          <Heading>Your Weekly Commute</Heading>
          <Text>
            <br />
            <b>Let’s calculate the impact of your work commute.</b>
            <br />
            <br /> We’ll ask some questions about how you got to and from your
            work last week. This doesn’t include any travel you may have done as
            part of your work.
            <br />
            <br />
            This form will take approximately 3 minutes to complete.
            <br />
            <br />
          </Text>
          <Link href="/form">
            <Button px="12" colorScheme="blue">
              Start
            </Button>
          </Link>
        </Container>
      </Flex>
    </>
  );
}
