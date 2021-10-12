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
import LinkButton from "../../components/LinkButton/LinkButton";

const WFH = "full work from home";
const ON_SITE = "full/partial on-site";

export default function Question2() {
  const { answers, setAnswers } = useForm();
  const [daysSelected, setDaysSelected] = useState(answers.travelDays || []);
  const [workMode, setWorkMode] = useState(answers.workMode);

  // For testing purposes: sets answers.nWorkDays to 5 on load
  // useEffect(() => {
  //   setAnswers(prev => ({...prev, nWorkDays: 5}))
  // }, [])

  const saveAnswers = () => {
    // saving radio button selection
    setAnswers(prev => ({...prev, workMode: workMode}));

    // cleaning and/or saving days travelled
    const onSiteDays = (workMode === ON_SITE) ? daysSelected : [];
    setAnswers(prev => ({ ...prev, travelDays: onSiteDays }));
  }

  const dayClickHandler = function (e) {
    let selected = daysSelected;
    if (selected.includes(e.target.value)) {
      selected = selected.filter(day => day !== e.target.value);
    } else {
      selected = [...selected, e.target.value];
    }
    setDaysSelected(selected);
  }

  return (
    <Layout isText={true} Progress={Q2Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton onClick={saveAnswers} href="/form/Question1"/>
      </Box>
      <Q2Cloud />

      <Heading>
        Which day(s) do you travel to work in an average week?
      </Heading>

      <RadioGroup mt={12} w="100%" textAlign="left" onChange={e => setWorkMode(e)} value={workMode}>
        <Radio mb={5} name={WFH} id={WFH} value={WFH}>
          <Text fontSize={[18, 20]} fontWeight={700}>
            I work fully from home
          </Text>
        </Radio>

        <Collapse in={workMode === WFH}>
            <Text mb={5} fontSize={[15, 17]} px="20px" py="12px" color="#155724" bg="#D4EDDA">
              We will use the information of the following two questions to calculate the emissions you save by working at home.
            </Text>
        </Collapse>

        <hr style={{borderTop: "1px dashed var(--chakra-colors-gray-200)"}} />

        <Radio mt={5} name={ON_SITE} id={ON_SITE} value={ON_SITE}>
          <Text fontSize={[18, 20]} fontWeight={700}>
            I work on-site on...
          </Text>
        </Radio>
      </RadioGroup>

      <Collapse in={workMode === ON_SITE}>
        <Text mt={5} fontSize={17} fontWeight={500} color={daysSelected.length == answers.nWorkDays ? "green" : "" }>
          {`You work on-site ${daysSelected.length} of ${answers.nWorkDays} days.`}
        </Text>

        <Wrap justify="left" spacing={[5, 2]} mt={2}>
          {daysOfWeek.map(day => (
            <WrapItem key={day} justifyContent="center">
              <Button
                w={["90vw", "144px"]}
                h="55px"
                variant={daysSelected.includes(day) ? "solid" : "outline"}
                disabled={!daysSelected.includes(day) && daysSelected.length == answers.nWorkDays}
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
        width={["90vw", "90%"]}
        href="/form/Question3"
        onClick={saveAnswers}
        disabled={!(workMode === WFH || (workMode === ON_SITE && daysSelected.length > 0))}
      >
        Next
      </LinkButton>

    </Layout>
  );
}

