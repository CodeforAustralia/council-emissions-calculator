import {
  Text, Flex, Button, Box
} from "@chakra-ui/react";
import DownloadPdf from "../../../public/images/download-results-icons/DownloadPdf.svg"
import DownloadCsv from "../../../public/images/download-results-icons/DownloadCsv.svg"
import Lamp from "../../../public/images/download-results-icons/Lamp.svg"
import GHGProtocol from "../../../public/images/download-results-icons/GHGProtocol.svg"

export default function DownloadResults() {

  return (
    <Flex
      minwidth="350px"
      direction="column"
      align="center"
      justify="center"
      gap="17px"
    >
      <Flex gap="17px" justify="center" height="86px">
        <Flex 
          direction="column" 
          background="rgba(221, 221, 229, 0.1)" 
          border="0.613005px solid #DDDDE5"
          boxShadow="0px 0px 22.5px rgba(35, 47, 78, 0.14)"
          borderRadius="13.5px 0px 0px 0px"
          align="center"
          justify="center"
          width="180px"
        >
          <Box><DownloadPdf /></Box>
          <Text textAlign="center" fontSize="12px" font="Public Sans" fontWeight={600} px="35%" lineHeight="13px">Download this page</Text>
        </Flex>
        <Flex 
          direction="column" 
          background="rgba(221, 221, 229, 0.1)" 
          border="0.613005px solid #DDDDE5"
          boxShadow="0px 0px 22.5px rgba(35, 47, 78, 0.14)"
          borderRadius="0px 13.5px 0px 0px"
          align="center"
          justify="center"
          width="180px"
        >
          <DownloadCsv />
          <Text fontSize="12px" font="Public Sans" fontWeight={600} textAlign="center" px="29%" lineHeight="13px">Downaload survey data</Text>
        </Flex>
      </Flex>
      <Flex 
        direction="column" 
        border="0.613005px solid #DDDDE5"
        boxShadow="0px 0px 7.2px rgba(35, 47, 78, 0.25)"
        borderRadius="0px 0px 13.5px 13.5px"
        align="center"
        justify="center"
        width="377px"
        gap="17px"
        >
        <Flex height="65px" background="#E5F4E3" width="100%" justify="center" align="center">
          <Lamp />
        </Flex>
        <Flex>
          <Flex direction="column">
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
      
    </Flex>
  );
}
