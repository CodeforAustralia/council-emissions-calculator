import { Text, Box } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import DaysOfTheWeekContainer from "../../components/DaysOfTheWeek/DaysOfTheWeekContainer";

import { BackButton } from "../../components/LinkButton/LinkButton";
import Q2Progress from "../../public/images/progress-bar/q2-progress-dots.svg";
import Q1Cloud from "../../public/images/clouds/cloud-q1.svg";

import { useState } from "react";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";
import useForm from "../../components/FormProvider";

export default function DaysOfTheWeekSelection() {
  const { answers, setAnswers } = useForm();
  const [nDays, setNDays] = useState(answers.numDaysWorked);
  const [wfhDays, setWFHDays] = useState(answers.wfhDays);

  const saveAnswers = () =>
    setAnswers((prev) => ({
      ...prev,
      numDaysWorked: wfhDays.concat(answers.onsiteDays).length,
      wfhDays: wfhDays,
    }));

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
      numDaysWorked: wfhDays.concat(answers.onsiteDays).length,
      wfhDays: wfhDays.join(),
      incentive: incentiveMsg(),
    };
  };

  // we  pass this function as props to our child component to update Form data and logs
  const saveDataAndShowLog = (logMsg) => {
    setNDays(wfhDays.concat(answers.onsiteDays).length);
    saveAnswers();
    sendLogs(logMessage(logMsg));
  };

  // disable buttons selected for onsite days
  const DaysDisabled = answers.onsiteDays;

  const getHref = (workArrangement) => {
    let href = "";
    switch (workArrangement) {
      case "wfh":
      case "onsite":
        href = "/form/TravelMethod";
        break;
      case "hybrid":
        href = "/form/WorkOnSiteDays";
        break;
      default:
        href = "/form/PageNotFound";
    }
    return href;
  };

  return (
    <Layout isText={true} Progress={Q2Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/form/WorkArrangement"
          onClick={() => saveDataAndShowLog("Back button clicked")}
        />
      </Box>
      <Q1Cloud />
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
        Which day(s) did you work from home last week?
      </Text>
      <DaysOfTheWeekContainer
        setNumberOfDays={(days) => setWFHDays(days)}
        saveDataAndLogs={() => saveDataAndShowLog("Next button clicked")}
        disabledDays={DaysDisabled}
        customHref={getHref(answers.workMode)}
      />
    </Layout>
  );
}
