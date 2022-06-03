import {
  Box,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import Hugo from "../assets/hugoclement.png";
import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";

export default function Connexion() {
  return (
    <Stack minH="100vh">
      <Box bg="#1738CE" w="100%" p={4} color="white">
        <Text textAlign="end" fontWeight="medium">
          Se{" "}
          <Text as="span" fontSize="2em">
            C
          </Text>
          onnecter
        </Text>
      </Box>
      <Flex direction="row" justify="space-between">
        <Image boxSize="33%" src={Hugo} alt="Hugo Clement" />
        <Image boxSize="33%" src={Harry} alt="Harry Roselmack" />
        <Image boxSize="33%" src={Xavier} alt="Xavier Niel" />
      </Flex>
      <Box bg={useColorModeValue("white", "gray.700")} p={8}>
        <Stack spacing={4}>
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
            <Input
              type="password"
              placeholder="Mot de passe"
              bg={useColorModeValue("gray.100")}
              border="none"
            />
          </FormControl>
          <Stack spacing={4}>
            <Button
              mt="1em"
              bg="#1738CE"
              rounded="full"
              color="white"
              _hover={{
                transform: "translateY(-2px)",
              }}
            >
              Connexion
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
      </Box>
    </Stack>
  );
}
