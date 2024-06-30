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

function SignUp() {
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
          Signup
        </Text>
        <Text>Create an account to create your own posts!</Text>
        <FormControl p={"15px"} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type={"email"} id="email" name="email" />
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input type={"text"} id="username" name="username" />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input type={"password"} id="password" name="password"></Input>
        </FormControl>
        <Spacer />
        <Button type="submit" formAction="submit">
          Signup
        </Button>
      </Flex>
    </Center>
  );
}

export default SignUp;
