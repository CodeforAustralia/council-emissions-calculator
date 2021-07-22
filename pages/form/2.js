import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Radio,
  RadioGroup,
  Heading,
  Text,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { daysOfWeek } from "../../utils/constants";
import LinkButton from "../../components/LinkButton/LinkButton";

export default function Question2() {
  const { answers, setAnswers } = useForm();
  const [days, setDays] = useState(answers.week);

  return (
    <Layout>
      <Heading>Question 2/5</Heading>
      <Text textAlign="center" mb={6}>
        <br />
        Where did you work last week? <br />
        If you didn&apos;t work on a given day, don&apos;t select anything.
      </Text>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Day:</Th>
            <Th>Office (or onsite) vs home</Th>
          </Tr>
        </Thead>
        <Tbody>
          {daysOfWeek.map((day, i) => (
            <Tr key={day}>
              <Td>{day}</Td>
              <Td>
                <RadioGroup
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
                </RadioGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
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
