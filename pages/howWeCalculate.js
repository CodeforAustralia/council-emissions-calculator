import {
  Flex,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Icon,
} from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import TextBlock from "../components/TextBlock/TextBlock";
import Sigma from "../public/images/how-we-calculate/sigma.svg";
import Formula1 from "../public/images/how-we-calculate/formula-1.svg";
import Formula2 from "../public/images/how-we-calculate/formula-2.svg";
import Formula3 from "../public/images/how-we-calculate/formula-3.svg";

export default function howWeCalculate() {
  return (
    <Layout isText={true} maxContainerWidth="100%">
      <Flex
        direction={["column-reverse", "row"]}
        px={["10px", "50px"]}
        py="48px"
        gap="50px"
      >
        <Flex width={["100%", "70%"]} direction="column">
          <Link
            fontWeight={700}
            fontSize="16px"
            pb={["20px", "30px"]}
            href="/results"
          >
            Work Commute Survey Results / Carbon Emissions Calculating and
            reporting
          </Link>
          <Text
            fontWeight={600}
            fontSize="34px"
            py={[0, "30px"]}
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            Carbon Emission Calculation and Reporting
          </Text>
          <TextBlock title="What is this?" anchor="whatIsIt">
            The carbon calculator uses commuting information supplied by Council
            staff to calculate the volume of carbon emissions associated with
            staff commuting to and from work. The results display valuable
            insights on commuting habits, preferred transport types, and
            emissions generated. These insights can help inform Council{"'"}s
            2026 goal to increase the use of Active, Public, and shared commute
            methods to 20% or more.
          </TextBlock>
          <TextBlock title="How does it work?" anchor="howItWorks">
            The calculator uses inputs from the staff survey, taking into
            account commute distance and transport modes. It plugs those numbers
            into this formula from the{" "}
            <Link
              color="#044B7F"
              textDecoration="underline"
              textUnderlineOffset="3px"
              fontWeight={700}
              href="https://ghgprotocol.org"
            >
              Greenhouse Gas Protocol
            </Link>{" "}
            that calculates the CO2e emissions from employee travel. The results
            report provides details on the calculations and emissions factors
            used.
          </TextBlock>
          <Flex direction="column" width={["100%", "90%"]} py="24px" gap="10px">
            <Flex justify="center" background="#60AAA0">
              <Text fontSize="16px" color="#FFFFFF" fontWeight={700} p="10px">
                CO2e emissions from employee travel ={" "}
              </Text>
            </Flex>
            <Flex
              background="#F3F3F3"
              justify="center"
              direction="column"
              p="20px"
              gap="10px"
            >
              <Text fontWeight={700} fontSize="16px">
                first, sum across all employees to determine total distance
                travelled using each vehicle type:
              </Text>
              <Formula1 alt="d = ∑(t x 2 x w)" />
              <Text>
                where:
                <br />
                d = total distance travelled by vehicle type (vehicle-km or
                passenger-km)
                <br />
                t = daily one-way distance between home and work (km)
                <br />
                w = number of commuting days per year
                <br />
                total distance travelled by vehicle type (vehicle-km or
                passenger-km) = <Icon as={Sigma} alt="sigma" /> (daily one-way
                distance between home and work (km) {"\u2715"} 2 {"\u2715"}{" "}
                number of commuting days per year)
              </Text>
              <Text fontWeight={700} fontSize="16px">
                then, sum across vehicle types to determine total emissions:
              </Text>
              <Formula2 alt="C = ∑(d x e)" />
              <Text>
                where:
                <br />
                C = kg CO2 e from employee commuting
                <br />
                d = total distance travelled by vehicle type (vehicle-km or
                passenger-km)
                <br />
                e = kg CO2 e/vehicle-km or kg CO2 e/passenger-km
                <br />
                kg CO2 e from employee commuting ={" "}
                <Icon as={Sigma} alt="sigma" />
                (total distance travelled by vehicle type (vehicle-km or
                passenger-km) {"\u2715"} vehicle specific emission factor (kg
                CO2 e/vehicle-km or kg CO2 e/passenger-km))
                <br />
              </Text>
              <Text fontSize="23px" fontWeight={700}>+</Text>
              <Text>
                <b>(optionally) for each energy source used in teleworking:{" "}
                <Icon as={Sigma} alt="sigma" />
                (quantities of energy consumed (kWh) {"\u2715"} emission
                factor for energy source (kg CO2 e/kWh))</b>
              </Text>
              <Formula3 alt="∑ (q x f)" />
              <Text>
                where:
                <br />
                q = quantities of energy consumed (kWh)
                <br />
                f = emission factor for energy source (kg CO2 e/kWh)                
              </Text>
            </Flex>
            <Flex>
              <Text fontSize="13px" fontStyle="italic">
                {
                  "Reference: Calculation formula [7.1] Distance-based method, Technical Guidance for Calculating Scope 3 Emissions, accessed 8th July 2022<https://ghgprotocol.org/sites/default/files/standards_supporting/Chapter7.pdf>"
                }
              </Text>
            </Flex>
          </Flex>
          <TextBlock
            title="What can you achieve with the Calculator?"
            anchor="whatCanYouAchieve"
          >
            The results from the carbon calculator provide a point-in-time
            snapshot of a Council{"'"}s staff commute emissions. Analysing
            trends and patterns relating to transport modes and daily emissions
            will allow Council to devise strategies such as ridesharing,
            incentivised modes of transport, or flexible work arrangements, to
            name just a few.
          </TextBlock>
          <TextBlock title="Who made this calculator?" anchor="whoMadeIt">
            While the formula was developed by the Greenhouse Gas Protocol
            Centre of Excellence, the survey and results page were built by a
            volunteer group of problem solvers,{" "}
            <Link
              color="#044B7F"
              textDecoration="underline"
              textUnderlineOffset="3px"
              fontWeight={700}
              href="https://www.codeforaustralia.org/get-involved/civic-makers"
            >
              Civic Makers
            </Link>
            , trying to solve the question of “How can we make our communities
            better?” using civic-tech. We can not solve every problem related to
            our community at once, so we decided to build tools that support
            Council sustainability initiatives. Civic Makers is run by{" "}
            <Link
              color="#044B7F"
              textDecoration="underline"
              textUnderlineOffset="3px"
              fontWeight={700}
              href="https://www.codeforaustralia.org/"
            >
              Code for Australia
            </Link>
            , an organisation that builds tech stuff that matters
            for all levels of government.
          </TextBlock>
          <TextBlock
            title="Why did we make this calculator?"
            anchor="whyWeMadeIt"
          >
            Due to climate change, we want to use our technical skills for the
            public good by supporting governments in responding to the climate
            crisis. We believe assisting them with this calculator would be an
            excellent place to direct our efforts while council budgets and
            resources are under pressure.
          </TextBlock>
        </Flex>
        <Flex
          width={["100%", "25%"]}
          direction="column"
          shadow="0px 0px 7.2px rgba(35, 47, 78, 0.25)"
          borderRadius="15px"
          height="100%"
        >
          <Flex background="#E5F4E3" borderRadius="inherit">
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
                <a href="#whatIsIt">What is this?</a>
              </ListItem>
              <ListItem
                fontWeight={700}
                fontSize="16px"
                lineHeight="24px"
                color="#044B7F"
                pb="12px"
              >
                <a href="#howItWorks">How does it work?</a>
              </ListItem>
              <ListItem
                fontWeight={700}
                fontSize="16px"
                lineHeight="24px"
                color="#044B7F"
                pb="12px"
              >
                <a href="#whatCanYouAchieve">
                  What can you achieve with the calculator?
                </a>
              </ListItem>
              <ListItem
                fontWeight={700}
                fontSize="16px"
                lineHeight="24px"
                color="#044B7F"
                pb="12px"
              >
                <a href="#whoMadeIt">Who made this calculator?</a>
              </ListItem>
              <ListItem
                fontWeight={700}
                fontSize="16px"
                lineHeight="24px"
                color="#044B7F"
              >
                <a href="#whyWeMadeIt">Why did we make this calculator?</a>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
