import { Text, useStyleConfig } from "@chakra-ui/react";

export default function ResultsTopHeader(props) {
  // console.log("props: ", props);
  const { variant, ...rest } = props;

  const styles = useStyleConfig("resultsTopHeaderStyle", { variant });
  return <Text __css={styles} {...rest} />;
}

// export default ResultsTopHeader;
