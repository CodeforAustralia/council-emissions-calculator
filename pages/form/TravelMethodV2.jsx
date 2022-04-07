import ContinueButton, {
    BackButton,
  } from "../../components/LinkButton/LinkButton";
  import { useState } from "react";
  import {
    Box,
    Heading,
    Flex,
    Container,
  } from "@chakra-ui/react";
  import Layout from "../../components/Layout/Layout";
  import useForm from "../../components/FormProvider";
  import ModesOfTransportButtons from "../../components/TravelMethodButtons/ModeOfTransportButtons";
  import Q4Progress from "../../public/images/progress-bar/travelMethodSelection-progress-dots.svg";
  import Q4Cloud from "../../public/images/clouds/cloud-travelMethodSelection.svg";
  import { useRouter } from "next/router";
  import { sendLogs } from "../../utils/sendLogs";
  
  export default function TravelMethod() {
    const { answers, setAnswers } = useForm();
  
    const [transportMode, setTransportMode] = useState(
      answers.mainTransportMode || []
    );
  
    const [show, setShow] = useState(false);
    const saveAnswers = () =>
      setAnswers((prev) => ({ ...prev, mainTransportMode: transportMode }));
    const [count, setCount] = useState(0);
  
    // handle when method button clicked
  
    const methodClickHandler = (e) => {
      const methodClicked = e.target.value;
  
      if (methodClicked === "Carpool") {
        setShow(!show);
      }
  
      let selected = transportMode;
      // ? This line may be needed once data object methods to save data is finalised
      // if (selected.includes(e.target.value)) {
      //   const selected = selected.filter((mode) => mode !== e.target.value);
      // } else {
      selected = [...selected, methodClicked];
      // }
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
            href="/"
            onClick={() => {
              saveAnswers();
              sendLogs(logMessage("Back button clicked"));
            }}
          />
        </Box>
        <Q4Cloud />
        <Heading width={["100%", "60%"]} mb="16px" fontSize="16px">
          {" "}
          Please tell us how you travel to work on particular days.
        </Heading>
  
        <Container
           border={["0px none",".1px solid"]} 
          width={["305px", "708px"]}
          maxHeight={"974px"}
          borderColor={["white","gray.200" ]}
          centerContent
        >
          <ModesOfTransportButtons  transportMode={transportMode}
          methodClickHandler={methodClickHandler}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          count={count}
          show={show}/>
          
        
        
          {/* NEXT BUTTON  */}
  
          <Flex mb="30px" justify={["center", "end"]} width={["305px", "500px"]}>
            <ContinueButton
              
              // mainTransportMode: transportMode,
              disabled={!transportMode.length > 0}
              href="/form/Question5"
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
  