import { useState } from "react";
import { Box, Text, Select } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { departments } from "../../utils/constants";
import {
  BackButton,
  ContinueButton, 
} from "../../components/LinkButton/LinkButton";
import capitalize from "../../utils/capitalize";
import Q5Progress from "../../public/images/progress-bar/q5-progress-dots.svg";

export default function Question5() {
  const { answers, setAnswers } = useForm();
  const [department, setDepartment] = useState(answers.department);

  console.log(`answers so far: ${JSON.stringify(answers)}`);

  const saveAnswers = () => setAnswers((prev) => ({ ...prev, department }));
  return (
    <Layout isText={true} Progress={Q5Progress}>

      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton href="/form/Question5" onClick={saveAnswers} />
      </Box>

      <Text textAlign="center">
        Which department do you work for?
      </Text>
      <Select
        mt={8}
        maxW={280}
        placeholder="Please select"
        onChange={(e) => setDepartment(e.target.value)}
      >
        {departments.map((department) => (
          <option key={department} value={department}>
            {capitalize(department)}
          </option>
        ))}
      </Select>

      <ContinueButton href="/form/Question6" onClick={saveAnswers} />

    </Layout>
  );
}
