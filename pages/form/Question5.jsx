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
} from "../../components/LinkButton/LinkButton";
import capitalize from "../../utils/capitalize";
import Q5Progress from "../../public/images/progress-bar/q5-progress-dots.svg";
import Q5Cloud from "../../public/images/clouds/cloud-q5.svg";

export default function Question5() {
  const { answers, setAnswers } = useForm();
  const [department, setDepartment] = useState(answers.department);
  console.log(`answers so far: ${JSON.stringify(answers)}`);

  const saveAnswers = () =>
    setAnswers((prev) => ({ ...prev, department: department }));
  return (
    <Layout isText={true} Progress={Q5Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton href="/form/Question4" onClick={saveAnswers} />
      </Box>
      <Q5Cloud />

      <Heading>Which department do you work for?</Heading>

      <Flex flexDirection={["column", "row"]}>
        <Box>
          <Text mt="4" textAlign={"center"} maxWidth={"450px"} width={["100%"]}>
            This helps us to provide more transparency to support the outcome of
            this initiative.
          </Text>
        </Box>

        <Box width={["100%"]}>
          <FormControl mt="4" isRequired>
            <Select
              mt={8}
              width="100%"
              placeholder="Please select"
              onChange={(e) => setDepartment(e.target.value)}
            >
              {departments.map((department) => (
                <option
                  key={department}
                  value={department}
                  selected={department === answers.department}
                >
                  {capitalize(department)}
                </option>
              ))}
            </Select>
            <FormHelperText>*Required</FormHelperText>
          </FormControl>
          <ContinueButton
            disabled={!department}
            href="/form/Question6"
            width="100%"
            onClick={saveAnswers}
          />
        </Box>
      </Flex>
    </Layout>
  );
}
