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
import { motion } from "framer-motion";
import { pageAnimation, fade } from "../animate";

import logo from "../logo.svg";
const Login = () => {
  const bg = useColorModeValue("white", "gray.800");
  const MotionVStack = motion(VStack);
  const MotionButton = motion(Button);
  return (
    <MotionVStack
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      w="md"
      maxW="md"
      bg={bg}
      spacing={4}
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
        <MotionButton variants={fade} size="lg" colorScheme="blue" w="full">
          Login
        </MotionButton>
      </Link>
      <Link to="/account/signup">No account? Signup</Link>
    </MotionVStack>
  );
};

export default Login;
