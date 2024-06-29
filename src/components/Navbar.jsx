import { Box, Flex, Button, Spacer, ButtonGroup } from "@chakra-ui/react";

function NavBar() {
  const navMargin = "20px";

  return (
    <Box bg="white" w="100%" h="4rem">
      <Flex h="100%" alignItems={"center"} ml={navMargin} mr={navMargin}>
        <Button variant="link" fontSize={32}>
          Blog
        </Button>
        <Spacer />
        <ButtonGroup>
          <Button>Login</Button>
          <Button>Singup</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default NavBar;
