import { useState } from "react";
import {
  Heading,
  Text,
  Box,
  Checkbox,
  Grid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  createBreakpoints,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm, { FormProvider } from "../../components/FormProvider";
import LinkButton from "../../components/LinkButton/LinkButton";
import Q1Progress from "../../public/images/progress-bar/q1-progress-bar.svg";
import { daysOfWeek } from "../../utils/constants";
// const breakpoints = createBreakpoints({
//   sm: "30em",
//   md: "48em",
//   lg: "62em",
//   xl: "80em",
//   "2xl": "96em",
// });
export default function Question1() {
  const { answers, setAnswers } = useForm();
  const [days, setDays] = useState(answers.week);

  const WorkCheckBox = ({ children, value, index }) => {
    return (
      <Checkbox
        bgColor="#FFF"
        border="1px solid #868E96"
        borderRadius="2px"
        p="1rem"
        onChange={(e) => {
          const arr = [...days];
          if (arr[index] === value) arr[index] = "didNotWork";
          else arr[index] = value;
          setDays(arr);
        }}
        isChecked={days[index] === value}
      >
        {children}
      </Checkbox>
    );
  };

  const saveAnswers = (prev) => {
    setAnswers((prev) => ({
      ...prev,
      week: days,
    }));
  };

  return (
    <Layout>
      <Q1Progress
        className="responsivebar"
        viewBox="40 2 550 55"
        height="70"
        width="100%"
        fontSize="2px"
      />
      <Box>
        <Box p={1} lineHeight="4rem">
          <Heading as="h1" size="md">
            Which days and where do you work in an average week?
          </Heading>
          <Text>
            If you didn&apos;t work on a particular day, don&apos;t select
            anything.
          </Text>
        </Box>
        <Table
          variant="striped"
          className="dml_table"
          cellPadding={0}
          cellSpacing={0}
        >
          <Tbody>
            {daysOfWeek.map((day, i) => (
              <Tr key={day}>
                <Td fontWeight="bold" color="#333">
                  {day}
                </Td>
                <Td>
                  <Grid
                    // fontSize={["sm", "md", "lg", "xl"]}

                    className="square-grid"
                    templateColumns="repeat(2, 1fr)"
                    gap={6}
                    color="#212529"
                    w="100%"
                  >
                    <WorkCheckBox fontSize="xs" value="home" index={i}>
                      <p>Work from home</p>
                    </WorkCheckBox>
                    <WorkCheckBox value="office" index={i}>
                      <p>From workplace</p>
                    </WorkCheckBox>
                  </Grid>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <LinkButton href="/" onClick={saveAnswers} variant="outline">
          <svg
            pwidth="23"
            height="14"
            viewBox="0 0 23 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.47622 0.711216C7.56352 0.798302 7.63279 0.901756 7.68005 1.01565C7.72732 1.12955 7.75164 1.25165 7.75164 1.37497C7.75164 1.49828 7.72732 1.62038 7.68005 1.73428C7.63279 1.84818 7.56352 1.95163 7.47622 2.03872L2.51309 6.99997L7.47622 11.9612C7.56338 12.0484 7.63252 12.1519 7.6797 12.2657C7.72687 12.3796 7.75115 12.5017 7.75115 12.625C7.75115 12.7482 7.72687 12.8703 7.6797 12.9842C7.63252 13.0981 7.56338 13.2016 7.47622 13.2887C7.38905 13.3759 7.28557 13.445 7.17169 13.4922C7.0578 13.5394 6.93574 13.5637 6.81247 13.5637C6.6892 13.5637 6.56713 13.5394 6.45325 13.4922C6.33936 13.445 6.23588 13.3759 6.14872 13.2887L0.523717 7.66372C0.436411 7.57663 0.367143 7.47318 0.319881 7.35928C0.272619 7.24538 0.248291 7.12328 0.248291 6.99997C0.248291 6.87665 0.272619 6.75455 0.319881 6.64065C0.367143 6.52676 0.436411 6.4233 0.523717 6.33622L6.14872 0.711216C6.2358 0.62391 6.33926 0.554642 6.45315 0.50738C6.56705 0.460118 6.68915 0.435791 6.81247 0.435791C6.93578 0.435791 7.05788 0.460118 7.17178 0.50738C7.28568 0.554642 7.38913 0.62391 7.47622 0.711216Z"
              fill="var(--chakra-colors-blue-600)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.1875 7C1.1875 6.75136 1.28627 6.5129 1.46209 6.33709C1.6379 6.16127 1.87636 6.0625 2.125 6.0625H21.8125C22.0611 6.0625 22.2996 6.16127 22.4754 6.33709C22.6512 6.5129 22.75 6.75136 22.75 7C22.75 7.24864 22.6512 7.4871 22.4754 7.66291C22.2996 7.83873 22.0611 7.9375 21.8125 7.9375H2.125C1.87636 7.9375 1.6379 7.83873 1.46209 7.66291C1.28627 7.4871 1.1875 7.24864 1.1875 7Z"
              fill="var(--chakra-colors-blue-600)"
            />
          </svg>
          <Text ml="0.5em">Back</Text>
        </LinkButton>
        <LinkButton
          href="/form/Question2"
          disabled={days.every((v) => v === "didNotWork")}
          onClick={saveAnswers}
        >
          Continue
        </LinkButton>
      </Grid>
    </Layout>
  );
}
