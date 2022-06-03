import {
  SimpleGrid,
  Box,
  Text,
  Container,
  AspectRatio,
} from "@chakra-ui/react";
import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";
import LogoBleu from "../assets/logoattente.png";

export default function Home() {
  return (
    <div>
      <Container bgColor="#1738CE" height="20%">
        <img src={LogoBleu} alt="inspiraction logo" />
      </Container>
      <div>
        <Text
          color="#1738CE"
          align="center"
          fontWeight="600"
          padding="50px 35px"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1 500s, when an unknown printer took a galley of type and
          scrambled it to make.
        </Text>
      </div>
      <SimpleGrid columns={[2]} spacing="0px">
        <Box
          bg="#EF4957"
          height="100%"
          width="100%"
          padding="25% 15%"
          align="right"
          fontSize="1.2rem"
        >
          <Text color="white" fontWeight="bold">
            Prénom
          </Text>
          <Text color="white" textTransform="uppercase" fontWeight="bold">
            Nom
          </Text>
          <Text color="white">Métier</Text>
        </Box>
        <Box bg="#1738CE" height="100%" width="100%">
          <img src={Xavier} alt="célébrité" />
        </Box>
        <Box bg="#1738CE" height="100%" width="100%">
          <img src={Harry} alt="célébrité" />
        </Box>
        <Box
          bg="#1738CE"
          height="100%"
          width="100%"
          padding="25% 15%"
          align="left"
          fontSize="1.2rem"
        >
          <Text color="white" fontWeight="bold">
            Prénom
          </Text>
          <Text color="white" textTransform="uppercase" fontWeight="bold">
            Nom
          </Text>
          <Text color="white">Métier</Text>
        </Box>
        <Box
          bg="#EF4957"
          height="100%"
          width="100%"
          padding="25% 15%"
          align="right"
          fontSize="1.2rem"
        >
          <Text color="white" fontWeight="bold">
            Prénom
          </Text>
          <Text color="white" textTransform="uppercase" fontWeight="bold">
            Nom
          </Text>
          <Text color="white">Métier</Text>
        </Box>
        <Box bg="#1738CE" height="100%" width="100%">
          <img src={Xavier} alt="célébrité" />
        </Box>
      </SimpleGrid>
      <div>
        <div display="flex" align="center">
          <AspectRatio marginTop="5%">
            <iframe
              title="Masterclass"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
        </div>
      </div>
      <div>
        <Text
          color="#1738CE"
          align="center"
          fontWeight="600"
          padding="50px 35px"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1 500s, when an unknown printer took a galley of type and
          scrambled it to make.
        </Text>
      </div>
      <div>
        <SimpleGrid columns={[2]} spacing="0px">
          <Box bg="#EF4957" height="100%" width="100%" fontSize="1.2rem">
            <Text
              color="#1738CE"
              textAlign="center"
              marginTop="-25px"
              fontWeight="600"
            >
              <Text as="span" fontSize="4.5rem">
                B
              </Text>
              asic
            </Text>
            <Text
              fontSize="0.8rem"
              color="white"
              textAlign="center"
              padding="15px"
              marginTop="-20px"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </Box>
          <Box bg="#1738CE" height="100%" width="100%" fontSize="1.2rem">
            <Text
              color="#EF4957"
              textAlign="center"
              marginTop="-25px"
              fontWeight="600"
            >
              <Text as="span" fontSize="4.5rem" letterSpacing="-22px">
                P
              </Text>
              remium
            </Text>
            <Text
              fontSize="0.8rem"
              color="white"
              textAlign="center"
              padding="15px"
              marginTop="-20px"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </Box>
        </SimpleGrid>
      </div>
    </div>
  );
}
