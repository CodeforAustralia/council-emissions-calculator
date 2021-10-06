import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import useForm from "../components/FormProvider";
import Layout from "../components/Layout/Layout";
// import calculateEmissions from "../utils/calculateEmissions";
import capitalize from "../utils/capitalize";
import { daysOfWeek } from "../utils/constants";
import { getFormResponses } from "../utils/dbApi";

export default function Results() {
  const { answers } = useForm();
  const { km, mainTransportMode, department, incentive } = answers;
  // const { form_responses } = getFormResponses();

  return (
    <Layout isText={true} >
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
      </Text>
    </Layout>
  );
}
