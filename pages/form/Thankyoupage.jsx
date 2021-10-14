import { Heading, Text, Box } from "@chakra-ui/react";
import TkPage from "../../public/images/clouds/cloud-thankPage.svg";
import { ThankPage } from "../../components/Layout/Layout";

export default function Thankyoupage() {
  return (
    <ThankPage>
      <TkPage />

      <Heading>Thank you for participating!</Heading>

      <Box mt={12}>
        <Text>
          We're collecting responses from 1-19 November, and the results will be
          shared by your work representative at the end of the survey.
        </Text>
      </Box>
      <Box mt={12}>
        <Text>
          Your responses helps us understand how your work commute effects our
          future environment and find ways to reduce our impact.
        </Text>
      </Box>
    </ThankPage>
  );
}
