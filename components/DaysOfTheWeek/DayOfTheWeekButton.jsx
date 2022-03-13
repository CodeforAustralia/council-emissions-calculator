import { Button, Text } from "@chakra-ui/react";

// this is a child component of the DaysOfTheWeekContainer 

export default function DaysOfTheWeekButton ({ label, onClick, isActive }) {

  return (
    <Button
      w="130px" 
      h="55px"
      borderRadius="6%"
      colorScheme="blue"
      variant={isActive ? "solid" : "outline"}
      onClick={onClick}
    >
      <Text fontSize="18px">{label}</Text>
    </Button>
  )
  
};