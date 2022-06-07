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
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Hugo from "../assets/hugoclement.png";
import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";

export default function Inscription() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  const postUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/users", {
        firstname,
        lastname,
        email,
        password,
      })
      .then((response) => {
        setUser(response.data);
        navigate("/search");
      });
  };
  return (
    <Stack>
      <Box bg="#1738CE" w="100%" p={4} h={{ md: "10em" }} color="white">
        <Text textAlign="end" fontWeight="medium" fontSize={{ md: "3em" }}>
          S'{" "}
          <Text as="span" fontSize="2em">
            I
          </Text>
          nscrire
        </Text>
      </Box>
      <Flex direction={{ base: "column", md: "row" }}>
        <Flex pb={4} p="4">
          <Image src={Hugo} alt="Hugo Clement" />
        </Flex>
        <Flex
          w={{ md: "50%" }}
          pl={8}
          pr={8}
          justifyContent="center"
          align="center"
        >
          <Stack spacing={4} w="90%">
            <FormControl isRequired onSubmit={postUser}>
              <FormLabel>Prénom</FormLabel>
              <Input
                id="firstname"
                type="text"
                placeholder="Prénom"
                bg={useColorModeValue("gray.100")}
                border="none"
                onChange={handleFirstname}
              />
              <FormLabel>Nom</FormLabel>
              <Input
                id="lastname"
                type="text"
                placeholder="Nom"
                bg={useColorModeValue("gray.100")}
                border="none"
                onChange={handleLastname}
              />
              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                bg={useColorModeValue("gray.100")}
                border="none"
                onChange={handleMail}
              />
              <FormLabel>Mot de passe</FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  type={show ? "text" : "password"}
                  placeholder="Mot de passe"
                  bg={useColorModeValue("gray.100")}
                  border="none"
                  onChange={handlePassword}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Flex flexDirection="column" py="4">
                <Checkbox borderColor="gray.100">
                  J'accepte les conditions générales.
                </Checkbox>
                <Checkbox borderColor="gray.100">
                  Je souhaite recevoir la newsletter.
                </Checkbox>
              </Flex>
              <Stack spacing={4} align="center">
                <Button
                  type="submit"
                  bg="#1738CE"
                  rounded="full"
                  color="white"
                  _hover={{
                    transform: "translateY(-2px)",
                  }}
                  minWidth={{ md: "30%" }}
                >
                  <Text href="/search">Je m'inscris</Text>
                </Button>
              </Stack>
            </FormControl>
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
              Vous avez déjà un compte ?
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
              <Link href="/connexion">Je me connecte</Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
}
