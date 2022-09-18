import { useState } from "react";
import { Box, Text, Textarea } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import {
  BackButton,
  ContinueButton,
} from "../../components/LinkButton/LinkButton";
import Q7Progress from "../../public/images/progress-bar/q7-progress-dots.svg";
import Q6Cloud from "../../public/images/clouds/cloud-q6.svg";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";

export default function Suggestions() {
  const { answers, setAnswers } = useForm();
  const [incentive, setIncentive] = useState(answers.incentive);

  const saveAnswers = () =>
    setAnswers((prev) => ({ ...prev, incentive: incentive }));

  const router = useRouter();

  const logMessage = (msg) => {
    let incentiveMsg = () => {
      if (!!incentive) {
        return "<filled>";
      } else return "<empty>";
    };

    return {
      page: router.pathname,
      event: msg,
      ...answers,
      incentive: incentiveMsg(),
    };
  };

  // function to save data and show logs on save
  const saveDataAndShowLog = (logMsg) => {
    saveAnswers();
    sendLogs(logMessage(logMsg));
  };

  return (
    <Layout isText={true} Progress={Q7Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/form/Distance"
          onClick={() => saveDataAndShowLog("Back button clicked")}
        />
      </Box>
      <Q6Cloud />
      <Text as="h1" textAlign="center" fontWeight={700} fontSize="36px" lineHeight="43.2px" mt={10} w={["100%", "90%"]}>Share your suggestions</Text>
      <Text
        fontSize="18px"
        mt={10}
        w={["100%", "90%"]}
        textAlign={["center", "left"]}
      >
        What can council do to remove barriers to using more sustainable modes
        of transport to and from work?
      </Text>
      <Text
        fontSize="18px"
        m={5}
        w={["100%", "90%"]}
        textAlign={["center", "left"]}
      >
        Feel free to comment on the survey and on using sustainable transport to
        work.
      </Text>
      <Textarea
        mt={3}
        value={incentive}
        borderColor="#000000"
        resize="none"
        onChange={(e) => setIncentive(e.target.value)}
        placeholder="Eg. Changing room facilities for getting ready after cycling to work."
        w={["100%", "90%"]}
        height={["9em", "5em"]}
      />
      <ContinueButton
        topMargin={8}
        href="/form/Department"
        onClick={() => saveDataAndShowLog("Next button clicked")}
        width={["100%", "90%"]}
      />
    </Layout>
  );
}
