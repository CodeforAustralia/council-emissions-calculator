import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  NumberInput,
  NumberInputField,
  Link,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import {
  BackButton,
  ContinueButton,
} from "../../components/LinkButton/LinkButton";
import Q6Progress from "../../public/images/progress-bar/q6-progress-dots.svg";
import Q3Cloud from "../../public/images/clouds/cloud-q3.svg";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";

export default function Distance() {
  const { answers, setAnswers } = useForm();
  const [km, setKm] = useState(answers.km);

  const saveAnswers = () => setAnswers((prev) => ({ ...prev, km: km }));

  const router = useRouter();

  // function to block input of special characters
  const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

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
      km: km,
      incentive: incentiveMsg(),
    };
  };

  // function to save data and show logs on save
  const saveDataAndShowLog = (logMsg) => {
    saveAnswers();
    sendLogs(logMessage(logMsg));
  };

  return (
    <Layout
      isText={true}
      Progress={Q6Progress}
      maxContainerWidth="container.md"
    >
      <Box 
        pos="absolute" 
        top={["2", "5"]} 
        left={["2", "10"]}
      >
        <BackButton
          href="/form/ConfirmWFH"
          onClick={() => saveDataAndShowLog("Back button clicked")}
        />
      </Box>
      <Q3Cloud />
      <Heading 
        mt="40px"
        width={["100%", "80%"]}
      >
        How many kilometres do you usually travel to work, one-way?
      </Heading>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "row"]}
        mt="40px"
      >
          <Flex
            flexDirection="column" 
            width={["100%", "48%"]}
          >
            <Text
              mt="4"
              textAlign={["center", "left"]}
              fontWeight="500"
              fontSize="20px"
            >
              If you usually work from home, we will use the information you provide to calculate 
              the emissions you save by working at home.
            </Text>
            <Text
              mt="4"
              textAlign={["center", "left"]}
              fontWeight="500"
              fontSize="20px"
            >
              You can use <Link color="#5DA9E9" target="_blank" href="https://www.google.com/maps">Google Maps</Link> to calculate the distance from home to your place of work if needed.
            </Text>
        </Flex>
        <Flex 
          w={["100%", "48%"]} 
          ml={["0", "4"]}
          flexDirection="column"
          justifyContent="center"
        >
          <FormControl mt={["10", "4"]}>
            <FormLabel 
              fontSize="20px"
            >
              In kilometers:
            </FormLabel>
            <NumberInput 
              isRequired={true} 
              defaultValue={km}
            >
              <NumberInputField
                w="100%"
                id="km-input"
                placeholder={"Distance in km"}
                h="55px"
                onKeyDown={blockInvalidChar}
                onChange={(e) => setKm(e.target.value)}
              />
            </NumberInput>
          </FormControl>
          <ContinueButton
            disabled={!km}
            href="/form/Suggestions"
            width="100%"
            topMargin={4}
            h="55px"
            onClick={() => saveDataAndShowLog("Next button clicked")}
          />
        </Flex>
      </Flex>
    </Layout>
  );
}
