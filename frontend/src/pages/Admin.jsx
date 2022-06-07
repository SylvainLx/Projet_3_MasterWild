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
  FormControl,
  Input,
  Stack,
  SimpleGrid,
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
            <MenuList className="menuabonné" bg="rgba(23,56,206, 0.5)">
              <MenuItem color="white" borderBottom="1px" w="19rem">
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
              <MenuItem color="white" borderBottom="1px" w="19rem">
                Non-Abonné 1
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Non-Abonné 2
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Non-Abonné 3
              </MenuItem>
              <MenuItem color="white">Non-Abonné 4</MenuItem>
            </MenuList>
          </Menu>
        </Container>
      </Flex>
      <Flex textAlign="center" display="flex" align="center" mt="1rem">
        {" "}
        <Container w="100%" h="25rem" bg="rgba(239,73,87, 0.7)">
          <Menu>
            <MenuButton
              colorScheme="rgba(239,73,87, 0.9)"
              borderWidth="1px"
              borderColor="#EF4957"
              mt="1rem"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              w="80%"
              _expanded={{ bg: "rgba(239,73,87, 0.9)" }}
            >
              Filtre Par Thématique
            </MenuButton>
            <MenuList bg="rgba(239,73,87, 0.9)">
              <MenuItem color="white" borderBottom="1px" w="19rem">
                Art
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Musique
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Recette
              </MenuItem>
              <MenuItem color="white">Sport</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              colorScheme="rgba(239,73,87, 0.9)"
              borderWidth="1px"
              borderColor="#EF4957"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              mt="1rem"
              w="80%"
              _expanded={{ bg: "rgba(239,73,87, 0.9)" }}
            >
              Selection Masterclass
            </MenuButton>
            <MenuList bg="rgba(239,73,87, 0.9)">
              <MenuItem color="white" borderBottom="1px" w="19rem">
                Masterclass 1
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Masterclass 2
              </MenuItem>
              <MenuItem color="white" borderBottom="1px">
                Masterclass 3
              </MenuItem>
              <MenuItem color="white">Masterclass 4</MenuItem>
            </MenuList>
          </Menu>
          <Box display="flex" justifyContent="space-around" m="1rem">
            {" "}
            <Button position="relative" w="45%" bg="#1738CE" color="white">
              Modifier
            </Button>
            <Button position="relative" w="45%" bg="#1738CE" color="white">
              Supprimer
            </Button>
          </Box>
        </Container>
      </Flex>
      <Flex mt="1rem">ajouter template video sample</Flex>
      <Flex textAlign="center" display="flex" align="center" mt="1rem">
        {" "}
        <Container w="100%" h="38rem" bg="rgba(23,56,206, 0.8)">
          <FormControl isRequired>
            <Box>
              <Container
                as={SimpleGrid}
                columns={{ base: 1, md: 2 }}
                z-index="10"
                h="100vh"
              >
                <Stack
                  p={{ base: 4, sm: 6, md: 5 }}
                  spacing={{ base: 8 }}
                  maxW={{ lg: "2xl" }}
                >
                  <Stack>
                    <Text fontSize="1.5rem" mt="1rem" color="white">
                      Ajouter une masterclass{" "}
                    </Text>
                  </Stack>
                  <Box as="form">
                    <Stack>
                      <Flex direction="column" spacing={8}>
                        <Input
                          placeholder="Titre de la video"
                          bg="gray.100"
                          border={0}
                          color="#1738CE"
                          _placeholder={{
                            color: "#1738CE",
                          }}
                          mb="1rem"
                        />
                        <Input
                          placeholder="Description"
                          bg="gray.100"
                          border={0}
                          color="#1738CE"
                          _placeholder={{
                            color: "#1738CE",
                          }}
                          mb="1rem"
                        />{" "}
                        <Input
                          placeholder="Photo"
                          bg="gray.100"
                          border={0}
                          color="#1738CE"
                          _placeholder={{
                            color: "#1738CE",
                          }}
                          mb="1rem"
                        />{" "}
                        <Input
                          placeholder="Nom célébrité"
                          bg="gray.100"
                          border={0}
                          color="#1738CE"
                          _placeholder={{
                            color: "#1738CE",
                          }}
                          mb="1rem"
                        />{" "}
                        <Input
                          placeholder="URL"
                          bg="gray.100"
                          border={0}
                          color="#1738CE"
                          _placeholder={{
                            color: "#1738CE",
                          }}
                          mb="1rem"
                        />{" "}
                        <Input
                          placeholder="Thématique"
                          bg="gray.100"
                          border={0}
                          color="#1738CE"
                          _placeholder={{
                            color: "#1738CE",
                          }}
                          mb="1rem"
                        />{" "}
                        <Input
                          placeholder="Mots clés"
                          bg="gray.100"
                          border={0}
                          color="#1738CE"
                          _placeholder={{
                            color: "#1738CE",
                          }}
                          mb="1rem"
                        />{" "}
                      </Flex>
                    </Stack>
                    <Button
                      mt={5}
                      type="submit"
                      w="full"
                      bg="#1738CE"
                      color="white"
                    >
                      Enregistrer
                    </Button>
                  </Box>
                </Stack>
              </Container>
            </Box>
          </FormControl>
        </Container>
      </Flex>
    </div>
  );
}
