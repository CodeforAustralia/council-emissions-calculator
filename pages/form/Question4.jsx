import { useState } from "react";
import { Heading, Text, Textarea, Grid } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { BackButton, ContinueButton } from "../../components/LinkButton/LinkButton";
import Q4Progress from "../../public/images/progress-bar/q4-progress-bar.svg";

export default function Question4() {
  const { answers, setAnswers } = useForm();
  const [incentive, setIncentive] = useState(answers.incentive);

  const saveAnswers = () => setAnswers( prev => ({...prev, incentive}) );

  return (
    <Layout>
      <Q4Progress />
      <Heading as="h1" size="md" mt={6}>What can council do to support and incentivise staff to choose more sustainable modes of transport to and from work?</Heading>
      <Text mt={4} w="100%">For example: public transport subsidies or carpooling arrangements</Text>
      <Textarea
        mt={8}
        value={incentive}
        onChange={(e) => setIncentive(e.target.value)}
        placeholder="Suggest an incentive"
      />
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <BackButton href="/form/Question3" onClick={saveAnswers} />
        <ContinueButton href="/form/Question5" onClick={saveAnswers} />
      </Grid>
    </Layout>
  );
}
