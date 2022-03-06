import { Text, Box, SimpleGrid, GridItem, Flex } from "@chakra-ui/react";
import DaysOfWeekButton from "./DayOfTheWeekButton";
import { useState } from "react";
import LinkButton from "../LinkButton/LinkButton";

export default function DaysOfTheWeekContainer () {

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

  // on click, the buttom will change colour and the state will be updated to include selected buttons
  const handleClick = (e) => {
    e.preventDefault();

    let updatedData = [...daysOfTheWeek];

    // grab the day name from innerHTML
    updatedData.map(item => {
      if (item.day === e.target.innerText) {
        item.isSelected = item.isSelected ? false : true;
      }
    })

    setDaysOfTheWeek(updatedData);
    console.log(updatedData)

  }

 // NOTE! I use minW attribute for the Box for now because at the moment the layout component has limitation for width. 
 // Please change once Layout is changed

  return (
    <Box 
      justify="center" 
      borderWidth="2px" 
      borderRadius="lg" 
      minW="800px" 
      p="8%"
    >
      <Flex 
        px='10'
        W="80%" 
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
            href="/form/Question2"
            width={"105px"}
            topMargin="0"
            H="55px"
            justifySelf="right"
          >
          Save
          </LinkButton>
        </Flex>
      </Flex>
    </Box>
  )

}