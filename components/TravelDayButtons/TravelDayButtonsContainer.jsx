import {
  Box,
  Flex,
  GridItem,
  Icon,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import TravelDayButton from "./TravelDayButton";
import { daysOfWeek } from "../../utils/constants";
import { transportIcon } from "../../utils/constants";

export default function TravelDayButtonsContainer({ title, methodIconIndex }) {
  return (
    <Box
      direction="column"
      align={["center", "space-between"]}
      borderWidth="2px"
      borderRadius="lg"
      px="3%"
      py="5%"
      mb="5%"
    >
      <Flex>
        <Flex align={["center", "flex-start"]} direction="column">
          <Flex>
            <Icon
              justifySelf="end"
              w={7}
              h={7}
              as={transportIcon[methodIconIndex]}
              mx={3}
            />
            <Spacer />
            <Text color="#044B7F" fontWeight="500" fontSize="24px">
              {title}
            </Text>
          </Flex>
          <Flex pl="15px" ml={[0, 9]}>
            <Text fontWeight="500" fontSize="22px" textAlign={["center", "left"]}>
              Select the days you travel to work by {title}.
            </Text>
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
            <TravelDayButton label={item} travelMethod={title} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
