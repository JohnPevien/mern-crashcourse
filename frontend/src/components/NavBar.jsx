import { Container, Flex, Text, Link, HStack, Button } from "@chakra-ui/react";
import { FaPlusSquare } from "react-icons/fa";
import { useTheme } from "next-themes";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Container w="7xl" fluid maxW="7xl" px={4}>
      <Flex
        h={16}
        justify={"space-between"}
        alignItems={"center"}
        wrap={"wrap"}
        gap={2}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          bgGradient="linear(to-r, red.500, yellow.500)"
          bgClip="text"
          fontSize={{ base: "22", sm: "28" }}
          textAlign={"center"}
          fontWeight="bold"
          textTransform={"uppercase"}
          textDecoration="none"
        >
          <Link to="/">Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to="/create">
            <Button variant="outline">
              <FaPlusSquare fontSize={20} />
            </Button>
          </Link>
          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "Dark" : "Light"}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
export default NavBar;
