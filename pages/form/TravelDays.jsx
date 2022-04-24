import {
  Box,
  Heading,
  Flex,
  Text
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import Q1Progress from "../../public/images/progress-bar/q1-progress-dots.svg";
import Q3Cloud from "../../public/images/clouds/cloud-q3.svg";
import LinkButton, { BackButton } from "../../components/LinkButton/LinkButton";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";

import TravelDayButtonsContainer from "../../components/TravelDayButtons/TravelDayButtonsContainer";

import House from "../../public/images/other/house.svg";

export default function TravelDays() {

  const { answers, setAnswers } = useForm();

  const saveAnswers = () => {
    setAnswers(prev => ({ ...prev }));
  }

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
      incentive: incentiveMsg(),
    }
  }

  // function to save data and show logs on save
  const saveDataAndShowLog = (logMsg) => {
    saveAnswers();
    sendLogs(logMessage(logMsg));
  };

  const Description = ({title}) => (<Flex>
    <Text
      fontWeight="500"
      fontSize="22px"
    >
      Select the days you travel to work by {title}.
    </Text>
  </Flex>)

  return (
    <Layout
      isText={true}
      Progress={Q1Progress}
    >
      <Box
        pos="absolute"
        top={["2", "5"]}
        left={["2", "10"]}
      >
        <BackButton
          href={"/form/TravelMethod"}
          onClick={() => {
            saveDataAndShowLog("Back button clicked");
          }}
        />
      </Box>
      <Box minW="720px">
        <Flex
          justify="center"
          direction="column"
        >
          <Q3Cloud />
          <Heading
            mt={10}
            mb={10}
          >
            Please select the days you travel to work using the selected travel methods
          </Heading>
        </Flex>
        {
          answers.travelMethods.map((tm) => (
            <TravelDayButtonsContainer
              methodIcon={House}
              title={tm}
              description={<Description title={tm} />}
            >
              <Text>Child element will be here</Text>
            </TravelDayButtonsContainer>
          ))
        }
        <Flex
          justify="end"
        >
          <LinkButton
            mt="10px"
            href={"/form/Distance"}
            width="105px"
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
