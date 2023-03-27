import Head from "next/head";
import Link from "next/link";
import { Container, Flex, Text, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const titleBarHeightDesk = "147px";
const titleBarHeightMob = "95px";

export default function Layout({
  children,
  Progress,
  isText,
  maxContainerWidth,
  background,
}) {
  return (
    <>
      <Head>
        <title>Emissions Calculator</title>
        <meta name="description" content="Emissions calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex minHeight="100vh" direction="column">
        <Header isText={isText} Progress={Progress} />
        <Content
          maxContainerWidth={maxContainerWidth}
          background={background || ""}
        >
          {children}
        </Content>
      </Flex>
    </>
  );
}

export function Header({ isText, Progress }) {
  const router = useRouter();
  // console.log(router.pathname);
  return (
    <Flex
      alignItems="center"
      flexGrow={1}
      justifyContent="space-around"
      height={[titleBarHeightMob, titleBarHeightDesk]}
      top="0"
      w="100%"
      bg="#044B7F"
      color="white"
      zIndex={10}
    >
      {isText ? (
        <Box flex={1}>
          {["/", "/form/Thankyou"].includes(router.pathname) ? (
            <Link href="/" passHref>
              <Text
                fontSize={["24px", "30px"]}
                fontWeight="bold"
                flex={1}
                textAlign="center"
                marginStart={[10, 0]}
              >
                SeeChange
              </Text>
            </Link>
          ) : (
            <Link href="/" passHref>
              <Text
                fontSize={["24px", "30px"]}
                fontWeight="bold"
                flex={1}
                display={["none", "block"]}
                textAlign="center"
                overflow="hidden"
              >
                SeeChange
              </Text>
            </Link>
          )}
        </Box>
      ) : (
        <Box flex={1}></Box>
      )}
      <Flex flex={1} justifyContent="center" w="100%">
        {Progress ? <Progress /> : <></>}
      </Flex>
      {/* Dummy box to center the Progress component */}
      <Box flex={1}></Box>
    </Flex>
  );
}

export function Content({ children, background, maxContainerWidth }) {
  return (
    <Flex
      alignItems="start"
      minHeight={[
        `calc(100vh - ${titleBarHeightMob})`,
        `calc(100vh - ${titleBarHeightDesk})`,
      ]}
      pos="relative"
      py={5}
      bg={background || ""}
    >
      <Container
        centerContent
        maxW={maxContainerWidth || "container.sm"}
        px={5}
        py={["20px", "5px"]}
      >
        {children}
      </Container>
    </Flex>
  );
}
