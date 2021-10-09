import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Textarea,
  Grid
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { BackButton, SubmitButton } from "../../components/LinkButton/LinkButton";
import Q6Progress from "../../public/images/progress-bar/q6-progress-dots.svg";
import Q6Cloud from "../../public/images/clouds/cloud-q6.svg"

export default function Question6() {
  const { answers, setAnswers } = useForm();
  const [incentive, setIncentive] = useState(answers.incentive);

  const saveAnswers = () => setAnswers( prev => ({...prev, incentive}) );

  return (
    <Layout isText={true} Progress={Q6Progress}>
      <Box margin={"50px 0px 50px"} >
        <Q6Cloud />
      </Box>
      <Heading as="h1" mt={12} textAlign="center">
        Share your suggestions
        <br/>
        <br/>
      </Heading>
      <Text mt={4} w="100%">
        What can council do to support and incentivise staff to choose more sustainable modes of transport to and from work?
      </Text>
      <Textarea
        mt={8}
        value={incentive}
        onChange={(e) => setIncentive(e.target.value)}
        placeholder="Suggest an incentive"
      />
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <BackButton href="/form/Question3" onClick={saveAnswers} />
        <SubmitButton href="/form/Thankyou" onClick={saveAnswers} />
      </Grid>
    </Layout>
  );
}
