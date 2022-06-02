import {
  SimpleGrid,
  Box,
  Text,
  Container,
  AspectRatio,
} from "@chakra-ui/react";
import Harry from "../assets/harryroselmack.jpg";
import Xavier from "../assets/xavierniel.jpg";
import LogoBleu from "../assets/logoattente.jpg";

export default function Home() {
  return (
    <div className="container">
      <Container bgColor="#1738CE" height="20%">
        <img src={LogoBleu} alt="inspiraction logo" />
      </Container>
      <div>
        <Text color="#1738CE" align="center" padding="50px 35px">
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
          <AspectRatio marginTop="7%">
            <iframe
              title="Masterclass"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio>
        </div>
      </div>
      <div>
        <Text color="#1738CE" align="center" padding="50px 35px">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1 500s, when an unknown printer took a galley of type and
          scrambled it to make.
        </Text>
      </div>
      <div className="subscribing-area">
        <div className="basic-sub">
          <div className="basic-sub-title">
            <p>Basic</p>
          </div>
          <div className="basic-sub-text">
            <p>Lorem Ipsum is simple dummy text...</p>
          </div>
          <div className="subscribe-button">
            <button type="button">subscribe</button>
          </div>
        </div>
        <div className="premium-sub">
          <div className="premium-sub-title">
            <p>Premium</p>
          </div>
          <div className="premium-sub-text">
            <p>Lorem Ipsum is simple dummy text...</p>
          </div>
          <div className="subscribe-button">
            <button type="button">subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
