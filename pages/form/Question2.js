import { useRef } from "react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Select,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { modesOfTransport } from "../../utils/constants";
import Q2Progress from "../../public/images/progress-bar/q2-progress-bar.svg";
import { BackButton, ContinueButton } from "../../components/LinkButton/LinkButton";

export default function Question2() {
  const { answers, setAnswers } = useForm();

  const select = useRef(null);

  const saveAnswers = () => setAnswers(prev => ({ ...prev, mainModeOfTransport: select.current.value }));

  return (
    <Layout>
      <Q2Progress />
      <Box mt={6}>
        <Heading as="h1" size="md">How do you travel to work in an average week?</Heading>
        <Text my={5}>Select the main way you travel to work.</Text>
        <Text my={5}>For example, if you usually drive 2km to the train and then catch the train for 15km, choose train as your way of travel.</Text>
        <Text my={5}>If you currently work from home, we will use this information to calculate the emissions you save by working at home.</Text>
        <Select ref={select} placeholder="Select travel method" alignSelf="start" w="50%">
          {modesOfTransport.map(mode => <option key={mode} value={mode}>{mode}</option>)}
        </Select>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <BackButton href="/form/Question1" onClick={saveAnswers} />
        <ContinueButton href="/form/Question3" onClick={saveAnswers} />
      </Grid>
    </Layout>
  );
}
