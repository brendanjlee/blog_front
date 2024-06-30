import {
  Flex,
  FormControl,
  FormLabel,
  Spacer,
  Input,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";

function Login() {
  return (
    <Center mt={"10px"}>
      <Flex
        bg={"white"}
        w={"55%"}
        flexDir={"column"}
        alignItems={"center"}
        gap={"5px"}
        p={"10px"}
      >
        <Text fontWeight={"bold"} fontSize={45}>
          Login
        </Text>
        <Text>Login to post and comment</Text>
        <FormControl p={"15px"} isRequired>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input type={"text"} id="username" name="username" />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input type={"password"} id="password" name="password"></Input>
        </FormControl>
        <Spacer />
        <Button type="submit" formAction="submit">
          Login
        </Button>
      </Flex>
    </Center>
  );
}

export default Login;
