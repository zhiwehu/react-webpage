import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const FullLayout = () => {
  return (
    <Box>
      <Flex w="full" minH="100vh" alignItems="center" justifyContent="center">
        <Outlet />
      </Flex>
    </Box>
  );
};

export default FullLayout;
