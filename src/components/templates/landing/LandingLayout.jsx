import { Link, MatchRoute, Outlet } from "@tanstack/react-location";
import Navbar from "./LandingNavbar";
import { Box, Button } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <Box px={4} w={"100%"}>
        <div>
          <Outlet />
        </div>
      </Box>
      {/* button scrollto top fixed  */}
      <Button
        onClick={scrollToTop}
        variant="outline"
        size="sm"
        position="fixed"
        bottom={2}
        right={2}
        zIndex={10}
        mr={4}
        mt={4}
        borderRadius="0"
        bg="gray.500"
        color={"white"}
        _hover={{
          bg: "teal.500",
          color: "white",
          borderColor: "teal.500",
        }}
      >
        <ChevronUpIcon />
      </Button>
    </>
  );
};

export default LandingLayout;
