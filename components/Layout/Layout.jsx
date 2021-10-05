import Head from "next/head";
import { Container, Flex, Text, Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { useRouter } from 'next/router'

const titleBarHeightDesk = "147px";
const titleBarHeightMob = "95px";

const breakpoints = createBreakpoints({
  sm: "670px",
  lg: "1400px",
})

const theme = extendTheme({ breakpoints })

export default function Layout({ children, Progress, isText }) {
  
  return (
    <>
      <Head>
        <title>Emissions Calculator</title>
        <meta name="description" content="Emissions calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex minHeight="100vh" direction="column">
        <Header 
          isText={isText} 
          Progress={Progress} 
        />
        <Content>
          { children }
        </Content>
      </Flex>
    </>
  );
}

export function Header({ isText, Progress }) {
  const router = useRouter()
  return (
    <Flex alignItems="center" flexGrow={1} justifyContent="space-around" height={{ sm: "20px", lg: "500px" }} top="0" w="100%" bg={["#055E9E", "green"]} color="white" zIndex={10}>
      {
        isText
        ?
          router.pathname === '/'
          ?
          <Text fontSize={["24px", "24px", "30px"]} fontWeight="bold" flex={1} textAlign="center">
            SeeChange
          </Text>
          :
          <Text fontSize={["24px", "24px", "30px"]} fontWeight="bold" flex={1} visibility={["hidden", "visible", "visible"]} textAlign="center">
            SeeChange
          </Text>
        :
        <Box flex={1}>
        </Box>
      }
      <Flex flex={1} justifyContent="center">
        <Progress />
      </Flex>
      {/* Dummy box to center the Progress component */}
      <Box flex={1}>
      </Box>
    </Flex>
  )
}

export function Content({ children }) {
  return (
    <Flex alignItems="center" minHeight={[`calc(100vh - ${titleBarHeightMob})`, `calc(100vh - ${titleBarHeightDesk})`] } pos="relative" py={5}>
      <Container centerContent maxW="container.sm">
        {children}
      </Container>
    </Flex>
  )
}
