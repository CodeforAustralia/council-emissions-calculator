import {
  Flex,
  Link,
  ListItem,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  Th,
  UnorderedList,
} from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import TextBlock from "../components/TextBlock/TextBlock";

export default function howWeCalculate() {
  return (
    <Layout isText={true} maxContainerWidth="100%">
      <Flex
        direction={["column-reverse", "row"]}
        px={["10px", "50px"]}
        py="48px"
        gap="50px"
        width="100%"
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
          <Text fontWeight={600} fontSize="34px" py={[0, "30px"]}>
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
            We use the responses collected from the two week-long survey on how
            employees travelled to work to estimate how much CO2 is emitted by
            employees’ commutes in one typical work week.
            <br />
            <br />
            162 employees responded to the survey, sharing their mode of
            transport, the distance of their commute, and what days they worked
            on site or from home. People who carpooled also told us how many
            passengers were in the car with them.
            <br />
            <br />
            Since we only have answers for one week for a portion of employees,
            we can’t say what the whole council’s emissions would be, but we can
            better understand commute patterns and the emissions that are
            associated with them.
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
              <Text fontSize="16px">
                To calculate each employee’s commute emissions, we looked at how
                far they travelled by each mode of transport, and used this
                emissions table to calculate the emissions from that travel¹:
              </Text>
              <TableContainer>
                <Table
                  variant="unstyled"
                  css={{
                    tableLayout: "fixed",
                  }}
                >
                  <TableCaption />
                  <Thead>
                    <Tr>
                      <Th>
                        Mode of <br /> Transport
                      </Th>
                      <Th isNumeric>
                        Emissions <br />
                        Factor <br />
                        (kg of CO2 <br />
                        emitted per <br />
                        person km <br />
                        travelled)
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr
                      css={{
                        background: "#60aaa0",
                        color: "white",
                      }}
                    >
                      <Td>Car</Td>
                      <Td isNumeric>0.244</Td>
                    </Tr>
                    <Tr>
                      <Td>Motorbike</Td>
                      <Td isNumeric>0.12</Td>
                    </Tr>
                    <Tr
                      css={{
                        background: "#60aaa0",
                        color: "white",
                      }}
                    >
                      <Td>Bus</Td>
                      <Td isNumeric>0.018</Td>
                    </Tr>
                    <Tr>
                      <Td>Train/Tram</Td>
                      <Td isNumeric>0.029</Td>
                    </Tr>
                    <Tr
                      css={{
                        background: "#60aaa0",
                        border: "0px",
                        color: "white",
                      }}
                    >
                      <Td>
                        Bicycle/Walk
                        <br />
                        /Run
                      </Td>
                      <Td isNumeric>0</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <Text>
                The total emissions caused by each vehicle by each employee
                during their typical work week is calculated as:
                <br />
                <br />
              </Text>
              <Text fontWeight={700} fontSize="16px">
                T x 2 x N x E / P
              </Text>
              <Text>
                <br />
                where:
                <br />
                T = daily one-way distance between home and work (km)
                <br />
                2 = multiplies T to capture the return trip to home from work
                <br />
                N = number of days travelled by this mode of transport in a week
                <br />
                E = the “emissions factor” of that mode of transport (as per the
                table above)
                <br />
                P = the number of people in the car (for carpoolers only)
                <br />
                <br />
              </Text>
              <Text fontWeight={700} fontSize="16px">
                Example 1 – single mode:
              </Text>
              <Text>
                Employee A lives 10km from the office, and travelled by car to
                work 5 days a week. Their emissions would be:
                <br />
                <br />
                Car = 10 km x 2 ways x 5 days x 0.244 kg/km = 24.4 kg
                <br />
                Total emissions = 24.4kg Co2 produced in the week
                <br />
                <br />
              </Text>
              <Text fontWeight={700} fontSize="16px">
                Example 2 – carpool:
              </Text>
              <Text>
                Employee B lives 10km from the office, and travelled by car to
                work 5 days a week, with 1 other person in the car.
                <br />
                <br />
                Car = 10 km x 2 way x 5 days x 0.244 kg/km / 2 passengers = 12.2
                kg
                <br />
                Total emissions = 12.2 kg Co2 produced in the week
                <br />
                <br />
              </Text>
              <Text fontWeight={700} fontSize="16px">
                Example 3 – mixed mode:
              </Text>
              <Text>
                Employee C lives 20km from the office, and travelled by train 2
                days/week, and by car 1 day/week.
                <br />
                <br />
                Train/tram = 20 km x 2 ways x 2 days x 0.029 kg/km = 2.32 kg
                <br />
                Car = 20 km x 2 ways x 1 day x 0.15 kg/km = 9.76 kg
                <br />
                Total emissions = 12.08kg Co2 produced in the week
                <br />
                <br />
              </Text>
            </Flex>
            <Flex>
              <Text fontSize="13px" fontStyle="italic" width="100%">
                {
                  "¹ 2018. Transport Strategy Refresh: Transport, Greenhouse Gas Emissions and Air Quality. [ebook] Melbourne: City of Melbourne, p.4. Available at: <https://s3.ap-southeast-2.amazonaws.com/hdp.au.prod.app.com-participate.files/6615/2948/1938/Transport_Strategy_Refresh__Zero_Net_Emissions_Strategy_-_Greenhouse_Gas_Emissions_and_Air_Quality.pdf> [Accessed 11 August 2022]."
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
            , an organisation that builds tech stuff that matters for all levels
            of government.
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
          <Flex background="#E5F4E3" borderRadius="15px 15px 0px 0px">
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
