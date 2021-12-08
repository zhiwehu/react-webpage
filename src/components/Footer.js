import {
  Flex,
  HStack,
  Text,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiWechat, SiSinaweibo, SiTencentqq } from "react-icons/si";

const Footer = () => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Flex
      as="footer"
      py={4}
      bg={bg}
      w="full"
      alignItems="center"
      justifyContent="space-between"
      mx="auto"
      px={2}
    >
      <Text>© 2021 Company. All rights reserved.</Text>
      <HStack>
        <IconButton variant="none" icon={<SiWechat />}></IconButton>
        <IconButton variant="none" icon={<SiSinaweibo />}></IconButton>
        <IconButton variant="none" icon={<SiTencentqq />}></IconButton>
      </HStack>
    </Flex>
  );
};

export default Footer;
