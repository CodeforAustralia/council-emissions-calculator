import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import PredictiveInput from "./components/PredictiveInput";
import BackContinueButtons from "./components/BackContinueButtons";
import { modesOfTransport } from "../../utils/constants";
import { daysOfWeek } from "../../utils/constants";
import LinkButton from "../../components/LinkButton/LinkButton";
import Q2Progress from "../../public/images/progress-bar/q2-progress-bar.svg";

export default function Question2() {
  const { answers, setAnswers } = useForm();

  const saveAnswer = (inputValue) => {
    setAnswers(prev => ({...prev, mainTransportMode: inputValue}));
  };

  return (
    <Layout>
      <Q2Progress />
      <Box p={1}>
        <Heading as="h1" size="md">How do you travel to work in an average week?</Heading>
        <Text my={5}>Select the main way you travel to work.</Text>
        <Text my={5}>For example, if you usually drive 2km to the train and then catch the train for 15km, choose train as your way of travel.</Text>
        <Text my={5}>If you currently work from home, we will use this information to calculate the emissions you save by working at home.</Text>
        <PredictiveInput options={modesOfTransport} callback={saveAnswer}/>
      </Box>
      <BackContinueButtons
        prevOptions={{
          href: "/form/Question1",
          // onClick: saveAnswers,
          disabled: false
        }}
        nextOptions={{
          href: "/form/Question3",
          // onClick: saveAnswers,
          disabled: !answers.mainTransportMode
        }}
      />
    </Layout>
  );
}
