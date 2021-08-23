import { useState } from "react";
import { Heading, Text, Select } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { departments } from "../../utils/constants";
import LinkButton from "../../components/LinkButton/LinkButton";
import capitalize from "../../utils/capitalize";
import OurProgressBar from "../../components/ProgressBar/OurProgressBar";

export default function Question5() {
  const { answers, setAnswers } = useForm();
  const [department, setDepartment] = useState(answers.department);

  return (
    <Layout>
      <OurProgressBar progressValue={100} />
      <Heading>Question 4/5</Heading>
      <Text textAlign="center">
        <br />
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
      <LinkButton
        href="/results"
        disabled={!department}
        onClick={() =>
          setAnswers((prev) => ({
            ...prev,
            department,
          }))
        }
      >
        Calculate!
      </LinkButton>
    </Layout>
  );
}
