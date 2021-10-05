import { Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import LinkButton from "../components/LinkButton/LinkButton";
import HomePageImage from "../public/images/home-page-image.svg";

function Progress() {
  return <></>
}

export default function Home() {
  return (
    <Layout Progress={Progress} isText={true} >
      <Heading>Your Weekly Commute</Heading>
      <HomePageImage />
      <Text>
        <b>Let&apos;s calculate the impact of your work commute.</b>

        We&apos;ll ask some questions about how you got to and from your
        work last week. This doesn&apos;t include any travel you may have done
        as part of your work.
      </Text>
      <Text>
        This form will take approximately 3 minutes to complete.
      </Text>
      <LinkButton href="/form/Question1">Start</LinkButton>
    </Layout>
  );
}
