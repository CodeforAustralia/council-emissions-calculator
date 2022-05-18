import { Button, Text } from "@chakra-ui/react";
import useForm from "../../components/FormProvider";
import { travelMethods } from "../../utils/constants";

export default function TravelDayButton({ label, travelMethod }) {
  const { answers, setAnswers } = useForm();

  console.log(
    `answers.travelMethodByDay: ${JSON.stringify(
      answers.travelMethodByDay,
      null,
      " "
    )}`
  );

  const isSelected = () => {
    if (travelMethods.includes(answers.travelMethodByDay[label])) {
      return true;
    } else return false;
  };

  const isDisabled = () => {
    //does this day have a travel method?
    if (travelMethods.includes(answers.travelMethodByDay[label])) {
      //is this day already taken by a different travel method?
      if (answers.travelMethodByDay[label] === travelMethod) {
        return false;
      } else return true;
    } else return false;
  };

  const handleClick = (e) => {
    let day = e.target.innerText;
    let updatedTravelDays = { ...answers.travelMethodByDay };

    // if button already selected, unset travel method for day on click
    if (isSelected()) updatedTravelDays[day] = "";
    else updatedTravelDays[day] = travelMethod; // set travelMethod for day

    setAnswers((prev) => ({
      ...prev,
      travelMethodByDay: updatedTravelDays,
    }));
  };

  // pass innerHTML value from each button to the parent component on click

  return (
    <Button
      w={["90%", "128.75px"]}
      h="55px"
      borderRadius="8px"
      colorScheme="blue"
      variant={isSelected() ? "solid" : "outline"}
      onClick={handleClick}
      disabled={isDisabled()}
    >
      <Text
        fontSize="18px"
        fontFamily="Public Sans"
        fontWeight="500"
        lineHeight="28px"
      >
        {label}
      </Text>
    </Button>
  );
}
