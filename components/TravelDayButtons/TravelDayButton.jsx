import { Button, Text } from "@chakra-ui/react";
import useForm from "../../components/FormProvider";
import { travelMethods } from "../../utils/constants";

export default function TravelDayButton ({ label, travelMethod, onClick, isActive, disabled }) {
  const { answers, setAnswers } = useForm();

  console.log(`answers.travelDays: ${JSON.stringify(answers.travelDays, null, " ")}`);

  const isSelected = () => {
    if ( travelMethods.includes(answers.travelDays[label]) ) {
      return true;
    } else return false;
  };

  const isDisabled = () => {
    //does this day have a travel method?
    if ( travelMethods.includes(answers.travelDays[label]) ) {
      //is this day already taken by a different travel method?
      if ( answers.travelDays[label] === travelMethod ) {
        return false;
      } else return true;
    } else return false;
  };

  const handleClick = (e) => {
    let day = e.target.innerText;
    let updatedTravelDays = { ...answers.travelDays };

    // if button already selected, unset travelMethod for day
    if (isSelected()) updatedTravelDays[day] = "";
    else updatedTravelDays[day] = travelMethod;  // set travelMethod for day

    setAnswers((prev) => ({
      ...prev,
      travelDays: updatedTravelDays,
    }));
  };

  // pass innerHTML value from each button to the parent component on click

  return (
    <Button
      w={["305px", "128.75px"]}
      h="55px"
      borderRadius="8px"
      colorScheme="blue"
      variant={isSelected() ? "solid" : "outline"}
      onClick={handleClick}
      _disabled={{
        bg: "#D0D9DF",
        _hover: {
          cursor: "not-allowed",
          bg: "#D0D9DF",
        },
        color: "white"
      }}
      disabled={isDisabled()}
    >
      <Text fontSize="18px"  fontFamily="Public Sans"
        fontWeight="500"
        lineHeight="28px">{label}</Text>
    </Button>
  )
};