import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import useForm from "../components/FormProvider";
import Layout from "../components/Layout/Layout";
// import capitalize from "../utils/capitalize";
// import { FiDownload } from "react-icons/fi";
// import { getTripTotalsTop3 } from "./api/trips";


// export async function getServerSideProps() {
//   const tripjson = await getTripTotalsTop3();

//   // console.log(`is tripjson ready?: ${ !!tripjson }`);
//   // console.log(`tripjson: ${ JSON.stringify(tripjson) }`);

//   return {
//     props: {
//       data: tripjson,
//     },
//   };
// }


export default function Results({ data }) {
  const { answers } = useForm();
  const { km, mainTransportMode, department, incentive } = answers;

  return (
    <Layout isText={true} maxContainerWidth="1000px">
      <Flex border="2px solid grey" width="100%" gap="20px" p="20px">
        <Flex border="2px solid red" flex={2} p="20px" direction="column">
          Left column section...
        </Flex>
        <Flex border="2px solid red" W="100%" flex={1} p="20px" direction="column">
          Right column section...
        </Flex>
      </Flex>
      <Flex border="2px solid red" width="100%" p="20px" mt="20px" direction="column">
        Survey params

        </Flex>
      <Flex border="2px solid red" width="100%" p="20px" mt="20px" direction="column">
        Distance, Trip count, Emission stats
      </Flex>
      <Flex border="2px solid red" width="100%" p="20px" mt="20px" direction="column">
        Stats in pie charts
      </Flex>
      <Flex border="2px solid red" width="100%" p="20px" mt="20px" direction="column">
        Walking men visualization
      </Flex>
      <Flex border="2px solid red" width="100%" p="20px" mt="20px" direction="column">
        Standing men visualization
      </Flex>
      <Flex border="2px solid red" width="100%" p="20px" mt="20px" direction="column">
        Stats in bar chart
      </Flex>
      <Flex border="2px solid red" width="100%" p="20px" mt="20px" direction="column">
        Summary plus stats in horizontal bar chart
      </Flex>
    </Layout>
  );
}
