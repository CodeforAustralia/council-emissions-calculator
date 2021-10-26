import {
  Heading,
  Text,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import LinkButton from "../components/LinkButton/LinkButton";
import Q1Cloud from "../public/images/clouds/cloud-q1.svg";

function Animation() {
  return (
    <Box
      backgroundImage="url('/images/drive-animation/green-rect.svg')"
      backgroundPosition="bottom"
      backgroundRepeat="no-repeat"
      minW={["200px", "421px"]}
      maxH="421px"
      overflow="hidden"
    >
      <Box
      w={["300px", "421px"]}
      h={["250px", "421px"]}
        backgroundImage="url('/images/drive-animation/drive-animation-cut.gif')"
        backgroundSize="cover"
        backgroundPosition="bottom"
      />
      {/* <Image w={["300px", "421px"]} src="/images/drive-animation/drive-animation-cut.gif" alt="animated graphic" /> */}
      <Box pos="relative" bottom="390px" left="220px" display={["none", "block"]}>
        <Q1Cloud />
      </Box>
    </Box>
  );
}

const spacing = 6;

export default function Home() {
  return (
    <Layout isText={true} maxContainerWidth="container.lg" >
      <Flex alignItems="center" flexDir={["column", "row"]}>
        <Animation />
        <Box p={[5, 10]}>
          <Heading textAlign={["center", "start"]}>
            Help calculate Council&apos;s carbon emissions
          </Heading>
          <Text mt={spacing}>
            We&apos;ll ask some questions about how you usually travel to and from work, and your suggestions on how Council could help you to travel differently.
          </Text>
          <Text mt={spacing}>
            We&apos;ll compile your response into a report, which will be shared by your work representative once the survey is complete.
          </Text>
          <Text mt={spacing}>
            This survey will take approximately <b>3 minutes</b> to complete.
          </Text>
          <LinkButton href="/form/Question1" width={["90vw", "173px"]}>Start</LinkButton>
        </Box>
      </Flex>

    </Layout>
  );
}
