import {
  Box,
  Text,
  Flex,
  Button,
  Spacer,
  ButtonGroup,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

function NavBar() {
  const { user, logout } = useContext(AuthContext);
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
          {user ? (
            <>
              <ChakraLink as={ReactRouterLink} to="/">
                <Button>New Post</Button>
              </ChakraLink>
              <Button onClick={logout}>Logout</Button>
              <Button>
                <Text>{user.username}</Text>
                <SettingsIcon />
              </Button>
            </>
          ) : (
            <>
              <ChakraLink as={ReactRouterLink} to="/login">
                <Button>Login</Button>
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/signup">
                <Button>Signup</Button>
              </ChakraLink>
            </>
          )}
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default NavBar;
