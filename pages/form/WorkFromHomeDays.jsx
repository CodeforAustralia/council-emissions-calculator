import { Heading, Box } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import DaysOfTheWeekContainer from "../../components/DaysOfTheWeek/DaysOfTheWeekContainer";

import { BackButton } from "../../components/LinkButton/LinkButton";
import Q1Progress from "../../public/images/progress-bar/q1-progress-dots.svg";
import Q1Cloud from "../../public/images/clouds/cloud-q1.svg";

import { useState } from "react";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";
import useForm from "../../components/FormProvider";

export default function DaysOfTheWeekSelection() {

  const { answers, setAnswers } = useForm();
  const [ nDays, setNDays ] = useState(answers.numDaysWorked);
  const [ wfhDays, setWFHDays ] = useState(answers.wfhDays);

  const saveAnswers = () => setAnswers(prev => ({ ...prev, numDaysWorked: nDays, wfhDays: wfhDays }));

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
      numDaysWorked: wfhDays.concat(answers.onsiteDays).length,
      wfhDays: wfhDays.join(),
      incentive: incentiveMsg(),
    }
  }

  // we  pass this function as props to our child component to update Form data and logs
  const saveDataAndShowLog = (logMsg) => {

    setNDays(wfhDays.concat(answers.onsiteDays).length);
    // log to be removed once the project is completed
    // see logs from the number of days the user selected
    console.log(`Data from the child component: ${nDays}`);
    // logs for when the button got clicked
    console.log(logMsg)

    saveAnswers();
    sendLogs(logMessage(logMsg));
  }

  // TODO: UPDATE THIS
  // * need a way to have buttons for already selected wfh days to stay selected 
  //   (but not disabled)

  // disable buttons selected for onsite days
  const DaysDisabled = answers.onsiteDays;

  return (
    <Layout isText={true} Progress={Q1Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/form/WorkArrangement"
          onClick={() => saveDataAndShowLog("Back button clicked")}
        />
      </Box>
      <Q1Cloud />
      <Heading mt={10} mb={10}>
        What day(s) do you usually work from home?
      </Heading>
        <DaysOfTheWeekContainer 
          setNumberOfDays={days => setWFHDays(days)}
          saveDataAndLogs={() => saveDataAndShowLog("Next button clicked")}
          disabledDays={DaysDisabled}
          customHref={"/form/TravelMethod"}
        />
    </Layout>
  );
}