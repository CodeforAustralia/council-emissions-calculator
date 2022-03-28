import { useState } from "react";
import { Text, Box, Flex, Collapse, Spacer, Icon } from "@chakra-ui/react";
import LinkButton from "../LinkButton/LinkButton";
import Pencil from "../../public/images/other/Pencil.svg"

export default function ConfirmDetailsContainer({ methodIcon, title }) {

  const [ openContainer, setOpenContainer ] = useState(false);

  const handleClick = () => {
    (openContainer == false) ? setOpenContainer(true) : setOpenContainer(false)
  }

  return (
    <Box 
      direction="column"
      align="space-between" 
      borderWidth="2px" 
      borderRadius="lg" 
      px="3%"
      py="5%"
    >
    <Flex>
      <Flex>
        <Icon 
          justifySelf="end"
          w={7} 
          h={7} 
          as={methodIcon}
        />
        <Spacer />
        <Text
        >
          {title}
        </Text>
      </Flex>
      <Spacer />
        <Icon 
          justifySelf="end"
          as={Pencil} 
          w={7} 
          h={7} 
          onClick={() => handleClick()}
        />
      </Flex>
      <Collapse in={openContainer}>
        <Text>
          Test data inside collapsible part of the container
        </Text>
      </Collapse>
    </Box>
  )
}