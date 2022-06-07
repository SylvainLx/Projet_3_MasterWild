import { Box, Image, Button, Flex } from "@chakra-ui/react";

export default function CardMasterclass() {
  const property = {
    theme: "Music",
  };

  return (
    <Box
      maxW="180px"
      borderRadius="lg"
      border="2px solid rgba(23, 56, 206, 1)"
      boxShadow="8px 8px 12px #aaa"
      margin="auto"
    >
      <Image src="https://bit.ly/2Z4KKcF" alt="Masterclass's caption" />

      <Flex
        flexDirection="column"
        justify=" space-between"
        p="2"
        height="200px"
      >
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {property.theme}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          textAlign="center"
        >
          Titre de la vidéo
        </Box>

        <Box textAlign="center">
          Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          <Button
            as="span"
            ml="2"
            color="rgba(23, 56, 206, 1)"
            fontSize="15px"
            bgColor="white"
            variant="link"
            cursor="pointer"
          >
            LEARN MORE
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
