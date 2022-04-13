import { useState, useEffect } from "react";
import {
  Box,
  Wrap,
  WrapItem,
  Button,
  Heading,
  Text,
  Radio,
  RadioGroup,
  Collapse,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { daysOfWeek } from "../../utils/constants";
import Q2Progress from "../../public/images/progress-bar/q2-progress-dots.svg";
import Q2Cloud from "../../public/images/clouds/cloud-q2.svg";
import LinkButton, { BackButton } from "../../components/LinkButton/LinkButton";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";

const WFH = "full work from home";
const ON_SITE = "full/partial on-site";

export default function Question2() {
  const { answers, setAnswers } = useForm();
  const [daysSelected, setDaysSelected] = useState(answers.travelDays || []);
  const [workMode, setWorkMode] = useState(answers.workMode);

  // in case user goes back to Q1 and reduces numDaysWorked
  useEffect(() => {
    if (parseInt(answers.numDaysWorked) < answers.travelDays.length) {
      setDaysSelected([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveAnswers = () => {
    // saving radio button selection
    setAnswers((prev) => ({ ...prev, workMode: workMode }));

    // cleaning and/or saving days travelled
    const onSiteDays = workMode === ON_SITE ? daysSelected : [];
    setAnswers((prev) => ({ ...prev, travelDays: onSiteDays }));
  };

  const dayClickHandler = function (e) {
    let selected = daysSelected;
    if (selected.includes(e.target.value)) {
      selected = selected.filter((day) => day !== e.target.value);
    } else {
      selected = [...selected, e.target.value];
    }
    setDaysSelected(selected);
  };

  const router = useRouter();

  const logMessage = (msg) => {
    let incentiveMsg = () => {
      if (!!answers.incentive) {
        return "<filled>";
      } else return "<empty>";
    };
    return {
      page: router.pathname,
      event: msg,
      ...answers,
      travelDays: daysSelected,
      workMode: workMode,
      incentive: incentiveMsg(),
    };
  };

  return (
    <Layout isText={true} Progress={Q2Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/form/Question1"
          onClick={() => {
            saveAnswers();
            sendLogs(logMessage("Back button clicked"));
          }}
        />
      </Box>
      <Q2Cloud />

      <Heading>Which day(s) do you travel to work in an average week?</Heading>

      <RadioGroup
        mt={12}
        w="100%"
        textAlign="left"
        onChange={(e) => setWorkMode(e)}
        value={workMode}
      >
        <Radio mb={5} name={WFH} id={WFH} value={WFH}>
          <Text fontSize={[18, 20]} fontWeight={700}>
            I work fully from home
          </Text>
        </Radio>

        <Collapse in={workMode === WFH}>
          <Text
            mb={5}
            fontSize={[15, 17]}
            px="20px"
            py="12px"
            color="#155724"
            bg="#D4EDDA"
          >
            We will use the information of the following two questions to
            calculate the emissions you save by working at home.
          </Text>
        </Collapse>

        <hr style={{ borderTop: "1px dashed var(--chakra-colors-gray-200)" }} />

        <Radio mt={5} name={ON_SITE} id={ON_SITE} value={ON_SITE}>
          <Text fontSize={[18, 20]} fontWeight={700}>
            {workMode === ON_SITE
              ? `I work on-site on ${daysSelected.length} out of ${answers.numDaysWorked} workdays.`
              : `I work on-site on...`}
          </Text>
        </Radio>
      </RadioGroup>

      <Collapse in={workMode === ON_SITE}>
        <Wrap justify="left" spacing={[5, 2]} mt={5}>
          {daysOfWeek.map((day) => (
            <WrapItem key={day} justifyContent="center">
              <Button
                w={["90vw", "144px"]}
                h="55px"
                variant={daysSelected.includes(day) ? "solid" : "outline"}
                disabled={
                  !daysSelected.includes(day) &&
                  daysSelected.length == answers.numDaysWorked
                }
                colorScheme="blue"
                onClick={dayClickHandler}
                value={day}
              >
                {day}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
      </Collapse>

      <LinkButton
        disabled={
          !(
            workMode === WFH ||
            (workMode === ON_SITE && daysSelected.length > 0)
          )
        }
        href="/form/Question3"
        width={["90vw", "90%"]}
        onClick={() => {
          saveAnswers();
          sendLogs(logMessage("Next button clicked"));
        }}
      >
        Next
      </LinkButton>
    </Layout>
  );
}
