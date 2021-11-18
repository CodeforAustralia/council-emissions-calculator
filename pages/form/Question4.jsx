import { useState } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  Heading,
  Select,
  Text,
  Flex,
} from "@chakra-ui/react";
import { modesOfTransport } from "../../utils/constants";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import {
  ContinueButton,
  BackButton,
} from "../../components/LinkButton/LinkButton";
import Q4Progress from "../../public/images/progress-bar/q4-progress-dots.svg";
import Q4Cloud from "../../public/images/clouds/cloud-q4.svg";
import { useRouter } from 'next/router';
import { sendLogs } from '../../utils/sendLogs';

export default function Question4() {
  const { answers, setAnswers } = useForm();

  const [transportMode, setTransportMode] = useState(
    answers.mainTransportMode || ""
  );

  const saveAnswers = () =>
    setAnswers((prev) => ({ ...prev, mainTransportMode: transportMode }));

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
      mainTransportMode: transportMode,
      incentive: incentiveMsg(),
    }
  }

  return (
    <Layout isText={true} Progress={Q4Progress} maxContainerWidth="container.md">
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/form/Question3"
          onClick={() => {
            saveAnswers();
            sendLogs(logMessage("Back button clicked"));
          }}
        />
      </Box>
      <Q4Cloud />

      <Heading width={["100%", "60%"]}>
        Select the main way you travel to work
      </Heading>

      <Flex mt={5} flexDirection={["column", "row"]}>
        <Box flex={1} mt={5}>
          <Text fontSize="18px" textAlign={["center", "left"]}>
            For example, if you usually drive 2km to the train and then catch the train for 15km, choose ‘Train’ as the main way you travel to work.
          </Text>
        </Box>

        <Flex flex={1} flexDirection="column" ms={[0, 10]} mt={[10, 5]}>
          <FormControl isRequired>
            <Select
              fontWeight="bold"
              onChange={(e) => setTransportMode(e.target.value)}
              placeholder="Please select"
              border=".2px solid #044B7F"
              height="55px"
              defaultValue={transportMode}
              id="selector"
            >
              {modesOfTransport.map((mode) => (
                <option
                  fontSize="lg"
                  key={mode}
                  value={mode}
                >
                  {mode}
                </option>
              ))}
            </Select>
            <FormHelperText id="selectorHelper">
              *Required
            </FormHelperText>
          </FormControl>

          <ContinueButton
            disabled={!transportMode}
            href="/form/Question5"
            topMargin={4}
            width="100%"
            onClick={() => {
              saveAnswers();
              sendLogs(logMessage("Next button clicked"));
            }}
          />
        </Flex>
      </Flex>
    </Layout>
  );
}
