import { useState } from "react";
import {
  Wrap,
  WrapItem,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { daysOfWeek, modesOfTransport } from "../../utils/constants";
import Q2Progress from "../../public/images/progress-bar/q2-progress-dots.svg";
import Q2Cloud from "../../public/images/clouds/cloud-q2.svg";
import { BackButton, ContinueButton } from "../../components/LinkButton/LinkButton";

export default function Question2() {
  const { answers, setAnswers } = useForm();
  const [daysSelected, setDaysSelected] = useState([]);
  // const [selectedMode, setSelectedMode] = useState(answers.mainTransportMode || "");

  const saveAnswers = () => setAnswers(prev => ({ ...prev, mainTransportMode: selectedMode }));

  // check if user is working from home (i.e., never travelling to the office)
  let isWFH = answers.week.every(day => day !== 'office');

  const clickHandler = function (e) {
    console.log(e.target.value);
    let selected = daysSelected;
    if (selected.includes(e.target.value)) {
      selected = selected.filter(day => day !== e.target.value);
    } else {
      selected = [...selected, e.target.value];
    }
    setDaysSelected(selected);
  }

  return (
    <Layout isText={true} Progress={Q2Progress}>
      <Q2Cloud />

      <Heading as="h1" mt={12} textAlign="center">
        Which day(s) do you work on-site?
      </Heading>

      <Text mt={12}>
        You can select one or multiple days.
      </Text>

      <Wrap justify="center" spacing={5} mt={12}>
        {daysOfWeek.map(day => (
          <WrapItem key={day} justifyContent="center">
            <Button
              w={["80vw", "100%"]}
              p={7}
              variant={[...daysSelected].includes(day) ? "solid" : "outline"}
              colorScheme="blue"
              onClick={clickHandler}
              value={day}
            >
              {day}
            </Button>
          </WrapItem>
        ))}
      </Wrap>

      <Button
        w={["80vw", "80%"]}
        mt={12}
        p={7}
        color="#fff"
        bg="#044B7F"
        _disabled={{
          bg:"#D0D9DF",
          _hover:{
            cursor:"not-allowed"
          }
        }}
        _hover={{
          bg:"var(--chakra-colors-blue-500)"
        }}
        disabled={daysSelected.length === 0}
      >
        Next
      </Button>
    </Layout>
  );
}

