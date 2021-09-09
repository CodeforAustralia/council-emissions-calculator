import { useState } from "react";
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
  const [selectedMode, setSelectedMode] = useState(answers.mainModeOfTransport || "");

  const saveAnswers = () => setAnswers(prev => ({ ...prev, mainModeOfTransport: selectedMode }));

  // check if user is working from home (i.e., never travelling to the office)
  let isWFH = answers.week.every(day => day !== 'office');

  return (
    <Layout>
      <Q2Progress />
      {
        isWFH
          ?
          <>
            <Heading as="h1" size="md" mt={6}>Looks like you are working from home!</Heading>
            <Text my={5}>Move to the next question.</Text>
            <ContinueButton href="/form/Question3" />
          </>
          :
          <>
            <Box mt={6}>
              <Heading as="h1" size="md">How do you travel to work in an average week?</Heading>
              <Text my={5}>Select the main way you travel to work.</Text>
              <Text my={5}>For example, if you usually drive 2km to the train and then catch the train for 15km, choose train as your way of travel.</Text>
              <Text my={5}>If you currently work from home, we will use this information to calculate the emissions you save by working at home.</Text>
              <Select
                placeholder="Select travel method"
                alignSelf="start"
                w="50%"
                onChange={(e) => setSelectedMode(e.target.value)}
              >
                {
                  modesOfTransport.map(mode => (
                    <option
                      key={mode}
                      value={mode}
                      selected={mode === selectedMode}
                    >
                      {mode}
                    </option>
                  ))
                }
              </Select>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <BackButton href="/form/Question1" onClick={saveAnswers} />
              <ContinueButton href="/form/Question3" onClick={saveAnswers} disabled={!selectedMode} />
            </Grid>
          </>
      }
    </Layout>
  );
}
