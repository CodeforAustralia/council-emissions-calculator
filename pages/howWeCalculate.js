import { Flex, Text } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import TextBlock from "../components/TextBlock/TextBlock"

export default function howWeCalculate() {

  return (
    <Layout isText={true} maxContainerWidth="100%">
      <Flex direction={["column", "row"]} px={["10px", "50px"]} py="48px">
        <Flex width={["100%", "70%"]} direction="column">
          <Text fontWeight={600} fontSize="34px" lineHeight="78px">Carbon Emission Calculation and Reporting</Text>
          <TextBlock title="How does it work?">
            The carbon calculator uses commuting information supplied by Council staff to calculate the volume of carbon emissions associated with staff commuting to and from work.
            The results report displays valuable insights on total carbon emissions by mode of transport, daily trends in emissions, and a breakdown of emissions by the department. These insights can help inform Council strategies and plans to promote more sustainable modes of transport and reduce commuting emissions.
          </TextBlock>
        </Flex>
        <Flex width={["100%", "30%"]} direction="column">
          Right
        </Flex>
      </Flex>
    </Layout>
  );
}
