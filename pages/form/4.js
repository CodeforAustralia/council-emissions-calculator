import { useState } from "react";
import Link from "next/link";
import { Heading, Text, Textarea, Button } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";

export default function Question4() {
  const { answers, setAnswers } = useForm();
  const [incentive, setIncentive] = useState(answers.incentive);

  return (
    <Layout>
      <Heading>Question 4/5</Heading>
      <Text textAlign="center">
        <br />
        Can you think of anything that would encourage you to change your mode
        of transport to work? (e.g., public transport subsidies, carpooling
        arrangements, or other incentives?)
      </Text>
      <Textarea
        mt={8}
        value={incentive}
        onChange={(e) => setIncentive(e.target.value)}
      />
      <Link href="/form/5" passHref>
        <Button
          mt={8}
          px="12"
          colorScheme="blue"
          onClick={() =>
            setAnswers((prev) => ({
              ...prev,
              incentive,
            }))
          }
        >
          Continue
        </Button>
      </Link>
    </Layout>
  );
}
