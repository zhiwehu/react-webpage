import { Link } from "react-router-dom";
import {
  useColorModeValue,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import logo from "../logo.svg";

const ForgetPassword = () => {
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
      <Heading>Forget Password</Heading>
      <Text>Please input your email address.</Text>
      <Input placeholder="Email" type="email"></Input>

      <Link
        style={{ display: "block", width: "100%" }}
        to="/account/forgetpassworddone"
      >
        <Button size="lg" colorScheme="blue" w="full">
          Reset Password
        </Button>
      </Link>
    </VStack>
  );
};

export default ForgetPassword;
