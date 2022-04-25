import { useState } from "react";
import {
  Heading,
  FormControl,
  FormHelperText,
  Box,
  Text,
  Select,
  Flex,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { departments } from "../../utils/constants";
import {
  BackButton,
  ContinueButton,
  SubmitButton,
} from "../../components/LinkButton/LinkButton";
import capitalize from "../../utils/capitalize";
import Q5Progress from "../../public/images/progress-bar/q5-progress-dots.svg";
import Q5Cloud from "../../public/images/clouds/cloud-q5.svg";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";
import { sendFormResponse } from "../../utils/dbApi";

export default function Department() {
  const { answers, setAnswers } = useForm();
  const [department, setDepartment] = useState(answers.department);

  const saveAnswers = () =>
    setAnswers((prev) => ({ ...prev, department: department }));

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
      department: department,
      incentive: incentiveMsg(),
    };
  };

  return (
    <Layout
      isText={true}
      Progress={Q5Progress}
      maxContainerWidth="container.md"
    >
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/form/Question4"
          onClick={() => {
            saveAnswers();
            sendLogs(logMessage("Back button clicked"));
          }}
        />
      </Box>
      <Q5Cloud />

      <Heading>Which department do you work for?</Heading>

      <Flex flexDirection={["column", "row"]} w="100%" mt={7}>
        <Box width={["100", "50%"]} mt={5}>
          <Text textAlign={["center", "left"]} fontSize="18px">
            This helps us to provide more transparency to support the outcome of
            this initiative.
          </Text>
        </Box>

        <Box width={["100%"]} flex={1} mt={[12, 5]} ms={[0, 5]}>
          <FormControl isRequired>
            <Select
              fontWeight="bold"
              width="100%"
              height="55px"
              placeholder="Please select"
              onChange={(e) => setDepartment(e.target.value)}
              defaultValue={answers.department}
              id="selector"
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {capitalize(department)}
                </option>
              ))}
            </Select>
            <FormHelperText id="selectorHelper">*Required</FormHelperText>
          </FormControl>
          <SubmitButton
            disabled={!department}
            topMargin={4}
            href="/form/Thankyou"
            onClick={() =>
              setAnswers((prev) => {
                const response = { ...prev, department: department };
                sendLogs(logMessage("Submit button clicked"));
                sendFormResponse(response);
                return response;
              })
            }
            width={["100%", "90%"]}
          />
        </Box>
      </Flex>
    </Layout>
  );
}
