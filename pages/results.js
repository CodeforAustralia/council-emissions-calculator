import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import useForm from "../components/FormProvider";
import Layout from "../components/Layout/Layout";
import calculateEmissions from "../utils/calculateEmissions";
import capitalize from "../utils/capitalize";
import { daysOfWeek } from "../utils/constants";
import { getFormResponses } from "../utils/dbApi";

export default function Results() {
  const { answers } = useForm();
  const { km, transportModes, department, incentive } = answers;
  const { form_responses } = getFormResponses();
  const results = calculateEmissions(km, transportModes);

  return (
    <Layout>
      <Heading>Your results:</Heading>
      <Text>
        <br />
        <b>Department:</b> {capitalize(department)}
        <br />
        <b>Anything that would change your mind:</b> {incentive}
        <br />
        <br />
        <b>Daily travel:</b> {km}km
        <br />
        <b>Your daily CO2 emissions:</b>
        <br />
        {results.emissionsPerMode.map(({ mode, e }, i) => (
          <React.Fragment key={i}>
            {daysOfWeek[i]} ({mode}): {e}kg
            <br />
          </React.Fragment>
        ))}
        <b>Total weekly CO2 emissions:</b> {results.totalEmissions}kg
      </Text>
    </Layout>
  );
}
