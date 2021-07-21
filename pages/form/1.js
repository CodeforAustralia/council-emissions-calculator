import Link from "next/link";
import { Heading, Text, Input, Button } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";

export default function Question1() {
  const { answers, setAnswers } = useForm();

  const handleQuestion1 = (e) =>
    setAnswers((prev) => ({ ...prev, km: e.target.value }));

  return (
    <Layout>
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
        value={answers.km}
        onChange={handleQuestion1}
      />
      <Link href="/form/2" passHref>
        <Button mt={8} px="12" colorScheme="blue" disabled={!answers.km}>
          Continue
        </Button>
      </Link>
    </Layout>
  );
}
