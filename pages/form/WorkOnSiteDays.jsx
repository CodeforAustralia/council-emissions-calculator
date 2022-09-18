import { Text, Box } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import DaysOfTheWeekContainer from "../../components/DaysOfTheWeek/DaysOfTheWeekContainer";

import { BackButton } from "../../components/LinkButton/LinkButton";
import Q2Progress from "../../public/images/progress-bar/q2-progress-dots.svg";
import Q3Progress from "../../public/images/progress-bar/q3-progress-dots.svg";
import Q1Cloud from "../../public/images/clouds/cloud-q1.svg";

import { useState } from "react";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";
import useForm from "../../components/FormProvider";

export default function WorkOnSiteDays() {
  const { answers, setAnswers } = useForm();
  const [nDays, setNDays] = useState(answers.numDaysWorked);
  const [onsiteDays, setOnsiteDays] = useState(answers.onsiteDays);

  const saveAnswers = () =>
    setAnswers((prev) => ({
      ...prev,
      numDaysWorked: onsiteDays.concat(answers.wfhDays).length,
      onsiteDays: onsiteDays,
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
      numDaysWorked: onsiteDays.concat(answers.wfhDays).length,
      onsiteDays: onsiteDays.join(),
      incentive: incentiveMsg(),
    };
  };

  // we  pass this function as props to our child component to update Form data and logs
  const saveDataAndShowLog = (logMsg) => {
    setNDays(onsiteDays.concat(answers.wfhDays).length);

    saveAnswers();
    sendLogs(logMessage(logMsg));
  };

  // disable buttons selected for wfh days
  const DaysDisabled = answers.wfhDays;

  const getBackHref = (workArrangement) => {
    let href = "";
    switch (workArrangement) {
      case "wfh":
      case "onsite":
        href = "/form/WorkArrangement";
        break;
      case "hybrid":
        href = "/form/WorkFromHomeDays";
        break;
      default:
        href = "/form/PageNotFound";
    }
    return href;
  };

  const getProgressBar = (workArrangement = answers.workMode) => {
    let progressBar = Q2Progress;
    switch (workArrangement) {
      case "wfh":
      case "onsite":
        progressBar = Q2Progress;
        break;
      case "hybrid":
        progressBar = Q3Progress;
        break;
      default:
        progressBar = Q2Progress;
    }
    return progressBar;
  };

  return (
    <Layout isText={true} Progress={getProgressBar()}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href={getBackHref(answers.workMode)}
          onClick={() => saveDataAndShowLog("Back button clicked")}
        />
      </Box>
      <Q1Cloud />
      <Text as="h1" textAlign="center" fontWeight={700} fontSize="36px" lineHeight="43.2px" mt={10} mb={10} w={["100%", "90%"]}>
        Which day(s) did you work on-site last week?
      </Text>
      <DaysOfTheWeekContainer
        setNumberOfDays={(days) => setOnsiteDays(days)}
        saveDataAndLogs={() => saveDataAndShowLog("Next button clicked")}
        disabledDays={DaysDisabled}
        customHref={"/form/TravelMethod"}
      />
    </Layout>
  );
}
