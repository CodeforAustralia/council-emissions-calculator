import { Flex, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import TextBlock from "../components/TextBlock/TextBlock";
import CalculationFormula from "../public/images/calculation-formula.svg";

export default function howWeCalculate() {
  return (
    <Layout isText={true} maxContainerWidth="100%">
      <Flex
        direction={["column", "row"]}
        px={["10px", "50px"]}
        py="48px"
        gap="50px"
      >
        <Flex width={["100%", "70%"]} direction="column">
          <Text
            fontWeight={600}
            fontSize="34px"
            pb={[0, "30px"]}
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            Carbon Emission Calculation and Reporting
          </Text>
          <TextBlock title="How does it work?">
            The carbon calculator uses commuting information supplied by Council
            staff to calculate the volume of carbon emissions associated with
            staff commuting to and from work. The results report displays
            valuable insights on total carbon emissions by mode of transport,
            daily trends in emissions, and a breakdown of emissions by the
            department. These insights can help inform Council strategies and
            plans to promote more sustainable modes of transport and reduce
            commuting emissions.
          </TextBlock>
        </Flex>
        <Flex
          width={["100%", "30%"]}
          direction="column"
          shadow="0px 0px 7.2px rgba(35, 47, 78, 0.25)"
          borderRadius="15px"
        >
          <Flex background="#E5F4E3">
            <Text fontWeight={700} fontSize="24px" lineHeight="29px" p="34px">
              Table of Contents
            </Text>
          </Flex>
          <Flex>
            <UnorderedList p="24px 34px">
              <ListItem
                fontWeight={700}
                fontSize="16px"
                lineHeight="24px"
                color="#044B7F"
                pb="12px"
              >
                <Link>What is the Calculator and Results page?</Link>
              </ListItem>
              <ListItem
                fontWeight={700}
                fontSize="16px"
                lineHeight="24px"
                color="#044B7F"
                pb="12px"
              >
                <Link>How does it work?</Link>
              </ListItem>
              <ListItem
                fontWeight={700}
                fontSize="16px"
                lineHeight="24px"
                color="#044B7F"
                pb="12px"
              >
                <Link>What can you achieve with the calculator?</Link>
              </ListItem>
              <ListItem
                fontWeight={700}
                fontSize="16px"
                lineHeight="24px"
                color="#044B7F"
                pb="12px"
              >
                <Link>Who made this calculator?</Link>
              </ListItem>
              <ListItem
                fontWeight={700}
                fontSize="16px"
                lineHeight="24px"
                color="#044B7F"
              >
                <Link>Why did we make this calculator?</Link>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
