import {
  Flex,
  FormControl,
  FormLabel,
  Spacer,
  Input,
  Text,
  Center,
  Button,
  Alert,
  AlertIcon,
  Box,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import util from "../../utils/validate";
import AuthContext from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { login } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // validate input
    if (!util.validateLogin(username, password)) {
      setError(
        "Username must be at least 5 characters and password must be at least 8 characters"
      );
      return;
    }

    try {
      // res: {token, expiresIn, message}
      const res = await login(username, password);
      console.log(res);

      setSuccess(true);
      navigate("/");
    } catch (err) {
      console.log(err);
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
          Login
        </Text>
        <Text>Login to post and comment</Text>
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
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              type={"text"}
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type={"password"}
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </FormControl>
          <Spacer />
          <Button type="submit" formAction="submit">
            Login
          </Button>
        </form>
      </Flex>
    </Center>
  );
}

export default Login;
