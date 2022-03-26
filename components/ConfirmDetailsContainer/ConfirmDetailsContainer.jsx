import { useState } from "react";
import { Text, Box, SimpleGrid, GridItem, Flex, Collapse, Spacer } from "@chakra-ui/react";
import LinkButton from "../LinkButton/LinkButton";

export default function ConfirmDetailsContainer() {

  return (
    <Box 
      justify="center" 
      borderWidth="2px" 
      borderRadius="lg" 
      minW="750px" 
      py="8%"
    >
    <Flex>
      <Flex
        justifyContent="space-between"
      >
        <div>Main Icon</div>
        <div>Title & Text</div>
        <div>Edit Icon</div>
      </Flex>
      <Collapse>
        <Text>
          Test data inside collapsible part of the container
        </Text>
      </Collapse>
    </Flex>
    </Box>
  )
}