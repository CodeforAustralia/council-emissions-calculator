import { useState } from "react";
import { Heading, Text, Box, Checkbox, Grid } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import LinkButton from "../../components/LinkButton/LinkButton";
import { daysOfWeek } from "../../utils/constants";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";


export default function Question1() {
  const { answers, setAnswers } = useForm();
  const [days, setDays] = useState(answers.week);

  const WorkCheckBox = ({ children, v, i }) => {
    return (
      <Checkbox
        bgColor="#FFF"
        border="1px solid #868E96"
        borderRadius="2px"
        p="1rem"
        onChange={(v) => {
          const arr = [...days];
          arr[i] = v;
          setDays(arr);
        }}
        checked={days[i] === v}
      >
        {children}
      </Checkbox>
    );
  }

  return (
    <Layout>
      <Box overflowY="scroll">

        <Box p={1} lineHeight="4rem">
          <Heading as="h1" size="md">Which days and where do you work in an average week?</Heading>
          <Text>If you didn't work on a particular day, don't select anything.</Text>
        </Box>
        <Table variant="striped">
          <Tbody>
            {daysOfWeek.map((day, i) => (
              <Tr key={day}>
                <Td fontWeight="bold" color="#333">{day}</Td>
                <Td>
                  <Grid templateColumns="repeat(2, 1fr)" gap={6} color="#212529">
                    <WorkCheckBox v="home" i={i}>Work from home</WorkCheckBox>
                    <WorkCheckBox v="office" i={i}>From workplace</WorkCheckBox>
                  </Grid>
                  {/* <RadioGroup
                  onChange={(v) => {
                    const arr = [...days];
                    arr[i] = v;
                    setDays(arr);
                  }}
                >
                  <Radio value="office">Office / Onsite</Radio>
                  <Radio value="home" ml={8}>
                    Home
                  </Radio>
                </RadioGroup> */}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <LinkButton
        href="/form/3"
        disabled={days.every((v) => v === "didNotWork")}
        onClick={() =>
          setAnswers((prev) => ({
            ...prev,
            week: days,
          }))
        }
      >
        Continue
      </LinkButton>
    </Layout>
  );
}
