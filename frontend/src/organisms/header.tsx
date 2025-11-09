import { Box, Flex, Link as LinkRadix, TabNav } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import bookrLogo from "../assets/bookr-logo-black.png";
export default function Header() {
  return (
    <header>
      <Flex direction={"column"} pr={"4"} pl={"4"} pt={"2"}>
        <Flex justify={"between"}>
          <Box>
            <img src={bookrLogo} height={40} alt="React logo" />
          </Box>
          <Box>
            <TabNav.Root>
              <TabNav.Link>My Library</TabNav.Link>
              <TabNav.Link>My Reading List</TabNav.Link>
              <TabNav.Link>Lend History</TabNav.Link>
            </TabNav.Root>
          </Box>
          <Box>
            <span>Account</span>
          </Box>
        </Flex>
      </Flex>
    </header>
  );
}
