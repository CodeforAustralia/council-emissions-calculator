import { Box, Flex, GridItem, Icon, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import TravelDayButton from "./TravelDayButton";
import { daysOfWeek } from "../../utils/constants";
import { transportIcon } from "../../utils/constants";

  
export default function TravelDayButtonsContainer({ title, methodIcondIndex }) {
  

  
  return (
    <Box
      direction="column"
      align="space-between"
      borderWidth="2px"
      borderRadius="lg"
      px="3%"
      py="5%"
      mb="5%"
    >
      <Flex>
        <Flex
          align="flex-start"
        >
          <Icon
            justifySelf="end"
            w={7}
            h={7}
            as={transportIcon[ methodIcondIndex]}
          />
          <Spacer />
          <Flex
            direction="column"
            align="left"
            pl="15px"
          >
            <Text
              color="#044B7F"
              fontWeight="500"
              fontSize="24px"
            >
              {title}
            </Text>
            <Flex>
    <Text
      fontWeight="500"
      fontSize="22px"
    >
      Select the days you travel to work by {title}.
    </Text>
  </Flex>
            {/* { description } */}
          </Flex>
        </Flex>
        <Spacer />
      </Flex>
      <SimpleGrid
        py="10"
        columns={{ md: 4 }}
        spacingX="15px"
        spacingY="15px"
        textAlign="center"
      >
        {/* [TODO]: SHOULD ONLY SHOW WFH+ONSITE DAYS TO SELECT FROM */}
        {daysOfWeek.map((item) => (
          <GridItem key={item}>
            <TravelDayButton
              label={item}
              travelMethod={title}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  )
}
