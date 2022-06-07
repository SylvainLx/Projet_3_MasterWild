import {
  Box,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import Hugo from "../assets/hugoclement.png";
import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";

export default function Connexion() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Stack>
      <Box bg="#1738CE" w="100%" p={4} h={{ md: "10em" }} color="white">
        <Text textAlign="end" fontWeight="medium" fontSize={{ md: "3em" }}>
          Se{" "}
          <Text as="span" fontSize="2em">
            C
          </Text>
          onnecter
        </Text>
      </Box>
      <Flex direction={{ base: "column", md: "row" }}>
        <Flex pb={4} p="4">
          <Image src={Hugo} alt="Hugo Clement" />
        </Flex>
        <Flex
          w={{ md: "50%" }}
          bg={useColorModeValue("white", "gray.700")}
          pl={8}
          pr={8}
          justifyContent="center"
          align="center"
        >
          <Stack spacing={4} w="90%">
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                bg={useColorModeValue("gray.100")}
                border="none"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Mot de passe</FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Mot de passe"
                  bg={useColorModeValue("gray.100")}
                  border="none"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={4} align="center">
              <Button
                mt="1em"
                bg="#1738CE"
                rounded="full"
                color="white"
                _hover={{
                  transform: "translateY(-2px)",
                }}
                minWidth={{ md: "30%" }}
              >
                <Link href="/search">Connexion</Link>
              </Button>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align="end"
                justify="space-between"
                fontWeight="medium"
              >
                <Text color={useColorModeValue("#1738CE")}>
                  Mot de passe oublié?
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
        <Flex flexDirection="column" w={{ md: "50%" }} justify="center">
          <Flex
            direction="row"
            justify="space-between"
            pt={4}
            pb={4}
            p={{ md: "4" }}
          >
            <Image w="33%" src={Hugo} alt="Hugo Clement" />
            <Image w="33%" src={Harry} alt="Harry Roselmack" />
            <Image w="33%" src={Xavier} alt="Xavier Niel" />
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pl={8}
            pr={8}
          >
            <Text
              textAlign="center"
              fontWeight="medium"
              color={useColorModeValue("#1738CE")}
            >
              Pas encore de compte ?
            </Text>
            <Button
              mt="1em"
              bg="#1738CE"
              rounded="full"
              color="white"
              _hover={{
                transform: "translateY(-2px)",
              }}
              minWidth={{ md: "30%" }}
            >
              <Link href="/inscription">S'inscrire</Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
}
