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
      return {
        id: idx,
        travelMethod: tm,
        isSelected: answers.travelMethods.includes(tm),
        isDisabled: false,
      };
    })
  );

  const handleTravelMethodButtonClick = (buttonName) => {
    let updatedState = travelMethodButtonStates.map((item) => {
      if (item.travelMethod === buttonName) {
        return { ...item, isSelected: !item.isSelected };
      }
      else return { ...item };
    });

    let selectedTravelMethods = updatedState
      .filter((tm) => tm.isSelected)
      .map((tm) => tm.travelMethod);

    const updateCarpoolPassengerCount = () => {
      if (selectedTravelMethods.includes("Carpool")) {
        if (answers.carpoolPassengerCount === 0) return 1;
        else return answers.carpoolPassengerCount;
      }
      else return 0;
    };

    setTravelMethodButtonStates(updatedState);
    setAnswers((prev) => ({ ...prev,
      travelMethods: selectedTravelMethods,
      carpoolPassengerCount: updateCarpoolPassengerCount()
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
