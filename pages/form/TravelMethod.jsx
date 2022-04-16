import { useState } from "react";
import { Box, FormControl, Heading, Text, Flex ,  Collapse,} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import {
  ContinueButton,
  BackButton,
} from "../../components/LinkButton/LinkButton";
import { TravelMethodButtons } from "../../components/TravelMethodButtons/TravelMethodButtons";
import Q4Progress from "../../public/images/progress-bar/travelMethodSelection-progress-dots.svg";
import Q4Cloud from "../../public/images/clouds/cloud-travelMethodSelection.svg";
import { useRouter } from "next/router";
import { sendLogs } from "../../utils/sendLogs";
export default function Question4() {
  const { answers, setAnswers } = useForm();

  const [transportMode, setTransportMode] = useState(
    answers.mainTransportMode || ""
  );

  const handleTransportMode = (e) => setTransportMode(e.target.value);

  const saveAnswers = () =>
    setAnswers((prev) => ({ ...prev, mainTransportMode: transportMode }));

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

  return (
    <Layout
      isText={true}
      Progress={Q4Progress}
      maxContainerWidth="container.md"
    >
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/form/Question3"
          onClick={() => {
            saveAnswers();
            sendLogs(logMessage("Back button clicked"));
          }}
        />
      </Box>
      <Q4Cloud />

      <Heading width={["100%", "60%"]} fontSize="16px">
        What are your usual travel methods to work?
      </Heading>

      <Flex mt={5} flexDirection={"column"}>
        <Flex flex={1} flexDirection="column" ms={[0, 10]} mt={[8, 5]}>
          <Text fontSize="16px" textAlign={"center"} mb={5}>
            Please tell us how you travel to work on particular days.
          </Text>
          <FormControl
            isRequired
            border=".1px solid"
            width={["305px", "708px"]}
            height={["400px", "503.37px"]}
            borderColor={["white", "gray.200"]}
          >
            <Box flex={1} mb={5} mt={5}>
              <Text fontSize="16px" textAlign={"center"}>
                Select the ways you generally travel to work.
              </Text>
            </Box>
            <TravelMethodButtons handleTransportMode={handleTransportMode}  />
{/* Collapse on carpool selection*/}
<Collapse in={transportMode === "Carpool"}>
          <Text
            mb={5}
            fontSize={[15, 17]}
            px="20px"
            py="12px"
            color="#155724"
            bg="#D4EDDA"
          >
           How many other people would you most likely to carpool with?
          </Text>
        </Collapse>
        {/* Button for next page */}
            <Flex justify={["center", "end"]}>
              <ContinueButton
                disabled={!transportMode}
                href="/form/Question5"
                width={["99px", "105px"]}
                height={["60px", "54.37px"]}
                onClick={() => {
                  saveAnswers();
                  sendLogs(logMessage("Next button clicked"));
                }}
              >
                Save
              </ContinueButton>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Layout>
  );
}
