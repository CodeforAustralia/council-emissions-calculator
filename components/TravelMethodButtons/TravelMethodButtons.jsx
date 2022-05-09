import {
  Flex,
  Text,
  SimpleGrid,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { daysOfWeek, travelMethods } from "../../utils/constants";
import CarpoolCounter from "./CarpoolCounter";
import TravelMethodButton from "./TravelMethodButton";
import { useState } from "react";
import useForm from "../../components/FormProvider";

const TravelMethodButtons = () => {
  const { answers, setAnswers } = useForm();

  const workOnSiteDaysNumber = answers.onsiteDays.length;
  const travelMethodsNumber = answers.travelMethods.length;
  const wfhDaysNumber = answers.wfhDays.length;

  const workDays = (
    workArrangement = answers.workMode,
    workOnSiteDays = answers.onsiteDays.length,
    wfhDays = answers.wfhDays.length
  ) => {
    switch (workArrangement) {
      case "hybrid":
      case "onsite":
        return workOnSiteDays;
      case "wfh":
        return wfhDays;
      default:
        return 0;
    }
  };

  const updatedTravelMethods = (travelMethods = answers.travelMethods) => {
    if (travelMethods.length > workDays()) {
      let diff = workDays() - travelMethods.length;
      return travelMethods.slice(0, diff);
    } else return travelMethods;
  };

  const [travelMethodButtonStates, setTravelMethodButtonStates] = useState(
    travelMethods.map((tm, idx) => {
      // make sure to disable button ONLY if:
      // * button not already selected, and
      // * travel method selection limit has been reached
      let updateDisabledState = () => {
        if (
          !updatedTravelMethods().includes(tm) &&
          updatedTravelMethods().length >= workDays()
        ) {
          return true;
        } else return false;
      };

      return {
        id: idx,
        travelMethod: tm,
        isSelected: updatedTravelMethods().includes(tm),
        isDisabled: updateDisabledState(),
      };
    })
  );

  const handleTravelMethodButtonClick = (buttonName) => {
    let updatedState = travelMethodButtonStates.map((item) => {
      if (item.travelMethod === buttonName) {
        return { ...item, isSelected: !item.isSelected };
      } else return { ...item };
    });

    const updatedNumTravelMethod = updatedState.filter(
      (tm) => tm.isSelected
    ).length;

    // disable buttons if travel method selection limit reached...
    updatedState = updatedState.map((item) => {
      if (!item.isSelected && updatedNumTravelMethod >= workDays()) {
        return { ...item, isDisabled: true };
      } else return { ...item, isDisabled: false };
    });

    let selectedTravelMethods = updatedState
      .filter((tm) => tm.isSelected)
      .map((tm) => tm.travelMethod);

    // update `TravelDay` responses when selected travel methods change
    const updateTravelMethodByDay = (
      travelMethodByDay = answers.travelMethodByDay
    ) => {
      let updatedTmDay = {};
      daysOfWeek.map((day) => {
        if (selectedTravelMethods.includes(travelMethodByDay[day])) {
          updatedTmDay[day] = travelMethodByDay[day];
        } else updatedTmDay[day] = "";
      });

      return updatedTmDay;
    };

    const updateCarpoolPassengerCount = () => {
      if (selectedTravelMethods.includes("Carpool")) {
        if (answers.carpoolPassengerCount === 0) return 1;
        else return answers.carpoolPassengerCount;
      } else return 0;
    };

    setTravelMethodButtonStates(updatedState);
    setAnswers((prev) => ({
      ...prev,
      travelMethods: selectedTravelMethods,
      travelMethodByDay: updateTravelMethodByDay(),
      carpoolPassengerCount: updateCarpoolPassengerCount(),
    }));
  };

  return (
    <>
      <Flex
        mt={5}
        width={["268px", "480px"]}
        justify={["center", "left"]}
        mb="15px"
      >
        <Text fontSize="18px">
          Select the ways you generally travel to work.
        </Text>
      </Flex>

      <Alert
        status="success"
        mb={5}
        display={((answers.workMode === "wfh")&&(travelMethodsNumber < wfhDaysNumber) || (answers.workMode !== "wfh")&&(travelMethodsNumber < workOnSiteDaysNumber)) ? "none" : "block"}
        width="83%"
        borderRadius="lg"
      >
        <Flex>
          <AlertIcon />
          <AlertTitle>Travel method limit is reached</AlertTitle>
        </Flex>
        <AlertDescription>
          You can only select as many travel methods as there are days you work on-site
        </AlertDescription>
      </Alert>

      {/*ALL travel method button selection */}

      <SimpleGrid columns={3} spacingX="20px" spacingY="20px">
        {travelMethodButtonStates.map((item) => (
          <Flex justify="center" key={item.id} direction="column">
            <TravelMethodButton
              name={item.travelMethod}
              isActive={item.isSelected}
              isDisabled={item.isDisabled}
              onClick={handleTravelMethodButtonClick}
              ind={item.id}
            />
          </Flex>
        ))}
      </SimpleGrid>

      {/* Carpool counter */}
      {updatedTravelMethods().includes("Carpool") && <CarpoolCounter />}
    </>
  );
};

export default TravelMethodButtons;
