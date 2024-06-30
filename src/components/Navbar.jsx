import {
  Box,
  Flex,
  Button,
  Spacer,
  ButtonGroup,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

function NavBar() {
  const navMargin = "20px";

  return (
    <Box bg="white" w="100%" h="4rem">
      <Flex h="100%" alignItems={"center"} ml={navMargin} mr={navMargin}>
        <Button variant="link" fontSize={32}>
          <ChakraLink as={ReactRouterLink} to="/">
            Blog
          </ChakraLink>
        </Button>
        <Spacer />
        <ButtonGroup>
          <ChakraLink as={ReactRouterLink} to="/login">
            <Button>Login</Button>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/signup">
            <Button>Signup</Button>
          </ChakraLink>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default NavBar;
