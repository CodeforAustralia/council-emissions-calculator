import { useState, useEffect } from "react";
import { 
  Box,
  Wrap,
  WrapItem,
  Button,
  Heading,
  Text,
  Radio,
  RadioGroup,
  Collapse,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import Q1Progress from "../../public/images/progress-bar/q1-progress-dots.svg";
import Q3Cloud from "../../public/images/clouds/cloud-q3.svg";
import LinkButton, { BackButton } from "../../components/LinkButton/LinkButton";
import { useRouter } from 'next/router';
import { sendLogs } from '../../utils/sendLogs';

const workFromHome = "I work fully from home";
const workOnSite = "I work fully on-site";
const hybridMode = "I spend some days working on-site"

export default function WorkArrangement() {
  const { answers, setAnswers } = useForm();
  const [workMode, setWorkMode] = useState(answers.workMode);


  const saveAnswers = () => {
    // saving radio button selection
    setAnswers(prev => ({ ...prev, workMode: workMode }));
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
      workMode: workMode,
      incentive: incentiveMsg(),
    }
  }

  return (
    <Layout isText={true} Progress={Q1Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/"
          onClick={() => {
            saveAnswers();
            sendLogs(logMessage("Back button clicked"));
          }}
        />
      </Box>
      <Q3Cloud />
      <Heading mt={10} mb={10}>
      What is your usual work arrangement?
      </Heading>

      <RadioGroup mt={12} w="100%" textAlign="left" onChange={e => setWorkMode(e)} value={workMode}>
        <Radio mb={5} name={workFromHome} id={workFromHome} value={workFromHome}>
          <Text fontSize={[18, 20]} fontWeight={700}>
            {workFromHome}
          </Text>
        </Radio>

        <Collapse in={workMode === workFromHome}>
          <Text mb={5} fontSize={[15, 17]} px="20px" py="12px" color="#155724" bg="#D4EDDA">
            We will use the information of the following two questions to calculate the emissions you save by working at home.
          </Text>
        </Collapse>

        <hr style={{ borderTop: "1px dashed var(--chakra-colors-gray-200)" }} />

        <Radio mt={5} mb={5} name={workOnSite} id={workOnSite} value={workOnSite}>
          <Text fontSize={[18, 20]} fontWeight={700}>
          {workOnSite}
          </Text>
        </Radio>

        <hr style={{ borderTop: "1px dashed var(--chakra-colors-gray-200)" }} />
        
        <Radio mt={5} name={hybridMode} id={hybridMode} value={hybridMode}>
          <Text fontSize={[18, 20]} fontWeight={700}>
            {hybridMode}
          </Text>
        </Radio>
      </RadioGroup>

      <LinkButton
        disabled={!(workMode)}
        href="/form/Question3"
        width={["90vw", "90%"]}
        onClick={() => {
          saveAnswers();
          sendLogs(logMessage("Next button clicked"));
        }}
      >
        Next
      </LinkButton>

    </Layout>
  );
}

