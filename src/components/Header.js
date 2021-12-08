import { Link } from "react-router-dom";
import {
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Flex,
  Image,
  VisuallyHidden,
  Heading,
  HStack,
  VStack,
  Button,
  CloseButton,
  IconButton,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../logo.svg";

const Header = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      as="head"
      bg={bg}
      w="full"
      alignItems="center"
      justifyContent="space-between"
      mx="auto"
      px={2}
      position="fixed"
      zIndex={100}
      boxShadow="sm"
    >
      <Flex alignItems="center">
        <Link to="/">
          <Image boxSize="64px" src={logo} />
          <VisuallyHidden>Company</VisuallyHidden>
        </Link>
        <Heading fontSize="xl" fontWeight="medium" ml={2}>
          Company
        </Heading>
      </Flex>
      <HStack as="nav">
        <HStack display={{ base: "none", md: "inline-flex" }}>
          <Link to="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link to="/works">
            <Button variant="ghost">Works</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
          <Link to="/account/login">
            <Button variant="ghost">Sign in</Button>
          </Link>
        </HStack>
        <Link to="/account/signup">
          <Button colorScheme="green">Get Started</Button>
        </Link>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          color={useColorModeValue("gray.800", "inherit")}
          variant="ghost"
          icon={<AiOutlineMenu />}
          onClick={mobileNav.onOpen}
        />
        <IconButton
          fontSize="20px"
          color={useColorModeValue("gray.800", "inherit")}
          variant="ghost"
          icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
          onClick={toggleColorMode}
        />
        <VStack
          pos="absolute"
          top={0}
          left={0}
          right={0}
          display={mobileNav.isOpen ? "flex" : "none"}
          p={2}
          pb={4}
          m={2}
          bg={bg}
          spacing={3}
          rounded="sm"
          shadow="sm"
        >
          <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

          <Link to="/about">
            <Button onClick={mobileNav.onClose} variant="ghost">
              About
            </Button>
          </Link>
          <Link to="/works">
            <Button onClick={mobileNav.onClose} variant="ghost">
              Works
            </Button>
          </Link>
          <Link to="/contact">
            <Button onClick={mobileNav.onClose} variant="ghost">
              Contact
            </Button>
          </Link>
          <Link to="/account/login">
            <Button onClick={mobileNav.onClose} variant="ghost">
              Sign in
            </Button>
          </Link>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default Header;
