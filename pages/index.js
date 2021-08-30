import { Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import LinkButton from "../components/LinkButton/LinkButton";

export default function Home() {
  return (
    <Layout>
      <Heading>Your Weekly Commute</Heading>
      <Text>
        <br />
        <b>Let&apos;s calculate the impact of your work commute.</b>
        <br />
        <br /> We&apos;ll ask some questions about how you got to and from your
        work last week. This doesn&apos;t include any travel you may have done
        as part of your work.
        <br />
        <br />
        This form will take approximately 3 minutes to complete.
        <br />
      </Text>
      <LinkButton href="/form/Question1">Start</LinkButton>
    </Layout>
  );
}
