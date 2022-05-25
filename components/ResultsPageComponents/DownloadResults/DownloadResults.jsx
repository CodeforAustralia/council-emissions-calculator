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
      minwidth="364px"
      direction="column"
      align="center"
      justify="center"
    >
      <Flex gap="17px" justify="center">
        <Flex 
          direction="column" 
          background="rgba(221, 221, 229, 0.1)" 
          border="0.613005px solid #DDDDE5"
          boxShadow="0px 0px 22.5px rgba(35, 47, 78, 0.14)"
          borderRadius="13.5px 0px 0px 0px"
          align="center"
          justify="center"
          width="173px"
          height="86px"
          px="30%"
        >
          <Box><DownloadPdf /></Box>
          <Text fontSize="12px" font="Public Sans" fontWeight={600} lineHeight="13px">Download this page</Text>
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
