import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function Footer() {
  return (
    <Box
      backgroundColor={"black"}
      height={"60px"}
      width={"100%"}
      bottom={"0"}
      left={"0"}
      color={"white"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"10px"}
    >
      <Text>Made by brendanjlee</Text>
      <ChakraLink href="https://github.com/brendanjlee" isExternal>
        <ExternalLinkIcon />
      </ChakraLink>
    </Box>
  );
}

export default Footer;
