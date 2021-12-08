import { Box, Flex } from "@chakra-ui/react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <Box>
      <Flex
        w="full"
        minH="100vh"
        direction="column"
        justifyContent="space-between"
        overflow="hidden"
      >
        <Header />
        <Main />
        <Footer />
      </Flex>
    </Box>
  );
};

export default MainLayout;
