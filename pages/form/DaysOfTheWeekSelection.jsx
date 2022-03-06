import { Heading, Box } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import DaysOfWeekSelection from "../../components/DaysOfTheWeek/DaysOfTheWeekContainer";

import { BackButton } from "../../components/LinkButton/LinkButton";
import Q1Progress from "../../public/images/progress-bar/q1-progress-dots.svg";
import Q1Cloud from "../../public/images/clouds/cloud-q1.svg";

import { useState } from "react";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";
import useForm from "../../components/FormProvider";

export default function DaysOfTheWeekSelection() {

  /* previous code for question N1 (will be using it for now till we change FormProvider or the data we collect).
  Even thought the current data inside container component will show exactly which days the user has worked, 
  we will only save the number of days
  */

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
  const saveDataAndShowLog = () => {
    saveAnswers();
    sendLogs(logMessage("Next button clicked"));
  }

  return (
    <Layout isText={true} Progress={Q1Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/"
          onClick={saveDataAndShowLog}
        />
      </Box>
      <Q1Cloud />
      <Heading mt={10} mb={10}>
        What day(s) do you usually work from home?
      </Heading>
        <DaysOfWeekSelection 
          setNumberOfDays={() => setNumberOfDays(nDays)}
          onSaveEvent={() => saveDataAndShowLog()}
        />
    </Layout>
  );
}