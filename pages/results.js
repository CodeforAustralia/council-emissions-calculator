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
    <Layout isText={true}>
      <Flex border="2px solid red">

        <Flex border="2px solid red">
          Left column section...
        </Flex>

        <Flex border="2px solid red">
          Right column section...
        </Flex>

      </Flex>
    </Layout>
  );
}
