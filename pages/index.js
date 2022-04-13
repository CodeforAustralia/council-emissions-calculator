import { Heading, Text, Image, Box, Flex } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import LinkButton from "../components/LinkButton/LinkButton";
import Q1Cloud from "../public/images/clouds/cloud-q1.svg";
import { sendLogs } from "../utils/sendLogs";
import useForm from "../components/FormProvider";
import { useRouter } from "next/router";

function Animation() {
  return (
    <Box
      backgroundImage="url('/images/busDriver-animation/bus-driver.png')"
      backgroundPosition="bottom"
      backgroundRepeat="no-repeat"
      minW={["200px", "421px"]}
      maxH="421px"
      overflow="hidden"
    >
      <Box
        w={["300px", "421px"]}
        h={["250px", "421px"]}
        backgroundImage="url('/images/busDriver-animation/Bus driver.gif')"
        backgroundSize="cover"
        backgroundPosition="bottom"
      />
      <Box
        pos="relative"
        bottom="370px"
        left="120px"
        display={["none", "block"]}
      >
        <Q1Cloud />
      </Box>
    </Box>
  );
}

const spacing = 6;

export default function Home() {
  const { answers, setAnswers } = useForm();
  const router = useRouter();

  const logMessage = (msg) => {
    let incentiveMsg = () => {
      if (!!answers.incentive) {
        return "<filled>";
      } else return "<empty>";
    };
    return {
      page: router.pathname,
      event: msg,
      ...answers,
      incentive: incentiveMsg(),
    };
  };

  return (
    <Layout isText={true} maxContainerWidth="container.lg">
      <Flex alignItems="center" flexDir={["column", "row"]}>
        <Animation />
        <Box p={[5, 10]}>
          <Heading textAlign={["center", "start"]}>
            {/* {" "} */}
            Help calculate Council&apos;s carbon emissions
          </Heading>
          <Text mt={spacing}>
            We&apos;ll ask some questions about how you usually travel to and
            from work. You&apos;ll also have the opportunity to suggest how
            council could incentivise you to travel differently.
          </Text>
          <Text mt={spacing}>
            Your response will be compiled to help calculate Council&apos;s
            carbon emissions, and shared by your team representative.
          </Text>
          <Text mt={spacing}>
            This survey will take <b>approximately 5 minutes</b> to complete.
          </Text>
          <LinkButton
            href="/form/WorkArrangement"
            onClick={() => sendLogs(logMessage("Start button clicked"))}
            width={["90vw", "173px"]}
          >
            Start
          </LinkButton>
        </Box>
      </Flex>
    </Layout>
  );
}
