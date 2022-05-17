import { Box, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      background={colorMode === "light" ? "gray.100" : "gray.700"}
      style={{ height: "6vh" }}
      padding={5}
    >
      <Text fontSize="4xl" fontWeight="bold">
        CEAP
      </Text>
      <Box>
        <IconButton
          aria-label="Theme"
          icon={<SunIcon />}
          onClick={toggleColorMode}
          size="lg"
          background="transparent"
          _hover={{
            background: colorMode === "light" ? "gray.200" : "gray.600",
          }}
          _focus={{ background: "transparent" }}
        />
      </Box>
    </Box>
  );
}
