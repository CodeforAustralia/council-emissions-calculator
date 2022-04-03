import { useState } from "react";
import { Text, Box, SimpleGrid, GridItem, Flex } from "@chakra-ui/react";
import DaysOfWeekButton from "./DayOfTheWeekButton";
import LinkButton from "../LinkButton/LinkButton";

export default function DaysOfTheWeekContainer ({ 
  setNumberOfDays, 
  saveDataAndLogs, 
  customHref,
  disabledDays
 }) {

  // initial state for days of the week has info if it's selected or not (instead of having 2 separate states)
  const [ daysOfTheWeek, setDaysOfTheWeek ] = useState([
    {
      id: 0,
      day: "Monday",
      isSelected: false,
      isDisable: false
    },
    {
      id: 1,
      day: "Tuesday",
      isSelected: false,
      isDisable: false
    },
    {
      id: 2,
      day: "Wednesday",
      isSelected: false,
      isDisable: false
    },
    {
      id: 3,
      day: "Thursday",
      isSelected: false,
      isDisable: false
    },
    {
      id: 4,
      day: "Friday",
      isSelected: false,
      isDisable: false
    },
    {
      id: 5,
      day: "Saturday",
      isSelected: false,
      isDisable: false
    },
    {
      id: 6,
      day: "Sunday",
      isSelected: false,
      isDisable: false
    }
  ]);

  // disable days already selected in the previous step by comparing to the props array
  const disableSelectedDaysOnLoad = (days) => {
    days.forEach(day => {
      daysOfTheWeek.map(item => {
        if (item.day == day) {
          item.isDisable = true
        }
      })
    })
  }
  disableSelectedDaysOnLoad(disabledDays);

  // on click, the buttom will change colour and the state will be updated to include selected buttons
  const handleClick = (value) => {

    let updatedData = [...daysOfTheWeek];

    // based on the day name from the value of each button, update the state if selected or unselected
    updatedData.map(item => {
      if (item.day === value) {
        item.isSelected = item.isSelected ? false : true;
      }
    })
    setDaysOfTheWeek(updatedData);

    // get answer to which days of the week user works
    const workingDays = updatedData.filter(item => item.isSelected).map(x => x.day);
    
    setNumberOfDays(workingDays)
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
        px="20"
        direction={"column"}
      >
        <Text fontWeight="500" fontSize="18px">Select days of the week *</Text>
        <SimpleGrid 
          columns={{ md: 4 }}
          spacing="4"
          py="10"
          textAlign="center"
        >
        {daysOfTheWeek.map((item) => (
          <GridItem  key={item.id}>
            <DaysOfWeekButton 
              label={item.day}
              isActive={item.isSelected}
              onClick={value => handleClick(value)}
              disabled={item.isDisable}
            />
          </GridItem>
          ))}
        </SimpleGrid>
        <Flex justify={"end"}>
          <LinkButton
            disabled={!daysOfTheWeek.find(item => item.isSelected)}
            href={customHref}
            width={"105px"}
            topMargin="0"
            H="55px"
            justifySelf="right"
            onClick={() => {
              setNumberOfDays();
              saveDataAndLogs();
            }}
          >
          Next
          </LinkButton>
        </Flex>
      </Flex>
    </Box>
  )
}