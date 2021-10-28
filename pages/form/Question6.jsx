import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { BackButton, SubmitButton } from "../../components/LinkButton/LinkButton";
import Q6Progress from "../../public/images/progress-bar/q6-progress-dots.svg";
import Q6Cloud from "../../public/images/clouds/cloud-q6.svg"
import { sendFormResponse } from "../../utils/dbApi";
import { useRouter } from 'next/router';
import { sendLogs } from '../../utils/sendLogs';

export default function Question6() {
  const { answers, setAnswers } = useForm();
  const [incentive, setIncentive] = useState(answers.incentive);

  const saveAnswers = () => setAnswers( prev => ({...prev, incentive: incentive}) );

  const router = useRouter();

  const logMessage = (msg) => { 
    let incentiveMsg = () => {
      if (!!incentive) {return "<filled>"}
      else return "<empty>"
    }

    return {
      page: router.pathname,
      event: msg,
      ...answers,
      incentive: incentiveMsg(),
    }
  }

  return (
    <Layout isText={true} Progress={Q6Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/form/Question5"
          onClick={() => {
            saveAnswers();
            sendLogs(logMessage("Back button clicked"));
          }}
        />
      </Box>
      <Q6Cloud />

      <Heading>
        Share your suggestions
      </Heading>

      <Text fontSize="18px" mt={10} w={["100%", "90%"]} textAlign={["center", "left"]}>
        What can Council do to support and incentivise staff to choose more sustainable modes of transport to and from work?
      </Text>
      <Textarea
        mt={3}
        value={incentive}
        onChange={(e) => setIncentive(e.target.value)}
        placeholder="Eg. Changing room facilities for getting ready after cycling to work."
        w={["100%", "90%"]}
        height={["9em", "5em"]}
      />

      <SubmitButton
        topMargin={8}
        href="/form/Thankyou"
        onClick={() =>
          setAnswers((prev) => {
            const response = { ...prev, incentive: incentive };
            sendLogs(logMessage("Submit button clicked"));
            sendFormResponse(response);
            return response;
          })
        }
        width={["100%", "90%"]}
      />
    </Layout>
  );
}
