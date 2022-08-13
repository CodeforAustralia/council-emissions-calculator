import { Text } from "@chakra-ui/react";
import designSpecs from "../../../styles/designSpecs.json";

export default function SectionHeader({ headerName, text }) {
  const { headers } = designSpecs;

  const fontSettings = {
    ...headers[headerName],
  };

  return <Text {...fontSettings}>{text}</Text>;
}
