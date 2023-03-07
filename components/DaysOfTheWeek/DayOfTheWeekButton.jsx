import { Button, Text } from "@chakra-ui/react";

// this is a child component of the DaysOfTheWeekContainer

export default function DaysOfTheWeekButton({
  label,
  onClick,
  isActive,
  disabled,
}) {
  // pass innerHTML value from each button to the parent component on click

  return (
    <Button
      w={["305px", "128.75px"]}
      h="55px"
      borderRadius="8px"
      colorScheme="blue"
      variant={isActive ? "solid" : "outline"}
      onClick={(e) => onClick(e.target.innerText)}
      isDisabled={disabled}
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
