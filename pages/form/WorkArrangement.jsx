import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Radio,
  RadioGroup,
  Collapse,
  Flex,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import Q1Progress from "../../public/images/progress-bar/q1-progress-dots.svg";
import Cloud from "../../public/images/clouds/cloud-work-arrangement.svg";
import LinkButton, { BackButton } from "../../components/LinkButton/LinkButton";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";

const workFromHome = "I work fully from home";
const workOnSite = "I work fully on-site";
const hybridMode = "I spend some days working on-site";

export default function WorkArrangement() {
  // code from previoud version below, no changes made

  const { answers, setAnswers } = useForm();
  const [workMode, setWorkMode] = useState(answers.workMode);

  const saveAnswers = () => {
    if (workMode === "wfh") {
      setAnswers((prev) => ({ ...prev, workMode: workMode, onsiteDays: [] }));
    } else if (workMode === "onsite") {
      setAnswers((prev) => ({ ...prev, workMode: workMode, wfhDays: [] }));
    } else {
      setAnswers((prev) => ({ ...prev, workMode: workMode }));
    }
  };

  const router = useRouter();

  const logMessage = (msg) => {
    let incentiveMsg = () => {
      if (!!answers.incentive) {
        return "<filled>";
      } else return "<empty>";
    };
    if (workMode === "wfh") {
      return {
        page: router.pathname,
        event: msg,
        ...answers,
        workMode: workMode,
        onsiteDays: [].join(),
        incentive: incentiveMsg(),
      };
    } else if (workMode === "onsite") {
      return {
        page: router.pathname,
        event: msg,
        ...answers,
        workMode: workMode,
        wfhDays: [].join(),
        incentive: incentiveMsg(),
      };
    } else {
      return {
        page: router.pathname,
        event: msg,
        ...answers,
        workMode: workMode,
        incentive: incentiveMsg(),
      };
    }
  };

  // function to save data and show logs on save
  const saveDataAndShowLog = (logMsg) => {
    saveAnswers();
    sendLogs(logMessage(logMsg));
  };

  const getHref = (workArrangement) => {
    let href = "";
    switch (workArrangement) {
      case "wfh":
      case "hybrid":
        href = "/form/WorkFromHomeDays";
        break;
      case "onsite":
        href = "/form/WorkOnSiteDays";
        break;
      default:
        href = "/form/PageNotFound";
    }
    return href;
  };

  return (
    <Layout isText={true} Progress={Q1Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/"
          onClick={() => saveDataAndShowLog("Back button clicked")}
        />
      </Box>
      <Cloud />
      <Heading mt={10} mb={10}>
        What is your usual work arrangement?
      </Heading>
      <Box
        justify="center"
        borderWidth="2px"
        borderRadius="lg"
        minW="750px"
        py="8%"
      >
        <Flex px="20" direction={"column"}>
          <Text fontWeight="500" fontSize="18px">
            Select your work arrangement
          </Text>
          <RadioGroup
            mt={12}
            w="100%"
            textAlign="left"
            onChange={(e) => setWorkMode(e)}
            value={workMode}
          >
            <Radio mb={5} name={workFromHome} id={workFromHome} value={"wfh"}>
              <Text fontSize={[18, 20]} fontWeight={700}>
                {workFromHome}
              </Text>
            </Radio>

            <Collapse in={workMode === "wfh"}>
              <Text
                fontSize={[15, 17]}
                px="20px"
                py="12px"
                bg="#D4EDDA"
                borderRadius="lg"
                textAlign="center"
              >
                Council will use the information provided to understand commute
                patterns
              </Text>
            </Collapse>

            <br />

            <Radio
              mt={5}
              mb={5}
              name={workOnSite}
              id={workOnSite}
              value={"onsite"}
            >
              <Text fontSize={[18, 20]} fontWeight={700}>
                {workOnSite}
              </Text>
            </Radio>

            <br />

            <Radio mt={5} name={hybridMode} id={hybridMode} value={"hybrid"}>
              <Text fontSize={[18, 20]} fontWeight={700}>
                {hybridMode}
              </Text>
            </Radio>
          </RadioGroup>

          <Flex justify={"end"} mt={10}>
            <LinkButton
              disabled={!workMode}
              href={getHref(workMode)}
              width={"105px"}
              topMargin="0"
              H="55px"
              justifySelf="right"
              onClick={() => saveDataAndShowLog("Next button clicked")}
            >
              Next
            </LinkButton>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}
