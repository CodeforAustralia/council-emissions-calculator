import { Button, Text } from "@chakra-ui/react";

export default function DaysOfWeekButton ({ label, onClick, isActive }) {

  return (
    <Button
    w="72px" 
    h="72px"
    borderRadius="6%"
    colorScheme="blue"
    variant={isActive ? "solid" : "outline"}
    onClick={onClick}
    >
      <Text fontSize="18px">{label}</Text>
    </Button>
  )
  
};