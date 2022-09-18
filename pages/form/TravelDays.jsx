import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Flex,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import Q5Progress from "../../public/images/progress-bar/q5-progress-dots.svg";
import Q3Cloud from "../../public/images/clouds/cloud-q3.svg";
import LinkButton, { BackButton } from "../../components/LinkButton/LinkButton";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";
import TravelDayButtonsContainer from "../../components/TravelDayButtons/TravelDayButtonsContainer";
import { travelMethods } from "../../utils/constants";

export default function TravelDays() {
  const { answers, setAnswers } = useForm();

  const saveAnswers = () => {
    setAnswers((prev) => ({ ...prev }));
  };

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
      //[TODO]: JSON.stringify `travelMethodByDay` value
      incentive: incentiveMsg(),
    };
  };

  // function to save data and show logs on save
  const saveDataAndShowLog = (logMsg) => {
    saveAnswers();
    sendLogs(logMessage(logMsg));
  };

  const workDays = (
    workArrangement = answers.workMode || "",
    workOnSiteDays = answers.onsiteDays || [],
    wfhDays = answers.wfhDays || []
  ) => {
    switch (workArrangement) {
      case "hybrid":
      case "onsite":
        return workOnSiteDays;
      case "wfh":
        return wfhDays;
      default:
        return [];
    }
  };

  const checkIfNotAnySelected =
    Object.values(answers.travelMethodByDay).filter((tm) =>
      answers.travelMethods.includes(tm)
    ).length === 0;

  const checkIfNotAllWorkDaysHasTravelMethod = !workDays()
    .map((day) => {
      return answers.travelMethodByDay[day];
    })
    .every((tm) => answers.travelMethods.includes(tm));

  const checkIfNotAllTravelMethodsSelected = !answers.travelMethods
    .map((tm) => {
      let selectedTms = Object.values(answers.travelMethodByDay);
      if (selectedTms.includes(tm)) {
        return tm;
      } else return "";
    })
    .every((tm) => answers.travelMethods.includes(tm));

  const daysNotYetSelected = () => {
    const travelMethodsByDays = answers.travelMethodByDay;
    let daysLeft = [];
    workDays().map((key) => {
      if (
        Object.keys(travelMethodsByDays).includes(key) &&
        !travelMethodsByDays[key]
      ) {
        daysLeft.push(key);
      }
    });
    return daysLeft;
  };

  const travelComponent = (tm) => {
    const ind = travelMethods.indexOf(tm);

    return (
      <GridItem>
        <TravelDayButtonsContainer title={tm} methodIconIndex={ind} />
      </GridItem>
    );
  };

  return (
    <Layout isText={true} Progress={Q5Progress} maxContainerWidth={"750"}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href={"/form/TravelMethod"}
          onClick={() => {
            saveDataAndShowLog("Back button clicked");
          }}
        />
      </Box>
      <Box>
        <Flex justify="center" direction="column">
          <Q3Cloud />
          <Text as="h1" textAlign="center" fontWeight={700} fontSize="36px" lineHeight="43.2px" mt={10} mb={10} w={["100%", "90%"]}>
            Please select the days for your travel
          </Text>
        </Flex>
        <Flex justify="center" direction="column" pb="20px">
          <Text mb={10} fontSize="18px">
            If you don&apos;t have a regular schedule, please enter your best
            guess for which days you use each travel method.
          </Text>
          {answers.travelMethods.map((tm) => (
            <Box key={tm}>{travelComponent(tm)}</Box>
          ))}
        </Flex>
        <Alert
          status={!checkIfNotAllTravelMethodsSelected ? "warning" : "success"}
          display={
            ![
              checkIfNotAnySelected,
              checkIfNotAllWorkDaysHasTravelMethod,
              checkIfNotAllTravelMethodsSelected,
            ].some((x) => x === true)
              ? "none"
              : "block"
          }
          width="100%"
          borderRadius="lg"
        >
          <Flex>
            <AlertIcon />
            <AlertTitle>Incomplete selection</AlertTitle>
          </Flex>
          <AlertDescription>
            {!checkIfNotAllTravelMethodsSelected
              ? `Please select a travel method for ${daysNotYetSelected().join(
                  ", "
                )}.`
              : "Please select at least one work day for each travel method."}
          </AlertDescription>
        </Alert>
        <Flex justify={["center", "end"]}>
          <LinkButton
            disabled={
              //check if following 3 conditions are true;
              //disable button if ANY are true
              [
                checkIfNotAnySelected,
                checkIfNotAllWorkDaysHasTravelMethod,
                checkIfNotAllTravelMethodsSelected,
              ].some((x) => x === true)
            }
            href={"/form/Distance"}
            width={["100%", "105px"]}
            H="55px"
            justifySelf="right"
            onClick={() => saveDataAndShowLog("Next button clicked")}
          >
            Next
          </LinkButton>
        </Flex>
      </Box>
    </Layout>
  );
}
