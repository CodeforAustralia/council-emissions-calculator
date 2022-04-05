import ContinueButton, {
    BackButton,
  } from "../../components/LinkButton/LinkButton";
  import { useState } from "react";
  import {
    Box,
    Button,
    Heading,
    Text,
    Flex,
    SimpleGrid,
    Icon,
    Container,
    Center,
  } from "@chakra-ui/react";
  import Layout from "../../components/Layout/Layout";
  import useForm from "../../components/FormProvider";
  import { modesOfTransport } from "../../utils/constants";
  import { transportIcon } from "../../utils/constants";
  import Counter from "../../components/TravelMethodButtons/CounterCarpool";
  import Q4Progress from "../../public/images/progress-bar/travelMethodSelection-progress-dots.svg";
  import Q4Cloud from "../../public/images/clouds/cloud-travelMethodSelection.svg";
  import { useRouter } from "next/router";
  import { sendLogs } from "../../utils/sendLogs";
  
  const CP = "Carpool";
  
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
          border=".1px solid"
          width={["305px", "708px"]}
          maxHeight={"974px"}
          borderColor="gray.200"
          centerContent
        >
          <Flex
            mt={5}
            width={["268px", "480px"]}
            justifyItem={["center", "left"]}
          >
            <Text mb="12px">Select the ways you generally travel to work.</Text>
          </Flex>
          {/*ALL travel method button selected here */}
          <Center width={["305px", "548px"]} height={["351px", "304px"]}>
            <SimpleGrid columns={3} id="selector" spacingX="15px" spacingY="15px">
              {modesOfTransport.map((mode, i) => (
                <Center key={mode}>
                  <Button
                    fontSize={["16px", "16px"]}
                    height={["100px", "80px"]}
                    width={["91.67px", "150px"]}
                    border="1px"
                    label={mode}
                    value={mode}
                    variant={transportMode.includes(mode) ? "solid" : "outline"}
                    _active={{ border: "solid" }}
                    _hover={{
                      bg: "var(--chakra-colors-blue-500)",
                      color: "#fff",
                    }}
                    colorScheme="blue"
                    onClick={methodClickHandler}
                  >
                    {" "}
                    <Center pos="absolute" fontSize={"16px"} mb={"22px"}>
                      <Icon as={transportIcon[i]} />
                    </Center>
                    <Text fontSize="16px" mt={5}>
                      {mode}
                    </Text>
                  </Button>
                </Center>
              ))}
            </SimpleGrid>
            {/* CARPOOL Question */}
          </Center>
          {/* ! will use the below line when data file field set */}
          {/* {transportMode.includes("Carpool") || mode === "Carpool" && */}
          {/*  use the below line just for testing before data field is ready */}
          {show && (
            <Counter
              handleMinus={handleMinus}
              handlePlus={handlePlus}
              count={count}
            />
          )}
  
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
              Save
            </ContinueButton>
          </Flex>
        </Container>
      </Layout>
    );
  }
  