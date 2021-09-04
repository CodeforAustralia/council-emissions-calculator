import Head from "next/head";
import { Container, Flex, Text } from "@chakra-ui/react";
import { productionUrl } from "../../utils/constants";

const titleBarHeight = "80px";

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <title>Emissions Calculator</title>
        <meta name="description" content="Emissions calculator" />
        <link rel="icon" href={`${productionUrl}/favicon.ico`} />
      </Head>
      <Flex minHeight="100vh" direction="column">
        <Flex alignItems="center" height={titleBarHeight} top="0" w="100%" bg="#055E9E" color="white" zIndex={10}>
          <Text pl="3.5rem" fontSize="2.25rem" fontWeight="bold">SeeChange</Text>
        </Flex>
        <Flex alignItems="center" minHeight={`calc(100vh - ${titleBarHeight})`} pos="relative" py={5}>
          <Container centerContent maxW="container.sm">
            {children}
          </Container>
        </Flex>
      </Flex>
    </>
  );
}
