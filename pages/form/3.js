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

export default function Question3() {
  const { answers, setAnswers } = useForm();
  const [modes, setModes] = useState(answers.transportModes);

  return (
    <Layout>
      <Heading>Question 3/5</Heading>
      <Text textAlign="center" mb={6}>
        <br />
        How did you travel to work last week?
        <br /> Note that you can pick a different mode for each direction (i.e.
        if you went in by bus but returned by train)
      </Text>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th />
            {getDaysOfTravel(answers.week).map((mode) => (
              <Th key={mode} textAlign="center">
                {mode}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {modesOfTransport.map((mode) => (
            <Tr key={mode}>
              <Td>{mode.charAt(0).toUpperCase() + mode.slice(1)}</Td>
              {getDaysOfTravel(answers.week).map((day) => (
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
        href="/form/4"
        onClick={() =>
          setAnswers((prev) => ({
            ...prev,
            transportModes: modes,
          }))
        }
      >
        Continue
      </LinkButton>
    </Layout>
  );
}
