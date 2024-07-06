import {
  Flex,
  FormControl,
  FormLabel,
  Spacer,
  Input,
  Text,
  Center,
  Button,
  Box,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import util from "../../utils/validate";
import auth from "../../api/auth";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // validate input
    if (!util.validateSingup(email, username, password)) {
      setError(
        "Username must be at least 5 characters and password must be at least 8 characters"
      );
      return;
    }

    try {
      const res = await auth.signup(email, username, password);
      console.log(res);

      setSuccess(true);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <Center mt={"10px"}>
      <Flex
        bg={"white"}
        w={"30%"}
        flexDir={"column"}
        alignItems={"center"}
        gap={"5px"}
        p={"10px"}
      >
        <Text fontWeight={"bold"} fontSize={45}>
          Signup
        </Text>
        <Text>Create an account to create your own posts!</Text>
        {error && (
          <Box w="100%" maxW={"md"}>
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          </Box>
        )}
        {success && (
          <Box w="100%" maxW={"md"}>
            <Alert status="success">
              <AlertIcon />
              Login Success
            </Alert>
          </Box>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl p={"15px"} isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type={"email"}
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              type={"text"}
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type={"password"}
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            ></Input>
          </FormControl>
          <Spacer />
          <Button type="submit" formAction="submit">
            Signup
          </Button>
        </form>
      </Flex>
    </Center>
  );
}

export default SignUp;
