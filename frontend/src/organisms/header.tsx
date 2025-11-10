import { Box, Flex } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import bookrLogo from "../assets/bookr-logo-black.png";
import { NavigationMenu, 
  navigationMenuTriggerStyle,
 NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";

export default function Header() {
  return (
    <header>
      <Flex direction={"column"} pr={"4"} pl={"4"} pt={"2"}>
        <Flex justify={"between"}>
          <Box>
            <img src={bookrLogo} height={40} alt="React logo" />
          </Box>
          <Box>
            <NavigationMenu>
              <NavigationMenuList className="flex-wrap">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/docs" to={"."}>Docs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/docs" to={"."}>Docs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </Box>
          <Box>
            <span>Account</span>
          </Box>
        </Flex>
      </Flex>
    </header>
  );
}
