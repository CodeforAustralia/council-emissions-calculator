import { useState } from "react"

import {
  Box,
  FormControl,
  Heading,
  SimpleGrid,
  Text,
  Flex,
  Button,
  Icon,
} from "@chakra-ui/react"
import { modesOfTransport } from "../../utils/constants"
import { transportIcon } from "../../utils/constants"

import Layout from "../../components/Layout/Layout"
import useForm from "../../components/FormProvider"
import {
  ContinueButton,
  BackButton,
} from "../../components/LinkButton/LinkButton"
import Q4Progress from "../../public/images/progress-bar/q4-progress-dots.svg"
import Q4Cloud from "../../public/images/clouds/cloud-q4.svg"
import { useRouter } from "next/router"
import { sendLogs } from "../../utils/sendLogs"
export default function Question4() {
  const { answers, setAnswers } = useForm()

  const [transportMode, setTransportMode] = useState(
    answers.mainTransportMode || ""
  )
  // const { colorMode, toggleColorMode } = useColorMode()
  const saveAnswers = () =>
    setAnswers((prev) => ({ ...prev, mainTransportMode: transportMode }))

  const router = useRouter()

  const logMessage = (msg) => {
    let incentiveMsg = () => {
      if (!!answers.incentive) {
        return "<filled>"
      } else return "<empty>"
    }
    return {
      page: router.pathname,
      event: msg,
      ...answers,
      mainTransportMode: transportMode,
      incentive: incentiveMsg(),
    }
  }

  return (
    <Layout
      isText={true}
      Progress={Q4Progress}
      maxContainerWidth="container.md"
    >
      <Box pos="absolute" top={["2", "5"]} left={["2", "10"]}>
        <BackButton
          href="/form/Question3"
          onClick={() => {
            saveAnswers()
            sendLogs(logMessage("Back button clicked"))
          }}
        />
      </Box>
      <Q4Cloud />

      <Heading width={["100%", "60%"]}>
        What are your usual travel methods to work?
      </Heading>

      <Flex mt={5} flexDirection={["column", "row"]}>
        <Flex flex={1} flexDirection="column" ms={[0, 10]} mt={[10, 5]}>
          <Text fontSize="18px" textAlign={"center"} mb={5}>
            Please tell us how you travel to work on particular days.
          </Text>
          <FormControl
            isRequired
            border=".1px solid"
            px={(15, 1)}
            py={["65px", "67px"]}
            // width={['407px', '470px']}
            // border="solid"
            borderColor="gray.200"
          >
            <Box flex={1} mb={5}>
              <Text fontSize="18px" textAlign={"center"}>
                Select the ways you generally travel to work.
              </Text>
            </Box>
            {/* <Flex> */}
            <SimpleGrid
              minChildWidth="115px"
              // maxChildWidth="153px"
              justifyContent="center"
              defaultValue={transportMode}
              id="selector"
            >
              {modesOfTransport.map((mode, i) => (
                <Box
                  height="80px"
                  textAlign={"center"}
                  key={mode}
                  // flex={1}
                  // flexDirection="column"
                  // justifyContent="center"
                >
                  {/* buttons */}
                  <Flex justifyContent="center" flexDirection={"row"} mt={2.5}>
                    <Button
                      variant="outline"
                      fontSize={[13, 15]}
                      color="#044B7F"
                      height={["58px", "57px"]}
                      width={["112px", "141px"]}
                      border="1px"
                      borderColor="044B7F.300"
                      onChange={(e) => setTransportMode(e.target.value)}
                      colorScheme="#044B7F"
                      value={mode}

                      // onClick={toggleColorMode}
                    >
                      <Box
                        // justifyContent="center"
                        pos="absolute"
                        top={["3px", "2px"]}
                        // display={'block'}
                        fontSize={["17px", "16x"]}
                        pb={["4px", "3px"]}
                        // mb={4}
                        // px={2}
                        // Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                      >
                        <Icon as={transportIcon[i]} />
                      </Box>
                      {mode}
                    </Button>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
            {/* </Flex> */}
            {/* <Select
              fontWeight="bold"
              onChange={(e) => setTransportMode(e.target.value)}
              placeholder="Please select"
              border=".2px solid #044B7F"
              height="55px"
              defaultValue={transportMode}
              id="selector"
            >
              {modesOfTransport.map((mode) => (
                <option
                  fontSize="lg"
                  key={mode}
                  value={mode}
                >
                  {mode}
                </option>
              ))}
            </Select> */}
            <ContinueButton
              justifyContent="centre"
              disabled={!transportMode}
              href="/form/Question5"
              topMargin={4}
              width={["17vw", "107px"]}
              onClick={() => {
                saveAnswers()
                sendLogs(logMessage("Next button clicked"))
              }}
            />
          </FormControl>
        </Flex>
      </Flex>
    </Layout>
  )
}
