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
    <Layout isText={true} Progress={Q5Progress} maxContainerWidth="container.md">
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton href="/form/Question4" onClick={saveAnswers} />
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
              width="100%"
              height="55px"
              placeholder="Please select"
              onChange={(e) => setDepartment(e.target.value)}
              textAlign="center"
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
            topMargin="5"
          />
        </Box>
      </Flex>
    </Layout>
  );
}
