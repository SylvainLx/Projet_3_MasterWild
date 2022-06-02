import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Harry from "../assets/harryroselmack.jpg";
import Xavier from "../assets/xavierniel.jpg";

export default function Home() {
  return (
    <div className="container">
      <div className="big-logo">
        <img className="inspiraction-logo" src="logo" alt="inspiraction logo" />
      </div>
      <div className="introduction">
        <p>Lorem Ipsum is simple dummy text...</p>
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
          <img className="image-people1" src={Xavier} alt="célébrité" />
        </Box>
        <Box bg="#1738CE" height="100%" width="100%">
          <img className="image-people1" src={Harry} alt="célébrité" />
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
          <img className="image-people1" src={Xavier} alt="célébrité" />
        </Box>
      </SimpleGrid>
      {/* <div className="people-mosaic">
        <div className="rectangle-name1">
          <p>name</p>
        </div>
        <div className="rectangle-image1">
          <img className="image-people1" src="logo" alt="nom célébrité" />
        </div>
        <div className="rectangle-image2">
          <img className="image-people3" src="logo" alt="nom célébrité" />
        </div>
        <div className="rectangle-name2">
          <p>name</p>
        </div>
        <div className="rectangle-name3">
          <p>name</p>
        </div>
        <div className="rectangle-image3">
          <img className="image-people3" src="logo" alt="nom célébrité" />
        </div>
      </div> */}
      <div className="video-sample">
        <img className="video" src="logo" alt="extrait vidéo" />
      </div>
      <div className="text-area">
        <p>Lorem Ipsum is simple dummy text...</p>
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
