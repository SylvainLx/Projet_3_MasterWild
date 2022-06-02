import {
  Select,
  Button,
  Spacer,
  Text,
  Flex,
  Box,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";

const [masterclassOn, setMasterclassOn] = useState(false);
const [clientsOn, setClientsOn] = useState(false);

const toggleMasterclass = () => {
  const divClient = document.querySelector(".clients");
  if (masterclassOn !== true) {
    divClient.style.display = "none";
    setMasterclassOn(true);
  } else if (masterclassOn !== false) {
    divClient.style.display = "block";
    setMasterclassOn(false);
  }
};

const toggleClients = () => {
  const divClient = document.querySelector(".clients");
  if (clientsOn === true) {
    divClient.style.display = "none";
    setClientsOn(false);
  } else if (clientsOn === false) {
    divClient.style.display = "block";
    setClientsOn(true);
  }
};

export default function Admin() {
  return (
    <div>
      <Box
        bg="#1738CE
"
        textAlign="end"
        color="white"
        pr="3rem"
        h="3rem"
      >
        <span>A</span>dministrateur
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
              150 <br />
              Clients
            </Text>
          </Box>
          <Spacer m="2rem" />
          <Box>
            {" "}
            <Text>
              {" "}
              75 <br /> Abonnés
            </Text>
          </Box>
        </Container>
        <Container>
          {" "}
          <Box>
            <Text>
              {" "}
              43
              <br /> Masterclass
            </Text>
          </Box>
          <Spacer m="2rem" />
          <Box>
            <Text>
              {" "}
              240 <br /> Ventes
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
            onClick={toggleMasterclass}
          >
            <Text>
              <span>C</span>lients
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
          <Button bg="#EF4957" onClick={toggleClients}>
            <Text>
              <span>M</span>asterclass{" "}
            </Text>
          </Button>
        </Box>
      </Flex>
      <Flex textAlign="center" display="flex" align="center" mt="1rem">
        <div className="clients" onChange={masterclassOn}>
          {" "}
          <Container w="100%" h="50rem" bg="rgba(23,56,206, 0.8)">
            <Box display="flex" justifyContent="space-around" m="1rem">
              {" "}
              <Button bg="#1738CE" color="white">
                Abonnés
              </Button>
              <Button bg="#1738CE" color="white">
                Non-abonnés
              </Button>
            </Box>
            <Select onChange={clientsOn} placeholder="Select Client" bg="none">
              <option value="option1">Client 1</option>
              <option value="option2">Client 2</option>
              <option value="option3">Client 3</option>
              <option value="option4">Client 4</option>
              <option value="option5">Client 5</option>
              <option value="option6">Client 6</option>
              <option value="option7">Client 7</option>
              <option value="option8">Client 8</option>
              <option value="option9">Client 9</option>
              <option value="option10">Client 10</option>
              <option value="option11">Client 11</option>
              <option value="option12">Client 12</option>
              <option value="option13">Client 13</option>
              <option value="option14">Client 14</option>
              <option value="option15">Client 15</option>
            </Select>
          </Container>
        </div>
      </Flex>
    </div>
  );
}
