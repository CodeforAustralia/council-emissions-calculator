import { Wrap, Heading } from "@chakra-ui/react";
import DaysOfWeekButton from "./DayOfWeekButton";
import { useState } from "react";

export default function DaysOfWeekSelection () {

  // initial state for days of the week
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

  // on click, the buttom will change colour
  const handleClick = (e) => {
    e.preventDefault();

    let updatedData = [...daysOfTheWeek];

    updatedData.map(item => {
      if (item.day === e.target.innerText) {
        item.isSelected = item.isSelected ? false : true;
      }
    })

    setDaysOfTheWeek(updatedData);
    console.log(updatedData)

  }

  return (
    <Wrap>
        {daysOfTheWeek.map((item) => (
          <DaysOfWeekButton 
            label={item.day}
            key={item.id}
            isActive={item.isSelected}
            onClick={e => handleClick(e)}
          />
        ))}
    </Wrap>
  )

}