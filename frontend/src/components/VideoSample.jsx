import { AspectRatio, Flex, Text, Box, Image } from "@chakra-ui/react";
import harryroselmack2 from "../assets/harryroselmack2.png";
import heart from "../assets/heart.png";

export default function VideoSample() {
  return (
    <section>
      <Box>
        <div display="flex" align="center">
          <AspectRatio ratio={1.85 / 1}>
            <iframe
              title="Masterclass"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
        </div>
        <Box
          display="flex"
          bgColor="rgba(23, 56, 206, 0.8)"
          marginBottom="25px"
          padding="10px"
        >
          <Box width={{ base: "300px", md: "300px" }} margin="auto">
            <Image src={harryroselmack2} alt="Celebrity's portrait" />
          </Box>
          <Flex flexDirection="column" justify="space-between">
            <Flex justify="space-between" padding="2px 10px">
              <Text
                fontSize={{ base: "1rem", md: "1.5rem" }}
                color="white"
                textAlign="center"
                textShadow="1px 1px gray"
              >
                Harry Roselmack
              </Text>
              <Image
                src={heart}
                alt="Heart for favorite"
                width="auto"
                height="10px"
              />
            </Flex>
            <Text
              fontSize={{ base: "0.7rem", md: "1rem" }}
              color="white"
              textAlign="center"
              padding="0 30px"
            >
              Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum
              temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non culpa
              quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti
              non non culpa quod cum temporibus.
            </Text>
            <Text
              fontSize={{ base: "0.5rem", md: "1rem" }}
              color="white"
              textAlign="end"
            >
              &bull; 30 min
            </Text>
          </Flex>
        </Box>
      </Box>
    </section>
  );
}
