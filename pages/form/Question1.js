import { useState } from "react";
import { Heading, Text, Input, Button } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import LinkButton from "../../components/LinkButton/LinkButton";
import { Progress } from "@chakra-ui/react"
import OurProgressBar from "../../components/ProgressBar/OurProgressBar";

export default function Question1() {
  const { answers, setAnswers } = useForm();
  const [km, setKm] = useState(answers.km);

  return (
    <Layout>
      <OurProgressBar progressValue={20} />
      <Heading>Question 1/5</Heading>
      <Text textAlign="center">
        <br />
        About how many kilometres is your usual commute (one way)?
        <br /> If you work from home all week, let us know how far it is from
        your home to your usual workplace, so we can calculate the emissions you
        saved by working at home.
      </Text>
      <Input
        mt={8}
        maxW={280}
        type="number"
        required
        value={km}
        onChange={(e) => setKm(e.target.value)}
      />
      <LinkButton
        href="/form/Question2"
        disabled={!km}
        onClick={() =>
          setAnswers((prev) => ({
            ...prev,
            km,
          }))
        }
      >
        Continue
      </LinkButton>
    </Layout>
  );
}
