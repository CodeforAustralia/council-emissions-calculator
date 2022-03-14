import { Button, Heading, Box, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import DaysOfTheWeekContainer from "../../components/DaysOfTheWeek/DaysOfTheWeekContainer";

import { BackButton } from "../../components/LinkButton/LinkButton";
import Q3Progress from "../../public/images/progress-bar/q3-progress-dots.svg";
import Q3Cloud from "../../public/images/clouds/cloud-q3.svg";

import { useState } from "react";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";
import useForm from "../../components/FormProvider";
import BackArrow from "../../public/images/back-arrow.svg";

export default function WorkOnSiteDays() {

  const { answers, setAnswers } = useForm();
  const [ nDays, setNDays ] = useState(answers.numDaysWorked);

  const saveAnswers = () => setAnswers(prev => ({ ...prev, numDaysWorked: nDays }));

  const router = useRouter();

  const logMessage = (msg) => {
    let incentiveMsg = () => {
      if (!!answers.incentive) {return "<filled>"}
      else return "<empty>"
    }
    return {
      page: router.pathname,
      event: msg,
      ...answers,
      nWorkDays: nDays,
      incentive: incentiveMsg(),
    }
  }

  // we  pass this function as props to our child component to count humber of days
  const setNumberOfDays = (days) => {
    setNDays(days)
  }

  // we  pass this function as props to our child component to update Form data and logs
  const saveDataAndShowLog = (msg="Next button clicked") => {
    saveAnswers();
    sendLogs(logMessage(msg));
  }

  const backButtonOnClickHandler = (msg="Back button clicked") => {
    saveDataAndShowLog(msg)
    history.back();
  }

  return (
    <Layout isText={true} Progress={Q3Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <Button
          onClick={() => backButtonOnClickHandler()}
          variant="ghost"
        >
          <BackArrow />
          <Text ms={2} as="u" color="var(--chakra-colors-blue-600)">
            {"Back"}
          </Text>
        </Button>
      </Box>
      <Q3Cloud />
      <Heading mt={10} mb={10}>
        Which day(s) do you usually work?
      </Heading>
        <DaysOfTheWeekContainer
          setNumberOfDays={() => setNumberOfDays(nDays)}
          onSaveEvent={() => saveDataAndShowLog()}
          customHref={"/form/TravelMethod"}
        />
    </Layout>
  );
}