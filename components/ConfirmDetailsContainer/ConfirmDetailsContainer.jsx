import { Children, useState } from "react";
import { Text, Box, Flex, Collapse, Spacer, Icon, Button } from "@chakra-ui/react";
import Pencil from "../../public/images/other/pencil.svg"

export default function ConfirmDetailsContainer({ methodIcon, title, children, describtion }) {

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
      mb="5%"
    >
    <Flex>
      <Flex
        align="flex-start"
      >
        <Icon 
          justifySelf="end"
          w={7} 
          h={7} 
          as={methodIcon}
        />
        <Spacer />
        <Flex
          direction="column"
          align="left"
          pl="15px"
        >
          <Text
            color="#044B7F"
            fontWeight="500"
            fontSize="24px"
          >
            {title}
          </Text>
          { describtion }
        </Flex>
      </Flex>
      <Spacer />
        <Icon 
          justifySelf="end"
          as={Pencil} 
          w={7} 
          h={7} 
          onClick={() => handleClick()}
          display={openContainer ? "none" : "block"}
        />
      </Flex>
      <Collapse in={openContainer}>
        <Flex
          justify="center"
          p={10}
        >
          { children }
        </Flex>
        <Flex
          justify="flex-end"
        >
          <Button
            p={7}
            mt="20px"
            bg="#044B7F"
            variant="solid"
            color="white"
            _hover={{
              bg: "var(--chakra-colors-blue-500)",
            }}
            width="105px"
            H="55px"
            justifySelf="flex-end"
            onClick={() => handleClick()}
          >
            Save
          </Button>
        </Flex>
      </Collapse>
    </Box>
  )
}
