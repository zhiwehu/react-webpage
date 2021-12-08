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
const ResetPassword = () => {
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
      <Heading>Reset Password</Heading>
      <Input placeholder="New Password" type="password"></Input>
      <Input placeholder="New Password Again" type="password"></Input>
      <Link style={{ display: "block", width: "100%" }} to="/">
        <Button size="lg" colorScheme="blue" w="full">
          Reset Password
        </Button>
      </Link>
    </VStack>
  );
};

export default ResetPassword;
