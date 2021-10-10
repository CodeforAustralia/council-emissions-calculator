import { useState } from "react";
import {
  Box,
  Flex,
  FormControl, 
  FormLabel,
  FormHelperText, 
  Heading,
  Text,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { BackButton, ContinueButton } from "../../components/LinkButton/LinkButton";
import Q3Progress from "../../public/images/progress-bar/q3-progress-dots.svg";
import Q3Cloud from "../../public/images/clouds/cloud-q3.svg"

export default function Question3() {
  const { answers, setAnswers } = useForm();
  const [km, setKm] = useState(answers.km);

  const saveAnswers = () => setAnswers((prev) => ({ ...prev, km: km }));

  return (
    <Layout isText={true} Progress={Q3Progress}>
      <Box>
        <Q3Cloud />
      </Box>
      <Heading 
        fontSize="40px" 
        mt="6" 
        fontWeight={700} 
        maxWidth={"624px"} 
        textAlign={"center"} 
        marginBottom={"30px"} 
      >
        How many kilometres do you usually travel to work, one-way?
      </Heading>
      <Flex flexDirection={["column", "row"]}>
        <Text 
          mt="4" 
          textAlign={"left"} 
          maxWidth={"450px"} 
          width={["100%", "48%"]}
        >
          If you usually work from home, we will use the information you provide to calculate the emissions you save by working at home.
        </Text>
        <Box w={["100%", "48%"]}>
          <FormControl mt="4">
            <FormLabel>
              In kilometers:
            </FormLabel>
            <NumberInput isRequired={true} defaultValue={km}>
              <NumberInputField
                w="100%"
                id="km-input"
                placeholder={"Distance in kms"}
                onChange={(e) => setKm(e.target.value)}
              />
            </NumberInput>
            <FormHelperText id="km-input-helper">
              *Required
            </FormHelperText>
          </FormControl>
          <ContinueButton 
            href="/form/Question4" 
            width="100%"
            topMargin={4}
            onClick={saveAnswers} 
            disabled={!km} 
          />
        </Box>
      </Flex>
    </Layout>
  );
}
