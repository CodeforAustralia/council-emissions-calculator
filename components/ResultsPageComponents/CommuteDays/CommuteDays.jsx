import { Text, Flex } from "@chakra-ui/react";
import CommuteDaysColumnChart from "./CommuteDaysColumnChart";

export default function CommuteDays({ data }) {
  return (
    <Flex
      minWidth="350px"
      maxWidth="1100px"
      alignSelf={["center", "start"]}
      align={["center", "flex-start"]}
      flex={[1, 2]}
      direction="column"
      gap={["10px", "20px"]}
      px={["5px", "50px"]}
      py={["25px", "50px"]}
      justify="center"
      border="1px dashed red"
    >
      <Flex direction="column" width="100%">
        <Text fontWeight={600} fontSize="33px" lineHeight="37px" py="15px">
          Travelling to Work Days
        </Text>
        <Text fontSize="19px" py="15px" width="100%">
          The chart below shows the distribution of staff commute days
          throughout the week.
          <br />
          It helps us understand travel patterns for onsite and hybrid work
          arrangements.
          <br />
          The bar(s) in yellow shows the day(s) staff members most often commute
          to work.
        </Text>
        <CommuteDaysColumnChart
          title="Travel to Work Days"
          data={data["commute-days-distribution"]}
        />
      </Flex>
    </Flex>
  );
}
