import { useRouter } from "next/router";
import {
  BackButton,
  ContinueButton,
} from "../../components/LinkButton/LinkButton";
import { useState } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import TravelMethodButtons from "../../components/TravelMethodButtons/TravelMethodButtons";
import Q4Progress from "../../public/images/progress-bar/travelMethodSelection-progress-dots.svg";

import { travelMethods } from "../../utils/constants";
import Q4Cloud from "../../public/images/clouds/cloud-travelMethodSelection.svg";
import { sendLogs } from "../../utils/sendLogs";

export default function TravelMethod() {
  const { answers, _ } = useForm();

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

  const getBackHref = (workArrangement) => {
    let href = "";
    switch (workArrangement) {
      case "wfh":
        href = "/form/WorkFromHomeDays";
        break;
      case "onsite":
      case "hybrid":
        href = "/form/WorkOnSiteDays";
        break;
      default:
        href = "/form/PageNotFound";
    }
    return href;
  };

  return (
    <Layout
      isText={true}
      Progress={Q4Progress}
      maxContainerWidth="container.md"
    >
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href={getBackHref(answers.workMode)}
          onClick={() => {
            sendLogs(logMessage("Back button clicked"));
          }}
        />
      </Box>
      <Q4Cloud />

      <Text
        as="h1"
        textAlign="center"
        fontWeight={700}
        fontSize="36px"
        lineHeight="43.2px"
        mt={10}
        mb={10}
        w={["100%", "90%"]}
      >
        {answers.workMode === "wfh"
          ? "What is your usual travel method to work?"
          : "What were your travel method(s) to work?"}
      </Text>

      <Flex justify={["center", "left"]} mb={10}>
        <Text fontSize="18px">
          Please tell us how you travel to work on particular days.
        </Text>
      </Flex>

      <Container
        border={["0px none", ".1px solid"]}
        width={["375px", "708px"]}
        maxHeight={"974px"}
        borderColor={["white", "gray.200"]}
        centerContent
        p="0px"
      >
        <TravelMethodButtons />

        {/* NEXT BUTTON  */}

        <Flex mb="30px" justify={["center", "end"]} width={["305px", "500px"]}>
          <ContinueButton
            disabled={answers.travelMethods.length === 0}
            href="/form/TravelDays"
            width={["305px", "105px"]}
            height={["60px", "54.37px"]}
            justifySelf="right"
            onClick={() => {
              sendLogs(logMessage("Next button clicked"));
            }}
          >
            Next
          </ContinueButton>
        </Flex>
      </Container>
    </Layout>
  );
}
