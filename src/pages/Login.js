import { Link } from "react-router-dom";
import {
  useColorModeValue,
  VStack,
  HStack,
  Heading,
  Input,
  Button,
  Checkbox,
  Image,
} from "@chakra-ui/react";
import logo from "../logo.svg";
const Login = () => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <VStack
      bg={bg}
      spacing={4}
      w="md"
      maxW="md"
      borderRadius="lg"
      boxShadow="lg"
      borderWidth={1}
      p={8}
      mb={10}
    >
      <Link to="/">
        <Image boxSize="100px" src={logo} />
      </Link>
      <Heading>Login</Heading>
      <Input placeholder="Email" type="email"></Input>
      <Input placeholder="Password" type="password"></Input>
      <HStack justifyContent="space-between" w="full">
        <Checkbox>Remember me</Checkbox>
        <Link to="/account/forgetpassword">Forget Password?</Link>
      </HStack>
      <Link style={{ display: "block", width: "100%" }} to="/">
        <Button size="lg" colorScheme="blue" w="full">
          Login
        </Button>
      </Link>
      <Link to="/account/signup">No account? Signup</Link>
    </VStack>
  );
};

export default Login;
