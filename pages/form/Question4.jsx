import { useState } from "react";
import {
  Box,
  FormControl, 
  FormHelperText, 
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";
import { modesOfTransport } from "../../utils/constants";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import {
  ContinueButton,
  BackButton,
} from "../../components/LinkButton/LinkButton";
import Q4Progress from "../../public/images/progress-bar/q4-progress-dots.svg";
import Q4Cloud from "../../public/images/clouds/cloud-q4.svg";

export default function Question4() {
  const { answers, setAnswers } = useForm();

  const [selectedMode, setSelectedMode] = useState(
    answers.mainTransportMode || ""
  );

  const saveAnswers = () =>
    setAnswers((prev) => ({ ...prev, mainTransportMode: selectedMode }));

  return (
    <Layout isText={true} Progress={Q4Progress}>
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton href="/form/Question3" onClick={saveAnswers} />
      </Box>
      <Q4Cloud />

      <Heading>
        Select the main way you travel to work
      </Heading>

      <Box fontSize="18px" mr="10px" textAlign="left">
        <Text my={2} maxWidth={"550px"}>
          For example, if you drive 2km to the train and then catch the train
          for 15km, choose &apos;Train&apos; as your way of travel.
        </Text>
        <Text my={2} maxWidth={"550px"}>
          If you work fully from home, respond to this questions as if you
          were to travel to work.
        </Text>
      </Box>

      <Box>
        <FormControl mt="4" isRequired>
          <Select
            maxWidth={"330px"}
            textAlign="center"
            h="55px"
            fontWeight="bold"
            onChange={(e) => setSelectedMode(e.target.value)}
            placeholder="Please select"
            border=".2px solid #044B7F"
          >
            {modesOfTransport.map((mode) => (
              <option
                fontSize="lg"
                key={mode}
                selected={mode === selectedMode}
                value={mode}
              >
                {mode}
              </option>
            ))}
          </Select>
          <FormHelperText>
            *Required
          </FormHelperText>
        </FormControl>
      </Box>

      <ContinueButton 
        disabled={!selectedMode} 
        href="/form/Question5"
        onClick={saveAnswers}
        topMargin={4}
      />
    </Layout>
  );
}
