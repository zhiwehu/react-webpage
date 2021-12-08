import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Main = () => {
  return (
    <Flex
      mt={20}
      flexGrow={1}
      alignItems="flex-start"
      justifyContent="center"
      w="full"
      p={{ base: 4, md: 2 }}
    >
      <Outlet />
    </Flex>
  );
};

export default Main;
