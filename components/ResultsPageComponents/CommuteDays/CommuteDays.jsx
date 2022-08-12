import { Text, Flex } from "@chakra-ui/react";
import CommuteDaysColumnChart from "./CommuteDaysColumnChart";
import React, { useState, createRef } from "react";

const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  }, [ref]);
  return dimensions;
};

export default function CommuteDays({ data }) {
  const divRef = createRef();
  const dimensions = useRefDimensions(divRef);

  return (
    <Flex
      minWidth="350px"
      maxWidth="1100px"
      width={["100%", "90%", "100%", "100%"]}
      // width={["100%", "50%", "25%", "15%"]}
      alignSelf={["center", "start"]}
      // align={["center", "flex-start"]}
      // flex={[1, 2]}
      direction="column"
      gap={["10px", "20px"]}
      px={["5px", "50px"]}
      py={["25px", "50px"]}
      justify="center"
    >
      <Flex direction="column">
        <Text fontWeight={600} fontSize="33px" lineHeight="37px" py="15px">
          Travelling to Work Days
        </Text>
        <Text fontSize="19px" py="15px">
          The chart below shows the distribution of staff commute days
          throughout the week.
          <br />
          It helps us understand travel patterns for onsite and hybrid work
          arrangements.
          <br />
          The bar(s) in yellow shows the day(s) staff members most often commute
          to work.
        </Text>
        <Text>
          Dimensions: {dimensions.width}w {dimensions.height}h
        </Text>
        {/* <Flex width={["100%", "50%"]} align={["left", "center"]}> */}
        <CommuteDaysColumnChart
          title="Travel to Work Days"
          data={data["commute-days-distribution"]}
        />
        {/* </Flex> */}
      </Flex>
    </Flex>
  );
}
