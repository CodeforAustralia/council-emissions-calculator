import {
  Text, Flex, Button,
} from "@chakra-ui/react";
import DownloadPdf from "../../../public/images/download-results-icons/DownloadPdf.svg"
import DownloadCsv from "../../../public/images/download-results-icons/DownloadCsv.svg"
import Lamp from "../../../public/images/download-results-icons/Lamp.svg"
import GHGProtocol from "../../../public/images/download-results-icons/GHGProtocol.svg"

export default function DownloadResults() {

  return (
    <Flex
      direction="column"
      align={["center", "space-between"]}
      borderWidth="2px"
    >
      <Flex>
        <Flex>
          <DownloadPdf />
          <Text>Download this page</Text>
        </Flex>
        <Flex>
          <DownloadCsv />
          <Text>Downaload survey data</Text>
        </Flex>
      </Flex>
      <Flex>
        <Lamp />
      </Flex>
      <Flex>
        <Flex>
          <Text>How is it calculated?</Text>
          <Text>Developed in compliance with Greenhouse Gas Protocol.</Text>
        </Flex>
        <Flex>
          <GHGProtocol />
        </Flex>
      </Flex>
      <Flex>
        <Text>Read how we have calculated and reported your emissions:</Text>
        <Button>Read</Button>
      </Flex>
    </Flex>
  );
}
