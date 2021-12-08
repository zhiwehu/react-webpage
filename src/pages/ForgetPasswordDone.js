import { Link } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const ForgetPasswordDone = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Please check your email
      </Heading>
      <Text color={"gray.500"}>
        You should receive an email from us to let you reset password. Please
        check your email and click the link in that email to reset password.
      </Text>
      <Text>
        Back to <Link to="/">Homepage</Link>
      </Text>
    </Box>
  );
};

export default ForgetPasswordDone;
