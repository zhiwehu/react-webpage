import {
  Box,
  Stack,
  Flex,
  VStack,
  HStack,
  Heading,
  Image,
  Icon,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

import { MdOutlineCenterFocusStrong } from "react-icons/md";
import Wave from "../components/Wave";

const Home = () => {
  return (
    <VStack
      spacing={10}
      justifyContent="center"
      align="center"
      w="full"
      maxW="6xl"
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        direction={{ base: "column", lg: "row" }}
      >
        <VStack zIndex={1}>
          <Heading>We build Apps</Heading>
          <Text w="md">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </Text>
          <HStack>
            <Button>按钮1</Button>
            <Button>按钮2</Button>
          </HStack>
        </VStack>
        <Flex border="solid 1px transparent">
          <Image
            zIndex={1}
            h={[56, 72, 96, "full"]}
            w="full"
            fit="cover"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
            loading="lazy"
          />
          <Box position="absolute" left={0} zIndex={0}>
            <Wave />
          </Box>
        </Flex>
      </Stack>

      <SimpleGrid w="full" columns={{ base: 1, lg: 3 }} spacing={4}>
        <Box p={4} boxShadow="lg" borderRadius="lg">
          <Icon fontSize="6xl" as={MdOutlineCenterFocusStrong} />
          <Heading>Focus</Heading>
          <Text>
            Manage all your online and offline sales in one place with a single
            integration, simplifying reporting and reconciliation. Terminal
            works seamlessly with Payments, Connect, and Billing.
          </Text>
        </Box>
        <Box p={4} boxShadow="lg" borderRadius="lg">
          <Icon fontSize="6xl" as={MdOutlineCenterFocusStrong} />
          <Heading>Focus</Heading>
          <Text>
            Manage all your online and offline sales in one place with a single
            integration, simplifying reporting and reconciliation. Terminal
            works seamlessly with Payments, Connect, and Billing.
          </Text>
        </Box>
        <Box p={4} boxShadow="lg" borderRadius="lg">
          <Icon fontSize="6xl" as={MdOutlineCenterFocusStrong} />
          <Heading>Focus</Heading>
          <Text>
            Manage all your online and offline sales in one place with a single
            integration, simplifying reporting and reconciliation. Terminal
            works seamlessly with Payments, Connect, and Billing.
          </Text>
        </Box>
      </SimpleGrid>

      <Flex>3</Flex>
      <Flex>4</Flex>
      <Flex>5</Flex>
      <Flex>6</Flex>
      <Flex>7</Flex>
    </VStack>
  );
};

export default Home;
