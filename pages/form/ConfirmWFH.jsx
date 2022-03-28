import { 
  Box,
  Heading,
  Flex
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import Q1Progress from "../../public/images/progress-bar/q1-progress-dots.svg";
import Q3Cloud from "../../public/images/clouds/cloud-q3.svg";
import LinkButton, { BackButton } from "../../components/LinkButton/LinkButton";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";

import ConfirmDetailsContainer from "../../components/ConfirmDetailsContainer/ConfirmDetailsContainer";

/* for now, we pass hard-coded data from the porent component (icon and title), 
eventually will render based on what user selects during previous steps:
*/
import House from "../../public/images/other/House.svg";
const title = "Work from Home";

export default function ConfirmWFH() {

  // code from previoud version below, no changes made

  const { answers, setAnswers } = useForm();

  const saveAnswers = () => {
    // saving radio button selection
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
          href="/"
          onClick={() => {
            saveDataAndShowLog("Back button clicked");
          }}
        />
      </Box>
      <Box>
        <Flex
          justify="center"
          direction="column"
        >
          <Q3Cloud />
          <Heading 
            mt={10} 
            mb={10}
          >
            Please confirm the details below
          </Heading>
        </Flex>
        <ConfirmDetailsContainer
          methodIcon={House}
          title={title}
        />
        <Flex
          justify="end"
        >
          <LinkButton
            pt="10px"
            href={"/form/Distance"}
            width="105px"
            topMargin="0"
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