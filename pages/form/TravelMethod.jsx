import { useRouter } from "next/router";
import { BackButton, ContinueButton } from "../../components/LinkButton/LinkButton";
import { useState } from "react";
import { Box, Heading, Flex, Container,Text } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import TravelMethodButtons from "../../components/TravelMethodButtons/TravelMethodButtons";
import Q4Progress from "../../public/images/progress-bar/travelMethodSelection-progress-dots.svg";

import { modesOfTransport } from "../../utils/constants";
import Q4Cloud from "../../public/images/clouds/cloud-travelMethodSelection.svg";
import { sendLogs } from "../../utils/sendLogs";

// testing data object

let answ = {
  traveledWay:[
      { Bus: [] },
      { Car: [] },]
}

const tranKey = (Object.keys(Object.assign({}, ...answ.traveledWay)));
console.log(tranKey)
// Testing works for collection initial answered saved transport mode collected in tranKey

export default function TravelMethod() {
  const { answers, setAnswers } = useForm();

  const [transportMode, setTransportMode] = useState(
    answers.mainTransportMode || []
  );
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(
    new Array(modesOfTransport.length).fill(false)
  );

  const saveAnswers = () =>
    setAnswers((prev) => ({ ...prev, mainTransportMode: transportMode }));
  
  // handle when method button clicked

  const methodClickHandler = (eventText) => {
  
    const ind = modesOfTransport.indexOf(eventText);
   
    const copy = [...status];
    copy[ind] = !copy[ind];
    setStatus(copy);

    let selected = transportMode;
   
    selected = [...selected, eventText];
    setTransportMode(selected);
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
      mainTransportMode: transportMode,
      incentive: incentiveMsg(),
    };
  };
  // counter function
  const handleMinus = () => setCount(count - 1);

  const handlePlus = () => setCount(count + 1);
  return (
    <Layout
      isText={true}
      Progress={Q4Progress}
      maxContainerWidth="container.md"
    >
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/form/WorkFromHomeDays"
          onClick={() => {
            saveAnswers();
            sendLogs(logMessage("Back button clicked"));
          }}
        />
      </Box>
      <Q4Cloud />

      <Heading mt={10} mb={10}   fontWeight="700">
        What is your usual travel method to work?
      </Heading>

      <Flex justify={["center", "left"]}
      mb={10}>
        <Text fontSize="18px"  >
        Please tell us how you travel to work on particular days.
        </Text>
      </Flex>

      <Container
        border={["0px none", ".1px solid"]}
        width={["375px", "708px"]}
        maxHeight={"974px"}
        borderColor={["white", "gray.200"]}
        centerContent
        p="0px"
      >
        <TravelMethodButtons
          transportMode={transportMode}
          methodClickHandler={methodClickHandler}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          count={count}
          status={status}
        />

        {/* NEXT BUTTON  */}

        <Flex mb="30px" justify={["center", "end"]} width={["305px", "500px"]}>
          <ContinueButton
            disabled={!status.includes(true)}
            href="/form/ConfirmWFH"
            width={["305px", "105px"]}
            height={["60px", "54.37px"]}
            justifySelf="right"
            onClick={() => {
              saveAnswers();
              sendLogs(logMessage("Next button clicked"));
            }}
          >
            Next
          </ContinueButton>
        </Flex>
      </Container>
    </Layout>
  );
}