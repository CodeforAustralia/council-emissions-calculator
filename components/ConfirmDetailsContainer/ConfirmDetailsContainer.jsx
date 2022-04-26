import { Children, useState } from "react";
import { Text, Box, Flex, Collapse, Spacer, Icon, Button } from "@chakra-ui/react";
import Pencil from "../../public/images/other/pencil.svg"

export default function ConfirmDetailsContainer({ methodIcon, title, children }) {

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
            { children }
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
