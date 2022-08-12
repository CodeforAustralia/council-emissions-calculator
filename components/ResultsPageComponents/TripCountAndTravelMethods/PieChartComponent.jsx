import { Flex } from "@chakra-ui/react";
import PieChart from "./PieChart";

export default function PieChartComponent({ title, data }) {
  return (
    <Flex
      // width="520px"
      width={["500px", "520px"]}
      // width={["100%", "50%", "25%", "15%"]}
      borderRadius="15px"
      boxShadow="0px 0px 28px rgba(35, 47, 78, 0.14)"
      border="1px solid #DDDDE5"
      direction="column"
      justify="center"
      py="15px"
      // width="100%"
      // width={["100%", "50%", "25%", "15%"]}
      // height="320px"
    >
      <PieChart title={title} data={data} />
    </Flex>
  );
}
