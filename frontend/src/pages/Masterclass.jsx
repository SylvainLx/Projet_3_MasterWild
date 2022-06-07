import { Box } from "@chakra-ui/react";
import VideoSample from "../components/VideoSample";
import CardMasterclass from "../components/CardMasterclass";

export default function Masterclass() {
  return (
    <Box margin={{ base: "none", md: "50px" }}>
      <VideoSample />
      <CardMasterclass />
      <CardMasterclass />
    </Box>
  );
}
