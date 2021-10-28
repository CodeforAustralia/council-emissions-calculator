import { useState } from "react";
import {
  Box,
  Flex,
  FormControl, 
  FormLabel,
  FormHelperText, 
  Heading,
  Text,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { BackButton, ContinueButton } from "../../components/LinkButton/LinkButton";
import Q3Progress from "../../public/images/progress-bar/q3-progress-dots.svg";
import Q3Cloud from "../../public/images/clouds/cloud-q3.svg"
import { useRouter } from 'next/router';
import { sendLogs } from '../../utils/sendLogs';

export default function Question3() {
  const { answers, setAnswers } = useForm();
  const [km, setKm] = useState(answers.km);

  const saveAnswers = () => setAnswers((prev) => ({ ...prev, km: km }));

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
      km: km,
      incentive: incentiveMsg(),
    }
  }

  return (
    <Layout isText={true} Progress={Q3Progress} maxContainerWidth="container.md">
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/form/Question2"
          onClick={() => {
            saveAnswers();
            sendLogs(logMessage("Back button clicked"));
          }}
        />
      </Box>
      <Box>
        <Q3Cloud />
      </Box>
      <Heading width={["100%", "80%"]}>
        How many kilometres do you usually travel to work, one-way?
      </Heading>
      <Flex justifyContent="space-between" flexDirection={["column", "row"]} marginTop={10}>
        <Text 
          mt="4" 
          textAlign={["center", "left"]} 
          maxWidth={"450px"} 
          width={["100%", "48%"]}
          fontWeight="500"
          fontSize="18px"
        >
          If you usually work from home, we will use the information you provide to calculate the emissions you save by working at home.
        </Text>
        <Box w={["100%", "48%"]} ml={["0", "4"]}>
          <FormControl mt={["10", "4"]}>
            <FormLabel>
              In kilometers:
            </FormLabel>
            <NumberInput isRequired={true} defaultValue={km}>
              <NumberInputField
                w="100%"
                id="km-input"
                placeholder={"Distance in kms"}
                onChange={(e) => setKm(e.target.value)}
              />
            </NumberInput>
            <FormHelperText id="km-input-helper">
              *Required
            </FormHelperText>
          </FormControl>
          <ContinueButton 
            disabled={!km}
            href="/form/Question4" 
            width="100%"
            topMargin={4}
            onClick={() => {
              saveAnswers();
              sendLogs(logMessage("Next button clicked"));
            }}
          />
        </Box>
      </Flex>
    </Layout>
  );
}
