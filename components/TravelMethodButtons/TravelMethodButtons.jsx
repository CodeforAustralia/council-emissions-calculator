import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { travelMethods } from "../../utils/constants";
import CarpoolCounter from "./CarpoolCounter";
import TravelMethodButton from "./TravelMethodButton";
import { useState } from "react";
import useForm from "../../components/FormProvider";

const TravelMethodButtons = () => {
  const { answers, setAnswers } = useForm();

  const [travelMethodButtonStates, setTravelMethodButtonStates] = useState(
    travelMethods.map((tm, idx) => {
      // make sure to disable button ONLY if:
      // * button not already selected, and
      // * travel method selection limit has been reached
      let updateDisabledState = () => {
        if (
          !answers.travelMethods.includes(tm)
          &&
          (answers.travelMethods.length >= answers.onsiteDays.length)
        ) {
          return true;
        } else return false;
      }

      return {
        id: idx,
        travelMethod: tm,
        isSelected: answers.travelMethods.includes(tm),
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

    const updatedNumTravelMethod = updatedState
      .filter((tm) => tm.isSelected)
      .length;

    // disable buttons if travel method selection limit reached...
    updatedState = updatedState.map((item) => {
      if (!item.isSelected && (updatedNumTravelMethod >= answers.onsiteDays.length)) {
        return { ...item, isDisabled: true };
      } else return { ...item, isDisabled: false };
    });

    let selectedTravelMethods = updatedState
      .filter((tm) => tm.isSelected)
      .map((tm) => tm.travelMethod);

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
      {answers.travelMethods.includes("Carpool") && <CarpoolCounter />}
    </>
  );
};

export default TravelMethodButtons;
