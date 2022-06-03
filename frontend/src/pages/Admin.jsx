import {
  Button,
  Spacer,
  Text,
  Flex,
  Box,
  Container,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "../style/Admin.css";

export default function Admin() {
  return (
    <div>
      <Box
        bg="#1738CE
"
        textAlign="end"
        color="white"
        pr="1.5rem"
        h="3rem"
      >
        <Text>
          <Text as="span" fontSize="2.5rem">
            A
          </Text>
          dministrateur
        </Text>
      </Box>
      <Flex
        mt="1rem"
        bg="#EF4957
        "
        color="white"
        w="100%"
        h="22rem"
        textAlign="center"
        fontSize="2rem"
        alignItems="center"
        justifyContent="center"
      >
        {" "}
        <Container>
          {" "}
          <Box>
            <Text>
              <Text fontSize="3rem">150</Text>
              Clients
            </Text>
          </Box>
          <Spacer m="2rem" />
          <Box>
            {" "}
            <Text>
              {" "}
              <Text fontSize="3rem">75</Text>
              Abonnés
            </Text>
          </Box>
        </Container>
        <Container>
          {" "}
          <Box>
            <Text>
              {" "}
              <Text fontSize="3rem">43</Text>
              Masterclass
            </Text>
          </Box>
          <Spacer m="2rem" />
          <Box>
            <Text>
              {" "}
              <Text fontSize="3rem">240</Text>
              Ventes
            </Text>
          </Box>
        </Container>
      </Flex>
      <Flex mt="1rem">
        <Box
          bg="#1738CE
          "
          textAlign="center"
          color="white"
          pt="0.3rem"
          h="3rem"
          w="50%"
        >
          {" "}
          <Button
            bg="#1738CE
"
          >
            <Text>
              <Text as="span" fontSize="2rem">
                C
              </Text>
              lients
            </Text>{" "}
          </Button>
        </Box>
        <Box
          bg="#EF4957
          "
          textAlign="center"
          color="white"
          pt="0.3rem"
          h="3rem"
          w="50%"
        >
          {" "}
          <Button bg="#EF4957">
            <Text>
              <Text as="span" fontSize="2rem">
                M
              </Text>
              asterclass{" "}
            </Text>
          </Button>
        </Box>
      </Flex>
      <Flex textAlign="center" display="flex" align="center" mt="1rem">
        {" "}
        <Container w="100%" h="25rem" bg="rgba(23,56,206, 0.8)">
          <Box display="flex" justifyContent="space-around" m="1rem">
            {" "}
            <Button w="45%" bg="#1738CE" color="white">
              Abonnés
            </Button>
            <Button w="45%" bg="#1738CE" color="white">
              Non-abonnés
            </Button>
          </Box>
          <Menu>
            <MenuButton
              colorScheme="rgba(23,56,206, 0.9)"
              borderWidth="1px"
              borderColor="blue"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              w="80%"
              _expanded={{ bg: "#1738CE" }}
            >
              Abonnés
            </MenuButton>
            <MenuList bg="rgba(23,56,206, 0.5)">
              <MenuItem color="white" borderBottom="1px">
                Abonné 1
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Abonné 2
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Abonné 3
              </MenuItem>
              <MenuItem color="white">Abonné 4</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              colorScheme="rgba(23,56,206, 0.9)"
              borderWidth="1px"
              borderColor="blue"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              w="80%"
              _expanded={{ bg: "#1738CE" }}
            >
              Non-abonnés
            </MenuButton>
            <MenuList bg="rgba(23,56,206, 0.5)">
              <MenuItem color="white" borderBottom="1px">
                Abonné 1
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Abonné 2
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Abonné 3
              </MenuItem>
              <MenuItem color="white">Abonné 4</MenuItem>
            </MenuList>
          </Menu>
        </Container>
      </Flex>
      <Flex textAlign="center" display="flex" align="center" mt="1rem">
        {" "}
        <Container w="100%" h="25rem" bg="rgba(255,0,0, 0.6)">
          <Box display="flex" justifyContent="space-around" m="1rem">
            {" "}
            <Button w="45%" bg="#1738CE" color="white">
              Abonnés
            </Button>
            <Button w="45%" bg="#1738CE" color="white">
              Non-abonnés
            </Button>
          </Box>
          <Menu>
            <MenuButton
              colorScheme="rgba(23,56,206, 0.9)"
              borderWidth="1px"
              borderColor="blue"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              w="80%"
              _expanded={{ bg: "#1738CE" }}
            >
              Abonnés
            </MenuButton>
            <MenuList bg="rgba(23,56,206, 0.5)">
              <MenuItem color="white" borderBottom="1px">
                Abonné 1
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Abonné 2
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Abonné 3
              </MenuItem>
              <MenuItem color="white">Abonné 4</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              colorScheme="rgba(23,56,206, 0.9)"
              borderWidth="1px"
              borderColor="blue"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              w="80%"
              _expanded={{ bg: "#1738CE" }}
            >
              Non-abonnés
            </MenuButton>
            <MenuList bg="rgba(23,56,206, 0.5)">
              <MenuItem color="white" borderBottom="1px">
                Abonné 1
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Abonné 2
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Abonné 3
              </MenuItem>
              <MenuItem color="white">Abonné 4</MenuItem>
            </MenuList>
          </Menu>
        </Container>
      </Flex>
    </div>
  );
}
