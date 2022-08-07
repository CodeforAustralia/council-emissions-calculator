import { Text } from "@chakra-ui/react";

const ResultsHeader1 = (props) => {
  return <Text fontSize={["30px", "50px"]}>{props.children}</Text>;
};

const ResultsHeader2 = (props) => {
  return (
    <Text fontWeight={600} fontSize="33.18px" lineHeight="37px" py="15px">
      {props.children}
    </Text>
  );
};

const ResultsHeader3 = (props) => {
  return (
    <Text fontWeight={600} fontSize="27.65px">
      {props.children}
    </Text>
  );
};

export { ResultsHeader1, ResultsHeader2, ResultsHeader3 };
