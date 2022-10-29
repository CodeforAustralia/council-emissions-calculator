import { useState } from "react";
import { Center, Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import DaysOfWeekButton from "./DayOfTheWeekButton";
import LinkButton from "../LinkButton/LinkButton";
import useForm from "../../components/FormProvider";

export default function DaysOfTheWeekContainer({
  setNumberOfDays,
  saveDataAndLogs,
  customHref,
  disabledDays,
}) {
  const { answers, _ } = useForm();
  const [wfhDays, __] = useState(answers.wfhDays);
  const [onsiteDays, ___] = useState(answers.onsiteDays);

  // initial state for days of the week has info if it's selected or not (instead of having 2 separate states)
  const [daysOfTheWeek, setDaysOfTheWeek] = useState([
    {
      id: 0,
      day: "Monday",
      isSelected: wfhDays.includes("Monday") || onsiteDays.includes("Monday"),
      isDisable: false,
    },
    {
      id: 1,
      day: "Tuesday",
      isSelected: wfhDays.includes("Tuesday") || onsiteDays.includes("Tuesday"),
      isDisable: false,
    },
    {
      id: 2,
      day: "Wednesday",
      isSelected:
        wfhDays.includes("Wednesday") || onsiteDays.includes("Wednesday"),
      isDisable: false,
    },
    {
      id: 3,
      day: "Thursday",
      isSelected:
        wfhDays.includes("Thursday") || onsiteDays.includes("Thursday"),
      isDisable: false,
    },
    {
      id: 4,
      day: "Friday",
      isSelected: wfhDays.includes("Friday") || onsiteDays.includes("Friday"),
      isDisable: false,
    },
    {
      id: 5,
      day: "Saturday",
      isSelected:
        wfhDays.includes("Saturday") || onsiteDays.includes("Saturday"),
      isDisable: false,
    },
    {
      id: 6,
      day: "Sunday",
      isSelected: wfhDays.includes("Sunday") || onsiteDays.includes("Sunday"),
      isDisable: false,
    },
  ]);

  // disable days already selected in the previous step by comparing to the props array
  const disableSelectedDaysOnLoad = (days) => {
    days.forEach((day) => {
      daysOfTheWeek.map((item) => {
        if (item.day == day) {
          item.isDisable = true;
        }
      });
    });
  };
  disableSelectedDaysOnLoad(disabledDays);

  // on click, the buttom will change colour and the state will be updated to include selected buttons
  const handleClick = (value) => {
    let updatedData = [...daysOfTheWeek];

    // based on the day name from the value of each button, update the state if selected or unselected
    updatedData.map((item) => {
      if (item.day === value.trim()) {
        item.isSelected = item.isSelected ? false : true;
      }
    });

    setDaysOfTheWeek(updatedData);

    // get answer to which days of the week user works
    const workingDays = updatedData
      .filter((item) => item.isDisable === false)
      .filter((item) => item.isSelected)
      .map((x) => x.day);

    setNumberOfDays(workingDays);
  };

  return (
    <Center
      justify="center"
      borderWidth="2px"
      borderRadius="8px"
      borderColor={["white", "gray.200"]}
      width={["375px", "700px"]}
      py={10}
    >
      <Flex direction={"column"}>
        <Flex justify={["center", "left"]}>
          <Text
            fontWeight="500"
            fontSize="18px"
            justify={["center", "left"]}
          >
            Select days of the week *
          </Text>
        </Flex>
        <SimpleGrid
          py="10"
          columns={{ md: 4 }}
          spacingX="15px"
          spacingY="15px"
          textAlign="center"
        >
          {daysOfTheWeek.map((item) => (
            <GridItem key={item.id}>
              <DaysOfWeekButton
                label={item.day}
                isActive={item.isSelected}
                onClick={(value) => handleClick(value)}
                disabled={item.isDisable}
              />
            </GridItem>
          ))}
        </SimpleGrid>
        <Flex justify={["center", "end"]} mb={0}>
          <LinkButton
            width={["305px", "105px"]}
            height={["60px", "54.37px"]}
            disabled={!daysOfTheWeek.some((item) => item.isSelected && !item.isDisable)}
            href={customHref}
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
    </Center>
  );
}
