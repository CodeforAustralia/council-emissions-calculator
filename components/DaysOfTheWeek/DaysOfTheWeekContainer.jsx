import { Text, Box, SimpleGrid, GridItem, Flex } from "@chakra-ui/react";
import DaysOfWeekButton from "./DayOfTheWeekButton";
import { useState } from "react";
import LinkButton from "../LinkButton/LinkButton";

import { useRouter } from 'next/router';
import { sendLogs } from '../../utils/sendLogs';
import useForm from "../../components/FormProvider";

export default function DaysOfTheWeekContainer () {

  /* previous code for question N1 (will be using it for now till we change FormProvider or the data we collect) 
  even thought the current data will show which days the user has worked, we will only save the number of days
  */
  const { answers, setAnswers } = useForm();
  const [nDays, setNDays] = useState(answers.numDaysWorked);

  const saveAnswers = () => setAnswers(prev => ({ ...prev, numDaysWorked: nDays }));

  const router = useRouter();

  const logMessage = (msg) => {
    let incentiveMsg = () => {
      if (!!answers.incentive) {return "<filled>"}
      else return "<empty>"
    }
    return {
      page: router.pathname,
      event: msg,
      ...answers,
      incentive: incentiveMsg(),
    }
  }

  // initial state for days of the week has info if it's selected or not (instead of having 2 separate states)
  const [ daysOfTheWeek, setDaysOfTheWeek ] = useState([
    {
      id: 0,
      day: "Monday",
      isSelected: false
    },
    {
      id: 1,
      day: "Tuesday",
      isSelected: false
    },
    {
      id: 2,
      day: "Wednesday",
      isSelected: false
    },
    {
      id: 3,
      day: "Thursday",
      isSelected: false
    },
    {
      id: 4,
      day: "Friday",
      isSelected: false
    },
    {
      id: 5,
      day: "Saturday",
      isSelected: false
    },
    {
      id: 6,
      day: "Sunday",
      isSelected: false
    }
  ]);

  // state to activate and disable save button (link button)
  const [ saveButtonActive, setSaveButtonActive ] = useState(true);

  // on click, the buttom will change colour and the state will be updated to include selected buttons
  const handleClick = (e) => {
    e.preventDefault();

    let updatedData = [...daysOfTheWeek];

    // based on the day name from innerHTML of each button, update the state if selected or unselected
    updatedData.map(item => {
      if (item.day === e.target.innerText) {
        item.isSelected = item.isSelected ? false : true;
      }
    })
    setDaysOfTheWeek(updatedData);

    // activate Save button (link button) when something is selected
    const areDaysSelected = updatedData.find(item => item.isSelected) ? false : true;
    setSaveButtonActive(areDaysSelected);

  }

 // NOTE! I use minW attribute for the Box for now because at the moment the layout component has limitation for width. 
 // Please change once Layout is changed

  return (
    <Box 
      justify="center" 
      borderWidth="2px" 
      borderRadius="lg" 
      minW="750px" 
      py="8%"
    >
      <Flex 
        px='20'
        direction={"column"}
      >
        <Text>Select days of the week</Text>
        <SimpleGrid 
          columns={{ md: 4 }}
          spacing='8'
          py='10'
          textAlign='center'
        >
        {daysOfTheWeek.map((item) => (
          <GridItem  key={item.id}>
            <DaysOfWeekButton 
              label={item.day}
              isActive={item.isSelected}
              onClick={e => handleClick(e)}
            />
          </GridItem>
          ))}
        </SimpleGrid>
        <Flex justify={"end"}>
          <LinkButton
            disabled={saveButtonActive}
            href="/form/Question2"
            width={"105px"}
            topMargin="0"
            H="55px"
            justifySelf="right"
            onClick={() => {
              saveAnswers();
              sendLogs(logMessage("Next button clicked"));
            }}
          >
          Save
          </LinkButton>
        </Flex>
      </Flex>
    </Box>
  )
}