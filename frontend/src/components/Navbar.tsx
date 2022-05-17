import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom"

import Zoro from "../assets/zoro.jpg";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate()

  const logout = () => {
    navigate("/")
  }

  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      background={colorMode === "light" ? "gray.100" : "gray.700"}
      style={{ height: "6vh", maxHeight: "6vh" }}
      padding={5}
    >
      <Text fontSize="4xl" fontWeight="bold">
        CEAP
      </Text>
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            background="transparent"
            _hover={{ background: "transparent" }}
            _active={{ background: "transparent" }}
            _focus={{ border: "none" }}
          >
            <Avatar name="Zoro" src={Zoro} />
          </MenuButton>
          <MenuList>
            <MenuItem>Claudio Guevara</MenuItem>
            <MenuItem onClick={logout}>Cerrar Sesión</MenuItem>
          </MenuList>
        </Menu>
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
