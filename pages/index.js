import { Heading, Text, Image, Box, Flex } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import LinkButton from "../components/LinkButton/LinkButton";
import Q1Cloud from "../public/images/clouds/cloud-q1.svg";
import { sendLogs } from "../utils/sendLogs";
import useForm from "../components/FormProvider";
import { useRouter } from "next/router";
import SurveyClosed from "../components/SurveyClosed/SurveyClosed";

export async function getStaticProps() {
  const surveyClosingDateTime = process.env["SURVEY_CLOSING_DATE"];

  return {
    props: {
      closingTime: Date.parse(surveyClosingDateTime),
    },
  };
}

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

export default function Home({ closingTime }) {
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

  if (closingTime && closingTime < Date.parse(new Date()))
    return <SurveyClosed />;
  else
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
              We&apos;ll ask some questions about how you travelled to and from
              work last week, or the most recent normal week with no leave.
            </Text>
            <Text mt={spacing}>
              When responding, please think only about the <b>dominant mode</b>{" "}
              of travel.
            </Text>
            <Flex justify="center">
              <Text fontStyle="italic" width="80%" textAlign="center">
                i.e. if you walked a bit then and caught a bus, - select bus. if
                you ride and catch the train, - select train.
              </Text>
            </Flex>
            <Text mt={spacing}>
              This survey will take approximately 2 minutes to complete.
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
