import { Heading, Text } from "@chakra-ui/react";
import useForm from "../components/FormProvider";
import Layout from "../components/Layout/Layout";

export default function Results() {
  const { answers } = useForm();
  const { km, week, transportModes, department, incentive } = answers;
  return (
    <Layout>
      <Heading>Results</Heading>
      <Text>
        <br />
        <b>Daily km:</b> {km}
        <br />
        <b>Working week:</b>
        {week.map((d) => (
          <Text key={d}>{d}</Text>
        ))}
        <b>Modes of transport:</b>
        {transportModes.map((t) => (
          <Text key={t}>{t}</Text>
        ))}
        <b>Incentive:</b> {incentive}
        <br />
        <b>Department:</b> {department}
      </Text>
    </Layout>
  );
}
