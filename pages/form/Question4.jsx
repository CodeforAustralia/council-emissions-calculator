import { useState } from "react";

import {
  Heading,
  Box,
  Text,
  Flex,
  Select,
  Stack,
  Center,
  Grid,
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

  // selectedMode
  const [selectedMode, setSelectedMode] = useState(
    answers.mainTransportMode || ""
  );

  const saveAnswers = () =>
    setAnswers((prev) => ({ ...prev, mainTransportMode: selectedMode }));

  return (
    <Layout isText={true} Progress={Q4Progress}>
      <Box margin={"50px 0px 50px"}>
        <Q4Cloud />
      </Box>

      <Heading
        fontSize="40px"
        mt="6"
        fontWeight={700}
        maxWidth={"624px"}
        textAlign={"center"}
        marginBottom={"30px"}
      >
        Select the main way you travel to work
      </Heading>
      {/* Responsive buttons */}

      <Box fontSize="20px" mr="10px" textAlign="left">
        <Text my={2} maxWidth={"550px"}>
          For example, if you drive 2km to the train and then catch the train
          for 15km, choose 'Train' as your way of travel.
        </Text>
        <Text my={2} maxWidth={"550px"}>
          If you work fully from home, respond to this questions as if you were
          to travel to work.
        </Text>
      </Box>
      {/* button is centered on a smaller screen. */}
      <Flex
        maxWidth="full"
        margin={"50px 0px 50px"}
        flexDirection={["column", "row"]}
      >
        <Center>
          {/* <Stack direction="column" spacing="15px" justifyContent="center"> */}
          <Select
            maxWidth={"230px"}
            textAlign="center"
            placeholder="Train"
            color="#044B7F"
            h="55px"
            fontWeight="bold"
            onChange={(e) => setSelectedMode(e.target.value)}
            border=".2px solid #044B7F"
          >
            {modesOfTransport.map((mode) => (
              <option
                fontSize="lg"
                key={mode}
                value={mode}
                selected={mode === selectedMode}
              >
                {mode}
              </option>
            ))}
          </Select>
          {/* </GridItem> */}
          <Box maxWidth={"450px"} h="55px">
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <BackButton href="/form/Question3" onClick={saveAnswers} />
              <ContinueButton
                href="/form/Question5"
                onClick={saveAnswers}
                // disabled={!km}
              />
            </Grid>
            {/* <BackButton href="/form/Question3" onClick={saveAnswers} />
              <ContinueButton href="/form/Question5" onClick={saveAnswers} /> */}

            {/* </Stack> */}
          </Box>
        </Center>
      </Flex>
    </Layout>
  );
}
