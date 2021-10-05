import { useState } from "react";
import {
  FormControl, 
  FormHelperText, 
  Grid,
  Heading,
  Text,
  NumberInput,
  NumberInputField,
  Link,
} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { BackButton, ContinueButton } from "../../components/LinkButton/LinkButton";
import Q3Progress from "../../public/images/progress-bar/q3-progress-bar.svg";

export default function Question3() {
  const { answers, setAnswers } = useForm();
  const [km, setKm] = useState(answers.km);

  const saveAnswers = () => setAnswers((prev) => ({ ...prev, km: km }));

  return (
    <Layout>
      <Q3Progress />
      <Heading as="h1" size="md" mt="6">About how many kilometres is your average work commute (one way)?</Heading>
      <Text mt="4">You can use <Link href="https://maps.google.com.au" color="blue" isExternal={true}>Google Maps</Link> to measure the distance from your home to usual workplace.</Text>
      <Text mt="4">If you currently work from home, let us know how far it is from your home to your usual workplace.</Text>
      <FormControl w="50%" alignSelf="start" mt="4">
        <NumberInput isRequired={true}>
          <NumberInputField
            id="km-input"
            placeholder="Distance in kms"
            value="25"
            onChange={(e) => setKm(e.target.value)}
          />
        </NumberInput>
        <FormHelperText id="km-input-helper">*Required</FormHelperText>
      </FormControl>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <BackButton href="/form/Question2" onClick={saveAnswers} />
        <ContinueButton href="/form/Question4" onClick={saveAnswers} disabled={!km} />
      </Grid>
    </Layout>
  );
}
