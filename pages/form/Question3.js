import { useState } from "react";
import {} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Heading,
  Text,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import getDaysOfTravel from "../../utils/getDaysOfTravel";
import { daysOfWeek, modesOfTransport } from "../../utils/constants";
import LinkButton from "../../components/LinkButton/LinkButton";
import capitalize from "../../utils/capitalize";
import Q3Progress from "../../public/images/progress-bar/q3-progress-bar.svg";

export default function Question3() {
  const { answers, setAnswers } = useForm();
  const [modes, setModes] = useState(answers.transportModes);
  const travelDays = getDaysOfTravel(answers.week);

  if (travelDays.length < 1) {
    return (
      <Layout>
        <Q3Progress />
        <Heading textAlign="center">
          Looks like you are working from home!
        </Heading>
        <Text textAlign="center" mb={6}>
          <br />
          Move to the next question.
        </Text>
        <LinkButton href="/form/Question4">Continue</LinkButton>
      </Layout>
    );
  }

  return (
    <Layout>
      <Q3Progress />
      <Heading>Question 3/5</Heading>
      <Text textAlign="center" mb={6}>
        <br />
        How would you travel to work on a typical week?
        <br />
      </Text>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th />
            {travelDays.map((day) => (
              <Th key={day} textAlign="center">
                {day}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {modesOfTransport.map((mode) => (
            <Tr key={mode}>
              <Td>{capitalize(mode)}</Td>
              {travelDays.map((day) => (
                <Td key={day} textAlign="center">
                  <Checkbox
                    value={mode}
                    onChange={(v) => {
                      const arr = [...modes];
                      if (v.target.checked) {
                        arr[daysOfWeek.indexOf(day)] = v.target.value;
                        setModes(arr);
                      }
                    }}
                  />
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <LinkButton
        href="/form/Question4"
        onClick={() =>
          setAnswers((prev) => ({
            ...prev,
            transportModes: modes,
          }))
        }
        disabled={modes.every((m) => m === "didNotTravel")}
      >
        Continue
      </LinkButton>
    </Layout>
  );
}
