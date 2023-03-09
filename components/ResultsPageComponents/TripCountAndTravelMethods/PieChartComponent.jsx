import { Flex } from "@chakra-ui/react";
import PieChart from "./PieChart";

export default function PieChartComponent({ title, data, colorList }) {
  return (
    <Flex
      width={["350px", "520px"]}
      borderRadius="15px"
      boxShadow="0px 0px 28px rgba(35, 47, 78, 0.14)"
      border="1px solid #DDDDE5"
      direction="column"
      justify="center"
      py="15px"
    >
      <PieChart title={title} data={data} colorList={colorList} />
    </Flex>
  );
}
