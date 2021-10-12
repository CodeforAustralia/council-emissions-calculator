import { useState } from "react";
import { Heading, Text, Box, Checkbox, Grid } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm, { FormProvider } from "../../components/FormProvider";
import LinkButton, { BackButton } from "../../components/LinkButton/LinkButton";
import Q1Progress from "../../public/images/progress-bar/q1-progress-dots.svg";
import Q1Cloud from "../../public/images/clouds/cloud-q1.svg";
import {
  Wrap,
  WrapItem,
  Button,
} from "@chakra-ui/react";

const options = [1, 2, 3, 4, 5, 6, 7];

export default function Question1() {
  const { answers, setAnswers } = useForm();
  const [nDays, setNDays] = useState(answers.nWorkDays);

  const saveAnswers = () => setAnswers(prev => ({ ...prev, nWorkDays: nDays }));

  const NumberButton = ({ label, isActive, onClick }) => (
    <Button
      w="72px" h="72px"
      borderRadius="50%"
      variant={isActive ? "solid" : "outline"}
      colorScheme="blue"
      onClick={onClick}
    >
      <Text fontSize="18px">{label}</Text>
    </Button>
  );

  const selectHandler = (option) => {
    console.log(`option: ${option}`)
    setNDays(option);
  }

  return (
    <Layout isText={true} Progress={Q1Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton onClick={saveAnswers} href="/"/>
      </Box>
      <Q1Cloud />
      <Heading>
        How many days do you work?
      </Heading>
      <Text mt={5} textAlign="center" w="90%" display={["none", "inline"]}>
        Choose the number of working day(s)
      </Text>
      <Text mt={10} textAlign="left" w="90%" display={["inline", "none"]}>
        Day(s) per week
      </Text>

      <Wrap mt={5} w={["90%", "70%"]} justify={["left", "center"]} spacing={5}>
        {options.map(option => (
          <WrapItem key={option}>
            <NumberButton
              label={option}
              onClick={() => selectHandler(option)}
              isActive={option == nDays}
            />
          </WrapItem>
        ))}
      </Wrap>

      <LinkButton href="/form/Question2" width={["90vw", "474px"]} onClick={saveAnswers}>
        Next
      </LinkButton>
    </Layout>
  );
}