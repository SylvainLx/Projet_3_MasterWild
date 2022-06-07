import { NavLink } from "react-router-dom";
import "../style/Header.css";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { logowhite } from "../assets/logowhite.png";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("white", "gray.900")} px={4}>
      <Flex h={24} alignItems="center" justifyContent="space-between">
        <IconButton
          size="lg"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={12} alignItems="center">
          <Box w="auto">
            <Link href="/">
              <Image className="logo-header" src={logowhite} alt="logowhite" />
            </Link>
          </Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/profil">Profil</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box
          position="absolute"
          zIndex="100"
          bg="#1738CE"
          marginTop="1rem"
          pb={4}
          display={{ md: "none" }}
        >
          <Stack as="nav" spacing={4}>
            <NavLink className="burgerlink" to="/">
              Home{" "}
            </NavLink>
            <NavLink className="burgerlink" to="/login">
              Login
            </NavLink>
            <NavLink className="burgerlink" to="/masterclass">
              Masterclass
            </NavLink>
            <NavLink className="burgerlink" to="/search">
              Search
            </NavLink>
            <NavLink className="burgerlink" to="/paiement">
              Paiement
            </NavLink>
            <NavLink className="burgerlink" to="/profil">
              Profil
            </NavLink>
            <NavLink className="burgerlink" to="/contact">
              Contact
            </NavLink>
            <NavLink className="burgerlink" to="/admin">
              Admin
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
