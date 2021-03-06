import { Link } from "react-router-dom";
import {
  useColorModeValue,
  VStack,
  HStack,
  Heading,
  Input,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animate";
import logo from "../logo.svg";
const Signup = () => {
  const bg = useColorModeValue("white", "gray.800");
  const MotionVStack = motion(VStack);
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
      <Heading>Signup</Heading>
      <Text>We will NOT use your email in anywhere.</Text>
      <HStack justifyContent="space-between" w="full">
        <Input placeholder="First Name" type="text"></Input>
        <Input placeholder="Last Name" type="text"></Input>
      </HStack>
      <Input placeholder="Email" type="email"></Input>
      <Input placeholder="Password" type="password"></Input>
      <Input placeholder="Password Again" type="password"></Input>
      <Link style={{ display: "block", width: "100%" }} to="/">
        <Button size="lg" colorScheme="blue" w="full">
          Signup
        </Button>
      </Link>
      <Link to="/account/login">Already has an account</Link>
    </MotionVStack>
  );
};

export default Signup;
