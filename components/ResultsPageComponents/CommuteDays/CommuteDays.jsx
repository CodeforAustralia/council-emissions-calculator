import { Text, Flex } from "@chakra-ui/react";
import CommuteDaysColumnChart from "./CommuteDaysColumnChart";
import RightPaddedContent from "../SharedComponents/RightPaddedContent";
import SectionHeader from "../SharedComponents/SectionHeader";

export default function CommuteDays({ data }) {
  return (
    <RightPaddedContent>
      <SectionHeader headerName="header2" text="Travelling to Work Days" />
      <Text fontSize="19px" py="15px">
        The chart below shows the distribution of staff commute days throughout
        the week.
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
    </RightPaddedContent>
  );
}
