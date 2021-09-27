import { Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import useForm from "../components/FormProvider";
import Layout from "../components/Layout/Layout";

import capitalize from "../utils/capitalize";
import { daysOfWeek } from "../utils/constants";
import { getFormResponses } from "../utils/dbApi";
import { FiDownload } from "react-icons/fi";

export default function Results() {
  const { answers } = useForm();
  const { km, mainTransportMode, department, incentive } = answers;

  return (
    <Layout>
      {/* Button for download */}
      <Button className="resultbtn" colorScheme="blue">
        Download as PDF or CSV {""}
        <FiDownload />
      </Button>
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
